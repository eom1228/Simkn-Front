import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #000;
display:flex;
justify-content:space-between;
padding:0.5rem calc((100vw - 1000px)/2);
z-index:10;
position:relative;

`

export const NavLink = styled(Link)`

padding:25px 12px;
text-align:center;
text-decoration:none;
color:white;
display:block;
font-size:20px
font-weight:600;
`


export const Bars = styled.div`


`

export const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:-24px;


@media screen and (max-width:768px){
    display:none;
    flex-flow:column;
     justify-content:center;
     width:100%;
}
`

export const NavSmallMenu = styled.div`
display:none;
padding: 25% 0;
width:100vw;
height:100vh;
position:absolute;
top:0;
left:0;
z-index:1;
background:#000;


@media screen and (max-width:768px){
    display:block;
}

`

export const DropdownLink = styled(Link)`
background:#414757; 


`