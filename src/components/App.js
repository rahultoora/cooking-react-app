import React, {useState} from "react";
import RecipeList from "./RecipeList";
import sampleRecipes from "./sampleRecipes"
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [recipes, setRecipes] = useState(sampleRecipes)

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs'}
      ]
    }
  
  setRecipes([...recipes, newRecipe])
  
  }

  const handleRecipeDelete = (id) => {
  setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <>
    <div className="title">Rahul's Cookbook</div>
    <RecipeList 
    recipes={recipes}
    handleRecipeAdd={handleRecipeAdd}
    handleRecipeDelete={handleRecipeDelete}/>
    </>

  )

};



export default App;
