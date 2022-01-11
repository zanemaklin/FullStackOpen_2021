import React from 'react'


const Header = (props) => {
  return <h1>{props.course.name}</h1>
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
      <Part parts={props.course.parts[0]}/>
      <Part parts={props.course.parts[1]}/>    
      <Part parts={props.course.parts[2]}/>
    </div>
  )
}


const Total = (props) => {
    
  let b = 0
  
  for (let i = 0; i < props.course.parts.length; i++) {
    b += props.course.parts[i].exercises;
  }
  
  return (
    <div>
      <p>The Total number of exercises is {b}.</p> 
    </div>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}

export default App