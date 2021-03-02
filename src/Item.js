import React from 'react'

class Item extends React.Component {

    isInCart(){
       return !!this.props.cart.find(item => item.id === this.props.id)
    } // this coud be moved to the ItemsContainer and passed as a prop 

    shouldComponentUpdate(nextProps, nextState){
        //expecting to receive a TRUE or FALSE to tell it if it should render
        // TRUE => re-render 
        // FALSE => skipds the re-render

        // the item was not in the props.cart but IS in the nextProps.cart
        return !this.isInCart() && !!nextProps.cart.find(item => item.id === this.props.id)
    }

    componentDidUpdate(){
        console.log("UPDATED", this.props.id)
    } // NEVER want to call setState UNLESS you have it inside of a condition

    render(){
        return (
            <div className="item" id={this.props.id + "-item"}>
                <h3>{this.props.name}</h3>
                <img alt={this.props.name + " image"} src={this.props.image1}/>
                <br/>
                Price: {this.props.price}
                <br/>
                {!this.isInCart() && <button onClick={(e) => this.props.addToCart(this.props.id)}>Add To Cart</button>}
            </div>
        )
    }
}

export default Item