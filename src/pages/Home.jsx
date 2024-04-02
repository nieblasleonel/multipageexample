import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


export const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () =>{
    navigate('products');
  }

  return (
    <>
      <h1>Home page</h1>
     <p>go to <Link to="products">list of products</Link></p>
     <p>
      <button onClick={navigateHandler}>navigate</button>
     </p>
    </>
  )
}
