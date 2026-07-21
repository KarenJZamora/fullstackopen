// El encabezado recibe el objeto completo del curso y extrae el nombre
const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

// Cada parte recibe el objeto de la sección correspondiente
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

// El contenido recibe el array de partes y se las pasa una a una a 'Part'
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

// El total recibe el array y accede a los números para realizar la suma
const Total = (props) => {
  const sumaTotal = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <p>Number of exercises {sumaTotal}</p>
  )
}

// Componente Principal con la estructura unificada del Paso 1.5
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
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App