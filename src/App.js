import logo from './logo.svg';
import './App.css';
import Person from './Person';

function App() {
  const obj = { name: 'Jimmy'};
  return (
   <div>
      <Person info={obj} />
   </div>
  );
}

export default App;
