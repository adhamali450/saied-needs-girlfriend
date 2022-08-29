import "../styling/Hero.sass";
import glowRed from "../../assets/glow-red.png";
import heroRed from "../../assets/saied-red.png";
import chevronRight from "../../assets/chevron-right.svg";
import Button from '../Button'; 

function Hero() {
  return (
    <section className="hero">
      <div className="decoration">
        <img className="decoration__glow" src={glowRed} />
        <img className="decoration__img" src={heroRed} />
      </div>
      <div className="hero__content container">
        <h1 className="hero__content__title">
          Saied
          <br id="br1"/>
          needs a {""}
          <br id="br2"/>
          girlfriend
        </h1>
        <Button icon={chevronRight} href="#contact" type="glyph-btn" alt="contact saied"/>
        </div>
    </section>
  );
}

export default Hero;
