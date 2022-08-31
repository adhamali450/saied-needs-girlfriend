import { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from "../Button";
import Seperator from "../Seperator";

import iconTwitter from '../../assets/icon-twitter.svg';
import iconWhatsapp from '../../assets/icon-whatsapp.svg';
import iconMessenger from '../../assets/icon-messenger.svg';

import '../styling/Contact.sass'


function About() {
  const [legal, setLegel] = useState(false)

  return (
    <section className="contact container" id="contact">
      <header>
        <h2>Get started</h2>
        <span>Prepare for your fairy tail love story. Don't raise  expectations.</span>
      </header>
    
      <div className="casual contact-mean">
        <Seperator text="Casual queen" />
        <div className="social-media">
          <Button text="Messenger" icon={iconMessenger} varient="contact-btn"/>
          <Button text="Whatsapp" icon={iconWhatsapp} varient="contact-btn"/>
          <Button text="Twitter" icon={iconTwitter} varient="contact-btn"/>
        </div>
      </div>

      <div className="formal contact-mean">
        <Seperator text="Formal queen" />
        <form id="form" onSubmit={() => console.log("Adham")}>
            <TextField className="text-field" variant="filled" size="small" label="Queen's Name" type="text" required />
            <TextField className="text-field"variant="filled" size="small" label="Queen's Email Address" type="email" required/>
            <TextField className="text-area"variant="filled" size="small" rows="3" multiline label="Say hi" type="text" required/>
            <FormControlLabel className="checkbox"
              control={<Checkbox onChange={() => setLegel(!legal) }/>} 
              label={
                <span className="checkbox-label">
                  I'm above the age of <a target="_blank" href="https://www.law.cornell.edu/wex/age_of_majority">legal majority</a>
                </span>
              } />
          <Button id="btn-submit" text="Book a date" disabled={!legal} type="submit"/>
        </form>
      </div>

    </section>
  );
}

export default About;
