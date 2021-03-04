import React from 'react';
import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

class App extends React.Component{

  state = {
    page: "items",
    items: [],
    cart: [],
    term: ""
  }

  changePage = (e) => {

    const page = e.target.id.split("-")[0]
    this.setState({
      page: page
    })
  }

  addToCart = (id) => {
    // find the Item with that id 
    const foundItem = this.state.items.find(item => item.id === id)
    // update state to show that the item is in the cart
    this.setState((prevState) => ({
      cart: [...prevState.cart, foundItem]
    }), () => console.log(this.state) )
  }

  // LCM can ONLY be used in a class component 
  componentDidMount(){
    // typcially fetch requests happen in a componentDidMount

    fetch("http://localhost:3000/items")
    .then(res => res.json())
    .then(json => {
      this.setState({items: json})
    })
  }

  addToItems = (item) => {
    this.setState((prevState) => {
        return { items: [...prevState.items, item] };
    });
  };




  render(){
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/items" component={(stuff) =>  this.state.items.length !== 0 ? 
              <ItemsContainer stuff={stuff} addToItems={this.addToItems}  addToCart={this.addToCart} items={this.state.items} cart={this.state.cart}/>  
              : <h1>...Loading</h1> 
            }  />
             
            <Route path="/cart">
              <CartContainer cart={this.state.cart}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;