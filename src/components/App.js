import React from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'

function App() {
  return (
    <RecipeList recipes={sampleRecipes}/>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Pasta',
    servings: 3,
    cookTime: '0:20',
    instructions: "1. Boil Water \n2. Place Pasta in Water\n3. Cook on high heat for 12-15 mins",
    ingredients: [
      {
        id: 1,
        name: 'Pasta',
        amount: '200g'
      },
      {
        id: 2,
        name: 'Water',
        amount: '600g'
      }
    ]
  },
  {
    id: 2,
    name: 'Rice',
    servings: 2,
    cookTime: '0:25',
    instructions: "1. Boil Water \n2. Place 200g Rice in Water\n3. Cook on low heat for 15-20 mins",
    ingredients: [
      {
        id: 1,
        name: 'Rice',
        amount: '200g'
      },
      {
        id: 2,
        name: 'Water',
        amount: '600g'
      }
    ]
  }
]
export default App;
