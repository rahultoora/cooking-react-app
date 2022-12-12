import React from 'react'

const RecipeIngredientEdit = (props) => {

  const {
    ingredient,
    handleIngredientChange
  } = props

  const handleChange = (changes) => {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
  }

  return (
    <>
        <input 
          className='recipe-edit__input' 
          type='text'
          onInput={(e) => handleChange({ name: e.target.value })}
          value={ingredient.name}
        />
        <input 
          className='recipe-edit__input' 
          type='text'
          onInput={(e) => handleChange({ amount: e.target.value })}
          value={ingredient.amount}
        />
        <button className='btn btn--danger'>&times;</button>
    </>
  )
}

export default RecipeIngredientEdit;