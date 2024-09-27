/*
File Name: ContactMe.jsx
Student Name: Thyra Barnes
Student ID: 301068290
Date: September 26, 2024
*/

export default function ContactMe() {
    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">I provide a few services listed in the services tab on this page. If you'd like to book with me select and a service and I will be sure to reach out.</p>



            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name"
                    className="contact--label">
                        <span className="text--md">First Name</span>
                        <input type="text" className="contact--imput text-md" name="first-name" id="first-name" required/>
                    </label>
                    <label htmlFor="last-name"
                    className="contact--label">
                        <span className="text--md">Last Name</span>
                        <input type="text" className="contact--imput text-md" name="last-name" id="last-name" required/>
                    </label>
                    <label htmlFor="email"
                    className="contact--label">
                        <span className="text--md">Email</span>
                        <input type="email" className="contact--imput text-md" name="email" id="email" required/>
                    </label>
                    <label htmlFor="phone-number"
                    className="contact--label">
                        <span className="text--md">Phone Number</span>
                        <input type="email" className="contact--imput text-md" name="phone-number" id="phone-number" required/>
                    </label>


                </div>
                <label htmlFor="choose-service"
                    className="contact--label">
                        <span className="text--md">Choose Service</span>
                        <select id="choose-service" 
                        className="contact--input text-md">
                            <option value="">Front-End Development</option>
                            <option value="">Back-End Development</option>
                            <option value="">IT support</option>
                            <option value="">Website Maintenance</option>
                        </select>
                </label>
                <label htmlFor="message"
                    className="contact--label">
                        <span className="text--md">Message</span>
                        <textarea className="contact--imput text-md" id="message" rows="8"  placeholder="Type your message..."/>
                    </label>
                <label htmlFor="checkbox"
                className="checkbox-label"
                input type="checkbox" required name="checkbox" id="checkbox">
                    <span className="text-sm">I accept the terms</span>

                </label>
                <div><button className="btn btn-primary contact--form--btn">Submit</button></div>
            </form>
        </section>
    )
}