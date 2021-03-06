package com.andreskonrad.koni.dto.menu;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Entity
@Table
public class Recipe implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(unique = true)
    private String title;


    @OneToMany(cascade = CascadeType.ALL, orphanRemoval=true)
    private List<Ingredient> ingredients = new ArrayList<>();

    @ElementCollection
    private List<String> steps = new ArrayList<>();

    @Column
    private Integer numberOfPeople;

    @Column
    private String linkToPicture;

    public Recipe() {
    }

    public String getTitle() {
        return title;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public List<String> getSteps() {
        return steps;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getNumberOfPeople() {
        return numberOfPeople;
    }

    public void setNumberOfPeople(Integer numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
    }

    public String getLinkToPicture() {
        return linkToPicture;
    }

    public void setLinkToPicture(String linkToPicture) {
        this.linkToPicture = linkToPicture;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Recipe recipe = (Recipe) o;
        return Objects.equals(id, recipe.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public Long getId() {
        return this.id;
    }

    public List<Ingredient> calculateIngredients(Integer newNumberOfPeople) {
        List<Ingredient> calculatedIngredients = new ArrayList<>();
        for (Ingredient i : this.getIngredients()) {
            if (i.getProduct() == null || i.getAmount() == null || newNumberOfPeople == null) {
                continue;
            }
            Ingredient newIngredient = new Ingredient(i.getProduct(), new Amount(i.getAmount().getAmountSize(), i.getAmount().getValue() * newNumberOfPeople / this.getNumberOfPeople()), new ArrayList<>());
            newIngredient.adjustSize();
            newIngredient.round();
            newIngredient.addRecipeName(this.getTitle());
            calculatedIngredients.add(newIngredient);
        }

        return calculatedIngredients;
    }
}
