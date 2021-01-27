import React from 'react';



const ContactComp = () => 
{
  return (
            <>                
                    <section id="contact" className = "contact">
                        <h1 className = " section-title-h1 "> Contact Me </h1>
                    

                        <div className = "description contact-description" ></div>

                        <div className = "contact-form-container" >

                        <form action="https://formspree.io/f/xpzobora" method="POST">
                                <div className = "forms">
                                    <label for="firstname"> First name </label>
                                    <span className = "star" > * </span>    
                                     <br/>
                                    <input type="text"  className="userInput" id="firstname" name="fname" required />
                                </div>

                                <div className = "forms">
                                    <label for="lastname"> Last name </label>
                                    <span className = "star" > * </span>    
                                     <br/>
                                    <input type="text" className="userInput" id="lastname" name="lname" required/>
                                </div>
                                <div className = "forms">
                                    <label for="email"> Email </label>
                                    <span className = "star"  > * </span>    
                                     <br/>
                                    <input type="text" className="userInput" id="email" name="email" required/>
                                </div>
                                <div className = "forms">
                                    <label for="mobile"> Contact Number (Optional) </label> <br/>
                                    <input type="text" className="userInput" id="mobile" name="mobile" />
                                </div>
                                <div className = "forms">
                                    <label for="message"> Drop a Message </label> <br/>
                                    <textarea id="message" 
                                    className="userInput" 
                                    name="message" rows="4" cols="50">
                                    </textarea>
                                </div>
                                <a href="mailto:prasadvenkatesh38@gmail.com">
                                <button type="submit" className="submit-btn " value="Send">Submit</button></a>
                            </form>
                        </div>
                </section>
            </>
        );
}

export default ContactComp;