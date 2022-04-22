import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className='navlinks'>
          <Link className='link' to={'/'}>
            Home
          </Link>
          <Link className='link' to={'/about'}>
            About
          </Link>
          <Link className='link' to={'/products'}>
            Products
          </Link>
          <Link className='link' to={'/login'}>
            Login
          </Link>
        </div>
      </nav>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .navlinks {
    display: flex;
    justify-content: center;
  }
  .link {
    margin-left: 1rem;
    background-color: var(--primary-5);
    padding: 0.3rem;
    color: var(--white);
    border-radius: var(--borderRadius);
    :hover {
      background-color: var(--primary-7);
    }
  }
`

export default Navbar
