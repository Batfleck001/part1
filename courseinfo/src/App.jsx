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

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a  component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course = {course} />
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
      <Footer count={exercises1+exercises2+exercises3} />
      </div>
  )
}

export default App