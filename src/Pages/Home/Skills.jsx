/*
File Name: Skills.jsx
Student Name: Thyra Barnes
Student ID: 301068290
Date: September 26, 2024
*/



import data from "../../data/index.json"

export default function MySkills(){
    return(
        <section className="skills--section" id="Skills">
        <div className="portfolio--container">
            <p className="section--title">My Skills</p> 
            <h2 className="skills--section--heading">My Expertise</h2>
        </div>
        <div className="skills--section--container">
            {data?.skills?.map((item, index) => (
                <div key={index} className="skills--section--card"> 
                 <div className="skills--section--img">
                    <img src={item.src} alt="Product Chain"/>
                 </div>
                  <div className="skills--section--card--content">
                    <h3 className="skills--section--title">{item.title}</h3>
                    <p className="Skills--section--description">{item.description}</p>                    
                  </div>
                </div>
            ))}

        </div> 
        </section>
    );
}