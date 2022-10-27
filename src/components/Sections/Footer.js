import "../styling/Footer.sass";
import saiedSitting from "../../assets/saied-sitting.webp";

function Footer() {
  return (
    <footer>
      <img id="left" src={saiedSitting} alt="" />
      <small>Would you let him down ?</small>
      <img id="right" src={saiedSitting} alt="" />
    </footer>
  );
}

export default Footer;
