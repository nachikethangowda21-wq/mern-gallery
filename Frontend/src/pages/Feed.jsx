import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios'


const Feed = () => {

    const [posts, setPosts]= useState([
        {
            _id:"1",
            image:"https://images.unsplash.com/photo-1772437883387-8076cf660c65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
            caption:"Dog"
        }
    ])

    useEffect(()=>{

        axios.get(`${import.meta.env.VITE_API_URL}/posts`)
        .then((res)=>{
            setPosts(res.data.posts)
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
