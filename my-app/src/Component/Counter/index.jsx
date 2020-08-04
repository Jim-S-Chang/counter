import React from 'react'
import store from '../../store'

class counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }

    onDecrease = () => {
        // this.setState((prevState) => {
        //     return {
        //         counterValue: prevState.counterValue - 1
        //     }
        // })
        // this.props.func.onDecrease()
        console.log('onDecrease in counter')
        
        store.dispatch({
            type: 'DECREMENT',
            indexOfCounter: this.props.key
        })
    }

    onIncrease = () => {
        // this.setState((prevState) => ({
        //     counterValue: prevState.counterValue + 1
        // }))
        // this.props.func.onIncrease()
        console.log('onIncrease in counter')
        store.dispatch({
            type: 'INCREMENT',
            indexOfCounter: this.props.key
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onDecrease}>-</button>
                <span>0</span>
                <button onClick={this.onIncrease}>+</button>
            </div>
        )
    }

    componentWillUnmount() {
        // this.props.func.clear(this.state.counterValue)
    }
}

export default counter