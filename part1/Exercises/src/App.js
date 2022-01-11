import React from 'react'


const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}


const Part = (props) => {
  return (
    <div>
      <p>{props.parts.name} has {props.parts.exercises} exercises.</p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>    
      <Part parts={props.parts[2]}/>
    </div>
  )
}


const Total = (props) => {
  
  let b = 0
  
  for (let i = 0; i < props.parts.length; i++) {
    b += props.parts[i].exercises;
  }
  
  return (
    <div>
      <p>The Total number of exercises is {b}.</p> 
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  
  const parts=[
  {
    name:'Fundamentals of React',
    exercises: 10
  },
  {
    name:'Using props to pass data',
    exercises: 7
  },
  {
    name:'State of a component',
    exercises: 14
  }
]
  
  return (
    <>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>

    </>
  )
}

export default App