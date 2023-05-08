import styled from "styled-components";
import { useAuth } from '../Context/AuthProvider';
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useState } from "react";

export default function MainNavContainer({openNav, measure}) {
 
  // const [sideBarDisplay, setSideBarDisplay] = useState(false)

  // const openNav = (e)=> {
  //   e.stopPropagation()
  //   setSideBarDisplay(prevState => !prevState)
  // }
    const auth = useAuth()
    if (!auth.auth.isLogged) {
        return null;
    }
    return (
        <>
          <MainContainer>
              <NavBar openNav={openNav} measure={measure}/>
              <SideBar measure={measure}></SideBar>
          </MainContainer>
        </>
    )
  }
  
  const MainContainer = styled.div`
    display:flex
  `;