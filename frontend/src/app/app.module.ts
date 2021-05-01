import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {ToastrModule} from "ngx-toastr";
import {MatCardModule, MatDialogModule, MatIconModule} from "@angular/material";
import {MaterialModule} from "./material/material.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

import {DialogDeleteMenu, MenuTableComponent} from './menu/menu/menu-table/menu-table.component';
import {DialogDeleteRecipe, RecipeTableComponent} from "./menu/recipe/recipe-table/recipe-table.component";
import {RecipeOverviewComponent} from './menu/recipe/recipe-overview/recipe-overview.component';
import {MenuOverviewComponent} from './menu/menu/menu-overview/menu-overview.component';
import {MenuMainComponent} from './menu/menu-main.component';
import {IngredientTableComponent} from './menu/recipe/recipe-overview/ingredient-table/ingredient-table.component';
import {MenuIngredientTableComponent} from './menu/menu/menu-ingredient-table/menu-ingredient-table.component';
import {CdkColumnDef} from "@angular/cdk/table";
import {ChartsModule} from "angular-bootstrap-md";

@NgModule({
  declarations: [
    AppComponent,
    RecipeTableComponent,
    MenuTableComponent,
    DialogDeleteMenu,
    DialogDeleteRecipe,
    RecipeOverviewComponent,
    MenuOverviewComponent,
    MenuMainComponent,
    IngredientTableComponent,
    MenuIngredientTableComponent,
  ],
  entryComponents: [DialogDeleteMenu, DialogDeleteRecipe],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    MaterialModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    CdkColumnDef,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
