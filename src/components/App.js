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

  const [searchedRecipeInput, setSearchedRecipeInput] = useState('Search Cook Book')
  const [searchedRecipes, setSearchedRecipes] = useState([])

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const handleRecipeSearch = (name) => {
    setSearchedRecipeInput(name)
    setSearchedRecipes(recipes.filter(r => r.name.includes(name)))
  }

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        { id: uuidv4(), name: '', amount: ''}
      ]
    }
  setSelectedrecipeId(newRecipe.id)
  setRecipes([...recipes, newRecipe])
  setSearchedRecipes([...recipes, newRecipe].filter(recipe => recipe.name.includes(searchedRecipeInput)))
  }


  const handleRecipeDelete = (id) => {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedrecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
    setSearchedRecipes(recipes.filter(recipe => recipe.id !== id && recipe.name.includes(searchedRecipeInput)))
  }

  const handleRecipeSelect = (id) => {
    setSelectedrecipeId(id)
  }

  const handleRecipeChange = (id, recipe) => {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
    setSearchedRecipes(newRecipes.filter(recipe => recipe.name.includes(searchedRecipeInput)))

  }


  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
    handleRecipeSearch
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList 
        recipes={recipes} 
        searchedRecipes={searchedRecipes} 
        searchedRecipeInput={searchedRecipeInput}
      />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>

  )

};

export default App;
