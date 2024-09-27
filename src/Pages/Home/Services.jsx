/*
File Name: Services.jsx
Student Name: Thyra Barnes
Student ID: 301068290
Date: September 26, 2024
*/



import data from "../../data/index.json";

export default function Services() {
    return (
        <section className="services--section" id="services">
            <div className="services--container-box">
                <div className="portfolio--container">
                    <p className="section--title"> My Services</p>
                    <h2 className="services--sections--heading">Services</h2>

                </div>

            </div>
            <div className="services--section--container">
                {data?.services?.map((item, index) => 
                <div key={index} className="services--section--card">
                    <p className="text-md--services--title">{item.title}</p>
                    <p className="services--section--description">{item.description}</p>
                    <div className="services--detail">
                      <img src={item.src} alt="service pic" />
                    </div>
                </div>
                )}
            </div>

        </section>
    )
}