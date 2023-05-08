import React from "react";
import styled from "styled-components";
import { RiDashboardLine } from "react-icons/ri";
import { BiKey } from "react-icons/bi";
import { TbCalendarMinus } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import avatar from "../Assets/perfil.png";
import {
  LateralMenu,
  ListItems,
  ElementsDiv,
  DragDiv,
  MainTitle,
  TitleContainer,
  MainTitleContainer,
  DivAvatar,
  UserName,
  UserEmail,
  LastTitle,
  AllRigths,
  LinkContainer,
} from "./SideBarStyled.jsx";

const SideBar = ({ measure }) => {
  return (
    <LateralMenu
      display={measure ? "300px" : "0px"}
      right={measure ? "0px" : "500px"}
      Height={measure ? "100%" : 0}
    >
      <ul>
        <MainTitleContainer>
          <TitleContainer>H</TitleContainer>
          <MainTitle>Hotel Miranda</MainTitle>
        </MainTitleContainer>
        <LinkContainer>
          <NavLink
            to="/"
            className={({ isActive }) => isActive && "active"}
            style={{ textDecoration: "none" }}
          >
            <ElementsDiv>
              <RiDashboardLine size={25} />
              <ListItems>Dashboard</ListItems>
            </ElementsDiv>
          </NavLink>
          <NavLink
            to="/bookings"
            className={({ isActive }) => isActive && "active"}
            style={{ textDecoration: "none" }}
          >
            <ElementsDiv>
              <TbCalendarMinus size={25} />
              <ListItems>Bookings</ListItems>
            </ElementsDiv>
          </NavLink>
          <NavLink
            to="/rooms"
            className={({ isActive }) => isActive && "active"}
            style={{ textDecoration: "none" }}
          >
            <ElementsDiv>
              <BiKey size={25} />
              <ListItems>Rooms</ListItems>
            </ElementsDiv>
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) => isActive && "active"}
            style={{ textDecoration: "none" }}
          >
            <ElementsDiv>
              <FaUserAlt size={25} />
              <ListItems>Users</ListItems>
            </ElementsDiv>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive && "active"}
            style={{ textDecoration: "none" }}
          >
            <ElementsDiv>
              <AiFillContacts size={25} />
              <ListItems>Contact</ListItems>
            </ElementsDiv>
          </NavLink>
        </LinkContainer>
      </ul>
      <DivAvatar>
        <DragDiv>
          <img
            src={avatar}
            style={{ width: "60px", height: "60px", borderRadius: "16px" }}
            alt="avatar"
          />
        </DragDiv>
        <UserName>Diego Dominguez</UserName>
        <UserEmail>usuario1@gmail.com</UserEmail>
      </DivAvatar>
      <LastTitle>Hotel Miranda Admin Dashboard</LastTitle>
      <AllRigths>©2020 All Rights Reserved</AllRigths>
      <AllRigths margin={60}>
        Made with <AiFillHeart /> by DiegoDo
      </AllRigths>
    </LateralMenu>
  );
};

export default SideBar;
