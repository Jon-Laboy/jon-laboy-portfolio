import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const { pathname } = useLocation();

    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Laboy</Link></h1>
                <ul>
                    <li>
                        <Link to="/"> Home</Link>
                        <Line
                            transition={{ duration: 0.75 }}
                            initial={{ width: "0%" }}
                            animate={{ width: pathname === "/" ? "50%" : "0%" }}
                        />
                    </li>
                    <li> 
                        <Link to="/work"> About Me</Link>
                        <Line
                            transition={{ duration: 0.75 }}
                            initial={{ width: "0%" }}
                            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
                         />
                    </li>
                    <li>
                        <Link to="/contact"> Contact Me</Link>
                        <Line
                            transition={{ duration: 0.75 }}
                            initial={{ width: "0%" }}
                            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
                        />
                    </li>
                </ul>
        </StyledNav>
    )
}

const StyledNav= styled.nav`
    min-height: 10vh;
    display: flex;
     margin: auto;
    justify-content: space-between;
    align-items:center; 
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top:0;
    z-index: 10; 
    a {
        color: white;
        text-decoration: none;
        transition: all 0.5s ease;
        &:hover {
            color: #23d997;
        }
    }
    ul {
        display: flex;
        list-style: none; 
    }  
    #logo {   
        font-size: 1.8rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
        padding-left:0rem;
        transition: all 0.5s ease;
        letter-spacing:0.25rem;
        &:hover {
            color: white;
        } 
    }
    li { 
        padding-left: 10rem;
        position: relative;
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        #logo {
            display: inline-block;
            margin: 1rem;
        }
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
        li {
            padding: 0;
        }
        }
  } 
    
`
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;
export default Nav 