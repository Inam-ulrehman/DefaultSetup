import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data'
import styled from 'styled-components'

const SingleProduct = () => {
  const productId = useParams()
  const newID = productId.productId

  const newItem = data.find((item) => item.id === newID)
  const { id, image, name } = newItem
  console.log(name, image)
  return (
    <>
      <Wrapper className='Single-product'>
        <div className='title'>
          <h1>Single product</h1>
        </div>
        <div className='card'>
          <div className='imgs'>
            <img src={image} alt='' />
          </div>
          <div className='footer'>
            <p>{name}</p>
            <p>{id}</p>
          </div>
        </div>
        <div className='btn-container'>
          <Link className='btn' to={'/products'}>
            Back to products
          </Link>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.article`
  .card {
    background-color: var(--white);
    box-shadow: var(--shadow-2);
    width: 400px;
    margin: 0 auto;
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    :hover {
      box-shadow: var(--shadow-4);
    }
    .imgs {
      img {
        width: 400px;
        display: block;
        object-fit: cover;
        height: 320px;
        margin: 0 auto;

        border-top-left-radius: var(--borderRadius);
        border-top-right-radius: var(--borderRadius);
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;

    p {
      padding: 1rem;
    }
  }
  .btn-container {
    margin-top: 1rem;
    text-align: center;
  }
`

export default SingleProduct
