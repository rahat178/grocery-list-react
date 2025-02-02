import './App.css';
import image from './woman-grocery-list.jpeg';
import imageTwo from './man.avif';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="app">
      <div className="container">
      <img src={ image } width="250px" alt="grocery list"/>
      </div>
      
      <div className="container">
      <h1>Grocery List</h1>
      </div>
      
      <GroceryList/>
      <div className="container">
      <img src={ imageTwo } width="250px" alt="shopping man"/>
      </div>
      
    </div>
  );
}

export default App;
