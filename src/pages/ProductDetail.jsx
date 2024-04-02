import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const ProductDetail = () => {
    const params = useParams();
  return (
    <>
       <h1>product detail</h1>
       <p>{params.productId}</p>
       <p><Link to=".." relative='path'>Back</Link></p>

    </>
  )
}
