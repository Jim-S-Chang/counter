export default (state = {sum : 0, counters: []}, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            console.log('INCREMENT')
            state.counters[action.indexOfCounter] += 1
            state.sum += 1
            return {
                sum: state.sum,
                counters: state.counters
            }
        }
        case 'DECREMENT':
                console.log('DECREMENT')
            state.counters[action.indexOfCounter] -= 1
            state.sum -= 1
            return {
                sum: state.sum,
                counters: state.counters
            }
        case 'REMOVE_COUNTER': {
            console.log('REMOVE_COUNTER', action.numberOfRemoveCounters)
            console.log('state.counters.length', state.counters.length)
            for (let i = state.counters.length - action.numberOfRemoveCounters; i < state.counters.length; i++) {
                state.sum -= state.counters[i]
                state.counters.splice(i, 1)
            }
            console.log('state.counters.length', state.counters.length)
            return {
                sum: state.sum,
                counters: state.counters
            }
        }
        case 'ADD_COUNTER': {
            console.log('ADD_COUNTER', action.numberOfAddCounters)
            console.log('state.counters.length', state.counters.length)
            for (let i = 0; i < action.numberOfAddCounters; i++) {
                state.counters[state.counters.length] = 0
            }
            console.log('state.counters.length', state.counters.length)
            return {
                sum: state.sum,
                counters: state.counters
            }
        }
        default:
            return state
    }
}