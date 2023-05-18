import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex: 1;
  justify-content: center;
`

const ListItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  padding: 5px 10px;
`

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 0px 15px;
  position: fixed;
  background-color: white;
  max-height: 65px;
`
const Navbar = () => {
  return (
    <NavbarContainer>
      <img src="/logo.png" alt="Site Logo" style={{ flex: 0, width: '45px', height: '45px' }} />
      <Nav>
        <ListItem>
          <Link to="/" reloadDocument="true">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/futbol" reloadDocument="true">Fútbol</Link>
        </ListItem>
        <ListItem>
          <Link to="/golf" reloadDocument="true">Golf</Link>
        </ListItem>
        <ListItem>
          <Link to="/basketball" reloadDocument="true">Básquet</Link>
        </ListItem>
        <ListItem>
          <Link to="autoracing" reloadDocument="true">Automovilismo</Link>
        </ListItem>
      </Nav>
    </NavbarContainer>
  )
}

export default Navbar