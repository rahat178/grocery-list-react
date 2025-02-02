import { Component } from 'react';
import check from './check-4.png';


export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: [],

    }

    onChangeEvent(event) {
        this.setState({userInput: event});    }

    addItem(input) {
        if (input === '') {
            alert("Please enter an item")
        } else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''})
        
        }

    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray});

    }

    crossedWord = (event) => {
        const itemLi = event.target;
        itemLi.classList.toggle('crossed');

    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                <input 
                type="text" 
                placeholder="What do you want to buy today?"
                onChange={(e) => {this.onChangeEvent (e.target.value)}}
                value={this.state.userInput}/>
            </div>

            <div className="container">
                <button onClick={(e) => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>

            <div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                <li onClick={this.crossedWord} key={index} >
                    <img src={check} width="20px" alt='check-box'/>
                    {item}</li>
                ))}
                
            </ul>
            </div>

           

            <div className="container" >
            <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>

            

            </div>
            
        )
    }
}