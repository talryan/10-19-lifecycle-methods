import React from 'react'
import Item from './Item'
import FilterBar from './FilterBar'

class ItemsContainer extends React.Component {

    componentDidMount(){
        console.log("Items Container mounted")
      }

    render(){
        return(
            <div id="ItemsContainer">
              <FilterBar />
              {this.props.items.map(item => <Item  key={item.id} cart={this.props.cart}  addToCart={this.props.addToCart} name={item.name} price={item.price} id={item.id} image1={item.image1} image2={item.image2} />) }
            </div>
        )
    }
}

export default ItemsContainer