import "../styles/Home.css";
import logo from "../assets/logo.png"



import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: send the form data to a server or external API
    // console.log(Submitting form: name=${name}, email=${email}, message=${message});
    // clear the form after submitting
    setName('');
    setEmail('');
    setMessage('');
  };

  return (

    <>
     <div className="container">
    
    <img src={logo} alt="My Image" width={400} height={400} />
        <h1 className="title">
          What is your <a href="">Question</a>?
        </h1>

        <p className="description">
        "From farm to table, let's keep it safe and stable!"
        </p>
      
    <form id="contact-form" onSubmit={handleSubmit}>
      
    <label for="fname">Mail</label>
    <input type="text" id="fname" name="firstname" placeholder="mail@gmail.com"></input>

    <label for="lname">Message</label>
    <input type="text" id="lname" name="lastname" placeholder="Questions...."></input>

    <label for="country">State</label>
    <select id="country" name="country">
      <option value="australia">Ernakulam</option>
      <option value="canada">Trivandrum</option>
      <option value="usa">Calicut</option>
    </select>
  
    <input type="submit" value="Submit"></input>
    </form>
    </div>
    </>
  );
}

export default ContactForm;