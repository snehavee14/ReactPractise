import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const[idFromButtonClick,setidFromButtonClick]=useState(1)

    const handleClick=()=>{
        setidFromButtonClick(id)
    }

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => { setPost(res.data) })
            .catch(err => console.log(err))

    }, [idFromButtonClick])

    return (
        <div>
            {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
            </ul> */}
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={handleClick}>Fetch Posts</button>
            <ul>{post.title}</ul>
        </div>
    )
}

export default DataFetching
