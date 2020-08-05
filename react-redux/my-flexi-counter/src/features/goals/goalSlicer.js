const { createSlice } = require("@reduxjs/toolkit")
/*
a) createSlice

1) Reducers
2) Actions
3) Selectors
*/

export const goalsReducer = createSlice({
    name: 'goals',
    initialState: {
        list: ['TCO 2020 Dev Champ']
    },
    reducers: {
        addGoal: (state, action) => {
            state.list = state.list.concat(action.payload)
        }
    }
})

export const { addGoal } = goalsReducer.actions

export default goalsReducer.reducer