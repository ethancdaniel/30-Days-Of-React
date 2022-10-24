import React from 'react'
import ReactDOM from 'react-dom'


// importing data

import { countriesData } from './data/countries'
import { tenMostHighestPopulations } from './data/ten_most_highest_populations'
import './main.css'

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

const genRandomColors = (numColors) => {
  const res = []
  for (let i = 0; i < numColors; i++) {
    res.push('#' + Math.floor(Math.random() * 16777215).toString(16))
  }
  return res
}

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))
  return <div>{countryList}</div>
}

const ColorContainer = ({color}) => {
  const style = {
    'background-color': color
  }
  return <div style={style} className='color-div'>
    <p>{color}</p>
  </div>
}

const HexColors = ({colors}) => {
  const colorList = colors.map(color => (
    <ColorContainer color={color} />
  ))
  return <div className='color-container'>{colorList}</div>
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <div>
        <h1>Countries List</h1>
        <Countries countries={countries} />
        <HexColors colors={genRandomColors(30)} />
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
