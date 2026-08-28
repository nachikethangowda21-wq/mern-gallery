import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios'


const Feed = () => {

    const [posts, setPosts]= useState([])

    useEffect(()=>{

        axios.get(`${import.meta.env.VITE_API_URL}/posts`)
        .then((res)=>{
            setPosts(res.data.posts)
        })
        .catch((err) => {
                console.error("Error fetching posts:", err)
            })

    },[])

  return (
    <div className='feed-section'>
       {
        posts.length > 0 ? (
            posts.map((post)=>(
                <div key={post._id} className='post-card'>
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))
        ) : (
            <h1>No posts available</h1>
        )
        
       }
    </div>
  ) 
}

export default Feed
