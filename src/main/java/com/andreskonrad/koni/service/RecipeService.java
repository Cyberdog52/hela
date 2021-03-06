package com.andreskonrad.koni.service;

import com.andreskonrad.koni.dto.menu.Recipe;
import com.andreskonrad.koni.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public List<Long> getIds() {
        ArrayList<Long> idList = new ArrayList<>();
        recipeRepository.findAll()
                .forEach(recipe -> idList.add(recipe.getId()));
        return idList;
    }

    public Recipe get(Long id) {
        return recipeRepository.findById(id).orElse(null);
    }

    public Recipe save(Recipe menu) {
        return recipeRepository.save(menu);
    }

    public Recipe create() {
        Recipe recipe = new Recipe();
        recipe.setNumberOfPeople(4);
        Recipe savedRecipe =  recipeRepository.save(recipe);
        savedRecipe.setTitle("Neues Rezept " + recipe.getId());
        return recipeRepository.save(recipe);
    }


    public void delete(Long id) {
        recipeRepository.deleteById(id);
    }
}
