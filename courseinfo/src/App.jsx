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

const Footer = (props) =>{
  return(
  <div>
    <p>Number of exercises {props.count}</p>
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
  const part1 = {
    name : "Fundamentals of React",
    exercises:10
  }
  const part2 = {
    name : "Using props to pass data",
    exercises:7
  }
  const part3 = {
    name : "State of a  component",
    exercises:14
  }
  
  return (
    <div>
      <Header course = {course} />
      <Part part={part1.name} exercise={part1.exercises}/>
      <Part part={part2.name} exercise={part2.exercises}/>
      <Part part={part3.name} exercise={part3.exercises}/>
      <Footer count={part1.exercises+part2.exercises+part3.exercises} />
      </div>
  )
}

export default App