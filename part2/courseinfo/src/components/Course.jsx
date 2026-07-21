// Subcomponente Header
const Header = ({ name }) => <h2>{name}</h2>

// Subcomponente Part
const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

// Subcomponente Content
const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

// Subcomponente Total usando reduce (Ejercicios 2.2 y 2.3)
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <strong>total of {total} exercises</strong>
}

// Componente principal Course (Ejercicio 2.5)
const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course