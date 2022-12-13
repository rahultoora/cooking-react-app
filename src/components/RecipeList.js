import React, {useContext} from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App';

const RecipeList = (props) => {
  const {
    recipes, 
    searchedRecipes, 
    searchedRecipeInput} = props

  const {handleRecipeAdd, handleRecipeSearch} = useContext(RecipeContext)

  return (
    <div className='recipe-list'>
    <div className="title">Rahul's Cookbook</div>
    <div className='recipe-list__search-input-container'>
    <input 
        type='text' 
        name='search' 
        id='search' 
        value={searchedRecipeInput}
        onChange={e => handleRecipeSearch(e.target.value)}
        className='recipe-list__search-input' />
    </div>
    <div>
      {(searchedRecipes.length >= 0) ? 
      searchedRecipes.map(recipe => {
        return (
          <Recipe key={recipe.id} {...recipe} /> 
        )
      }) : recipes.map(recipe => {
        return (
          <Recipe key={recipe.id} {...recipe} /> 
        )
      })}
    </div>
    <div className='recipe-list__add-recipe-btn-container'>
      <button 
      className='btn btn--primary'
      onClick={handleRecipeAdd}
      >
        Add Recipe</button>
    </div>
    </div>

  )
};


export default RecipeList;

