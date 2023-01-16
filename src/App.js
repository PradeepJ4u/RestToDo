import './App.css'
import TodoApp from './components/Todo/TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp />
     </div>
  );
}

// function PlayingWithProps(properties){
//   console.log(properties)
//   console.log(properties.value1)
//   console.log(properties.value2)
//   return (
//     <div>Props</div>
//   );
// }

// function PlayingWithProps({value1, value2}){
//   console.log(value1)
//   console.log(value2)
//   return (
//     <div>Props</div>
//   );
// }

export default App;
