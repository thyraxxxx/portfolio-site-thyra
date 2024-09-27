/*
File Name: index.jsx
Student Name: Thyra Barnes
Student ID: 301068290
Date: September 26, 2024
*/


import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../Skills";
import Services from "../Services";
import ContactMe from "../ContactMe";

export default function Home () {
    return(
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <Services />
            <ContactMe />
           
        </>

    );
}