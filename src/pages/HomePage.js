import React from 'react'
import HomeSection from '../components/HomeSection'
import PortfolioSection from '../components/PortfolioSection'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import ScrollTop from '../components/ScrollTop'


const HomePage = () => {
    return (
        
        <motion.div 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show" 
        exit="exit"
        >
            <HomeSection />
            <PortfolioSection />
            <ScrollTop /> 
        </motion.div>
    )
}

export default HomePage