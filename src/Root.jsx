import React from 'react'
import styled from 'styled-components'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

const ContentContainer = styled.div`
  padding: 65px 15px 15px 15px;
`

const Root = () => {
  return (
    <div>
      <Navbar/>
      <ContentContainer>
        <Outlet/>
      </ContentContainer>
    </div>
  )
}

export default Root