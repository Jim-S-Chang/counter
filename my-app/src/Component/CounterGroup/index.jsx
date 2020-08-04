import React, { Component } from 'react'
import {connect} from 'react-redux'
import Counter from '../Counter'
import store from '../../store'


  const mapStateToProps = (state) => {
    return {
      counters: state.counters,
      sum: state.sum
    }
  }
//   const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//       increase: (...args) => dispatch(actions.increase(...args)),
//       decrease: (...args) => dispatch(actions.decrease(...args))
//     }
//   }

class CounterGroup extends Component {
    constructor(props) {
        super(props)
    }

    handleChangeSize = (event) => {
        // let size = event.target.value
        // this.setState(() => {
        //     return {
        //         size: size ? parseInt(size) : 0
        //     }
        // })
        // console.log('handleChangeSize in group counter')
        const numberofCounters = this.props.counters.length
        console.log('numberofCounters', numberofCounters)
        if (numberofCounters >= event.target.value) {
            store.dispatch({
                type: 'REMOVE_COUNTER',
                numberOfRemoveCounters: numberofCounters - event.target.value
            })
        } else {
            console.log('event.target.value - numberofCounters', event.target.value - numberofCounters);
            
            store.dispatch({
                type: 'ADD_COUNTER',
                numberOfAddCounters: event.target.value - numberofCounters
            })
        }
    }

    // handleIncrease = () => {
    //     this.setState((prevState) => {
    //         return ({
    //             sum: prevState.sum + 1
    //         })
    //     })
    // }

    // handleDecrease = () => {
    //     this.setState((prevState) => {
    //         return ({
    //             sum: prevState.sum - 1
    //         })
    //     })
    // }
    // clear = (value) => {
    //     this.setState((prevState) => {
    //         return ({
    //             sum: prevState.sum - value
    //         })
    //     })
    // }

    render() {
        const initArray = [...Array(this.props.counters.length).keys()]
        // let functions = {
        //     onIncrease: this.handleIncrease,
        //     onDecrease: this.handleDecrease,
        //     clear: this.clear
        // }

        // const sum = this.props.store.dispatch({type: 'SUM'})
        return (
            <div>
                <label>
                    <span>
                        Group Size:
                    </span>
                    <input type="text" onBlur={this.handleChangeSize} />
                </label>
                <br />
                <label>
                    <span>
                        Total Value:
                    </span>
                    <span>{this.props.sum}</span>
                </label>
                {
                    initArray.map(key => <Counter key={key} />)
                }
            </div>
        )
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    // mapDispatchToProps
  )(CounterGroup)

export default VisibleTodoList