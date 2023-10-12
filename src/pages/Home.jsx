import React from 'react'

const Home = () => {
  return (
    <main>
      <div className='pg-header'>
        <div className='container'>
          <h1>Welcome to learn react routing </h1>
        </div>
      </div>
      <div className='container content'>
        <p>In React, routers help create and navigate between the different URLs that make up your web application. They allow your user to move between the components of your app while preserving user state, and can provide unique URLs for these components to make them more shareable. With routers, you can improve your app’s user experience by simplifying site navigation.</p>
        <p>React Router is one of the most popular routing frameworks for React. The library is designed with intuitive components to let you build a declarative routing system for your application. This means that you can declare exactly which of your components has a certain route. With declarative routing, you can create intuitive routes that are human-readable, making it easier to manage your application architecture.</p>    
      </div>
      
    </main>
  )
}

export default Home
