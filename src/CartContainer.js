import React from 'react'
import {Link} from "react-router-dom"

class CartContainer extends React.Component{

    state = {
        timeLeft: 60
    }

    componentDidMount(){
        // start a timer 
        this.timerId = setInterval(this.updateTime, 1000)
    }

    componentWillUnmount(){
        // cleanup actions
        // stop timers 
        clearInterval(this.timerId)
    }

    updateTime = () => {
        this.setState((prevState) => ({
            timeLeft: prevState.timeLeft - 1
        }), () => console.log(this.state))
        console.log(this.timerId)
    }

    showItems(){
       return this.props.cart.map(item => {
            return (
                <div key={item.id}>
                    <h4><Link to={`/items/${item.id}`}>{item.name}</Link> - ${item.price}</h4>
                </div>
            )
        })
    }

    render(){
        return(
            <div id="CartContainer">
                <h3>You must checkout in {this.state.timeLeft} seconds</h3>
                {this.showItems()}
            </div>
        )
    }
}

export default CartContainer