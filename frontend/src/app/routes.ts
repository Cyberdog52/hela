import {Routes} from "@angular/router";
import {MenuMainComponent} from "./menu/menu-main.component";
import {MenuOverviewComponent} from "./menu/menu/menu-overview/menu-overview.component";
import {RecipeOverviewComponent} from "./menu/recipe/recipe-overview/recipe-overview.component";

export const routes: Routes = [
  {path: 'menu', component: MenuMainComponent},
  {path: 'menu/:id', component: MenuOverviewComponent },
  {path: 'recipe/:id', component: RecipeOverviewComponent },
  {path: '', redirectTo: '/menu', pathMatch: 'full'}
];
