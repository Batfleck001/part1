import React from 'react'

const Header = (props) =>{
  return(
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}
const Part = (props) =>{
  return(
  <div>
    <p>{props.part} {props.exercise}</p>
  </div>)
}

const Content = (props) =>{
  return(
    <div>
      <Part part={props.parts[0].name} exercise = {props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercise = {props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercise = {props.parts[2].exercises}/>
    </div>
  )
}

const Footer = (props) =>{
  return(
  <div>
    <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
  </div>)
}



const App = () => {

  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a  component'
  // const exercises3 = 14

  const course = 'Half Stack application development'
  const parts = [
  {
    name : "Fundamentals of React",
    exercises:10
  },
  {
    name : "Using props to pass data",
    exercises:7
  },
  {
    name : "State of a  component",
    exercises:14
  }
]
  
  return (
    <div>
      <Header course = {course} />
      <Content parts={parts}/>
      <Footer parts={parts} />
      </div>
  )
}

export default App