import React from 'react'
import NavBar from './NavBar'
import Menu from './Menu'
import styled from 'styled-components';

const MainDIv = styled.div`

`
const Dashboard = () => {
  return (
    <>
    <MainDIv>
      <NavBar/>
      {/* <Menu></Menu> */}
    </MainDIv>
    </>
    )
}

export default Dashboard