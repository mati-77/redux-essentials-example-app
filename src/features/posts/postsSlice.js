import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post!', content: 'More text' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
        //state es el array de posts, no el objeto
        //estado de Redux entero
    }
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
