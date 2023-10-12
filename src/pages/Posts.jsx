import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(()=>{
    fetchPosts()
    console.log(posts)
  },[])

  async function fetchPosts(){
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>response.json())
    .then(json=>setPosts(json))
    .then(setLoad(false))

  }
  return (
    <main className='posts'>
      
      <div className='pg-header'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7'>
              <h1>Posts</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container content'>
        {
          load 
          ? <div className='text-center'>Loading...</div>
          :(
            <div className='row'>
                {posts.map(post =>{
                  return(
                    <div className='col-sm-6' key={post.id}>
                      <div className='card'>
                        <div className='card-body'></div>
                        <h5 className='card--title'>{post.title}</h5>
                        <p className='card-text'>{post.body}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
          )
        }
      </div>
    </main>
    
  )
}

export default Posts
