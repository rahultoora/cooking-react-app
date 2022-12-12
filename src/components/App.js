import React, {useState, useEffect} from "react";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import sampleRecipes from "./SampleRecipes"
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

const App = () => {
  const [selectedRecipeId, setSelectedrecipeId] = useState()

  const [recipes, setRecipes] = useState(() => { 
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON == null) {
      return sampleRecipes
    } else {
      return JSON.parse(recipeJSON)
    }
  })

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])


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

  const handleRecipeSelect = (id) => {
    setSelectedrecipeId(id)
  }

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>

  )

};



export default App;
