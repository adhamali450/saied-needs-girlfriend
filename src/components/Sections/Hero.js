import "../styling/Hero.sass";
import glowRed from "../../assets/glow-red.png";
import heroRed from "../../assets/saied-red.png";
import chevronRight from "../../assets/chevron-right.svg";
import iconSale from "../../assets/icon-sale.svg";

import Button from '../Button'; 

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
        <section className="banner">
          <img className="icon-sale" src={iconSale} alt=""/>
          <h6 className="title">Limited time offer</h6>
          <p className="content">Get 100% welcome discount !</p>
          <small className="details">Book Saied now and get <s>75%</s> <strong>100%</strong> discount for your first date check</small>
        </section>
      </div>
    </section>
  );
}

export default Hero;
