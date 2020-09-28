import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    post: {},
    error: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCHING_SUCCESS':
            return {
                loading: false,
                post: state.payload,
                error: ''
            }
        case 'FETCHING_ERROR':
            return {
                loading: true,
                post: {},
                error: 'Something went wrong'
            }
    }
}

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            dispatch({ type: 'FETCHING_SUCCESS', payload: response.data })
        })
        .catch(error => {
            dispatch({ type: 'FETCHING_ERROR', })
        })
    }, [])

    return (
        <div>
            {state.loading ? state.loading : state.post}
            {state.error ? state.error : null}

        </div>
    )
}

export default DataFetchingTwo
