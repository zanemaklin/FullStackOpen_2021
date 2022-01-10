import React from 'react'


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Part = (props) => {
  return (
    <div>
      <p>{props.part} has {props.exercise} exercises.</p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]} exercise={props.exercise[0]}/>
      <Part part={props.part[1]} exercise={props.exercise[1]}/>    
      <Part part={props.part[2]} exercise={props.exercise[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>The Total number of exercises is {props.total_exercises}.</p> 
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course}/>
      <Content part={[part1,part2,part3]} exercise={[exercises1,exercises2,exercises3]}/>
      <Total total_exercises={exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App