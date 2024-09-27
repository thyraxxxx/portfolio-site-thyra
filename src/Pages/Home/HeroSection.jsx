/*
File Name: HeroSection.jsx
Student Name: Thyra Barnes
Student ID: 301068290
Date: September 26, 2024
*/





export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, Im Thyra</p>
                    <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Junior Full Stack</span>{" "}
                    <br />
                    Developer 
                    </h1>
                    <p className="hero--section-description">My mission is to leverage my diverse background in software engineering and finance to create innovative, efficient, and user-focused solutions. I aim to continuously grow as a developer, solving complex problems while delivering impactful results that help businesses and individuals thrive in a digital world..
                    </p>
                </div>
                <button className="btn btn-primary">About Me</button>
            </div>
            <div className="hero--section--img">
                <img src="/portfolio-image.jpg" alt="Portfolio pic" />
            </div>

        </section>
        
    )
}