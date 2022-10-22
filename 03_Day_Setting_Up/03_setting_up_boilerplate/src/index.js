import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import jsLogo from './images/js.svg'
import reactLogo from './images/react_logo.png'
// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
  <div>
    <img src={asabenehImage} alt='asabeneh image' />
  </div>
)

const techImagesURLs = [htmlLogo, cssLogo, jsLogo, reactLogo]
const techImages = (
  techImagesURLs.map(url => <img src={url} height="200"/>)
)
const techSection = (
  <div className='tech-section'>
    <h4>Front End Technologies</h4>
    <div>{techImages}</div>
  </div>
)

const subscribeSection = (
  <div className='sub-container'>
    <h1 className='sub-header'>SUBSCRIBE</h1>
    <p className='sub-p'>Sign up with your email address to receive news and updates.</p>
    <div>
      <input type='fname' placeholder='First Name' className='field'></input>
      <input type='lname' placeholder='Last Name' className='field'></input>
      <input type='email' placeholder='Email' className='field'></input>
    </div>
    <button className='sub-button'>Subscribe</button>
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
      {techSection}
      {subscribeSection}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

const icons = (
  <div></div>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
console.log('hi')
ReactDOM.render(app, rootElement)
