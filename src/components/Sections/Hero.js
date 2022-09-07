import "../styling/Hero.sass";
import glowRed from "../../assets/glow-red.png";
import heroRed from "../../assets/saied-red.png";
import chevronRight from "../../assets/chevron-right.svg";
import iconSale from "../../assets/icon-sale.svg";
import iconTimer from "../../assets/icon-timer.svg";

import Banner from "../Banner";
import Button from '../Button'; 
import Countdown from 'react-countdown'

import { Fragment } from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="decoration">
        <img className="decoration__glow" src={glowRed} alt=""/>
        <img className="decoration__img" src={heroRed} alt=""/>
      </div>
      <div className="hero__content container">
        <h1 className="hero__content__title">
          Saied
          <br id="br1"/>
          needs a {""}
          <br id="br2"/>
          girlfriend
        </h1>
        <Button icon={chevronRight} href="#contact" varient="glyph-btn" alt="contact saied"/>
      </div>
      <div className="hero__offer container">
        <Banner 
          icon={iconSale}
          title="Limited time offer" 
          content="Get 100% welcome discount !"
          details={
            <Fragment>
              Book Saied now and get <s style={{opacity: 0.6}}>75%</s> <strong> 100%</strong> discount for your first date check
            </Fragment>}
          footer={
            <div className="footer">
              <img src={iconTimer}/>
              <Countdown className="timer" date={Date.now() + 10000000000} />
            </div>
          } />
      </div>
    </section>
  );
}


export default Hero;
