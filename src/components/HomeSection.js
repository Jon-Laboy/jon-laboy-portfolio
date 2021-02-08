import React from 'react'
import home1 from '../img/home1.jpg'
import {About, Description, Image, Hide} from '../styles'
import {motion} from 'framer-motion'
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from './Wave'
import { HashLink as Link } from 'react-router-hash-link';


const HomeSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                              I'm
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Jon <span>Laboy.</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Front End <span>Dev.</span></motion.h2>
                    </Hide>
                </motion.div>
                <Link to="/#portfolio">  <motion.button variants={fade}>My Work</motion.button></Link>
            </Description>
            <Image>
                <motion.img variants={photoAnim} initial="hidden" animate="show" src={home1} alt="home image" />
            </Image>
            <Wave /> 
        </About>
    )
}

export default HomeSection