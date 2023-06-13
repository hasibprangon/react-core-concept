import logo from './logo.svg';
import './App.css';

const number = 5555;
const person = { name: 'Hasib', job: 'Student', adress: 'khoksa', phone: 12344 }

const personStyle = {
  color: 'green',
  backgroundColor: 'white'
}

function App() {
  const persons=['Hasib', 'Prangon', 'Neasher', 'Maruf', 'Anik', 'Jim', 'Kabir', 'Sobir']
  const professions = ['Student', 'Web developer', 'Students & Digital Marketer']
  return (
    <div className="App">
      {
        persons.map(person => <li>{person}</li>)
      }

      {
        persons.map(person => <Person name={person}></Person>)
      }
      {
      professions.map(pro => <Person profession={pro}></Person>)
      }
      {/* <Person name={persons[0]} Profession="Student" phone="01710792327"></Person>
      <Person name={persons[1]} Profession="Learner" phone="01566087557"></Person> */}

      <h5>Adding new component</h5>

      <Friend name="Neasher & Maruf" Profession="Web developer"></Friend>
      <Friend name="Anik & Jim" Profession="Student & Digital Marketer"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (<div className='person'>
    <h1>{props.name}</h1>
    <p>{props.Profession}</p>
    <p>{props.phone}</p>
  </div>)
}

function Friend(props) {
  console.log(props);
  return (
    <div className='friend'>
      <h1>{props.name}</h1>
      <p>{props.Profession}</p>
    </div>
  )
}

export default App;
