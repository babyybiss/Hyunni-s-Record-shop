import { configureStore, createSlice } from "@reduxjs/toolkit";

// declaring reducer
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

// declaring actions
export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

// subscribing to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}


export default store;
