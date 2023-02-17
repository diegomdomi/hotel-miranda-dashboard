import React, {useState } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import styled from 'styled-components';

const MainDIv = styled.div`
  display: flex;
  ${'' /* width: fit-content; */}

 
`
const Dashboard = () => {
  const [sideBarDisplay, setSideBarDisplay] = useState(false)

  const openNav = (e)=> {
    e.stopPropagation()
    setSideBarDisplay(!sideBarDisplay)
  }
  return (
    <>
    <MainDIv>
      <SideBar measure={sideBarDisplay}></SideBar>
      <NavBar openNav={openNav}/>
    </MainDIv>
    </>
    )
}

export default Dashboard