import Button from "../Button";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Seperator from "../Seperator";
import '../styling/Contact.sass'

import iconTwitter from '../../assets/icon-twitter.svg';
import iconWhatsapp from '../../assets/icon-whatsapp.svg';
import iconMessenger from '../../assets/icon-messenger.svg';

function About() {
  return (
    <section className="contact container" id="contact">
      <header>
        <h2>Get started</h2>
        <span>Prepare for your fairy tail love story. Don't raise  expectations.</span>
      </header>
    
      <div className="casual contact-mean">
        <Seperator text="Casual queen" />
        <div className="social-media">
          <Button text="Messenger" icon={iconMessenger} type="contact-btn" target="_blank" href="#"/>
          <Button text="Whatsapp" icon={iconWhatsapp} type="contact-btn" target="_blank" href="#"/>
          <Button text="Twitter" icon={iconTwitter} type="contact-btn" target="_blank" href="#"/>
        </div>
      </div>

      <div className="formal contact-mean">
        <Seperator text="Formal queen" />
        <FormGroup id="form">
          <TextField className="text-field" variant="filled" size="small" label="Queen's Name" type="text" required />
          <TextField className="text-field"variant="filled" size="small" label="Queen's Email Address" type="email" required/>
          <TextField className="text-area"variant="filled" size="small" rows="3" multiline label="Say hi" type="text" required/>
          <FormControlLabel className="checkbox"
            control={<Checkbox />} 
            label={
              <span>
                I'm above the age of <a target="_blank" href="https://www.law.cornell.edu/wex/age_of_majority">legal majority</a>
              </span>
            } />
          <FormControlLabel  className="checkbox"
            control={<Checkbox />} 
            label={
              <span>
                I agree to the <a href="#">terms and conditions</a>
              </span>
            } />
          <Button text="Book a date"/>
        </FormGroup>
      </div>

    </section>
  );
}

export default About;
