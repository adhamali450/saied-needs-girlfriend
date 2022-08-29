import '../styling/Footer.sass'
import saiedSitting from '../../assets/saied-sitting.png'

function Footer(){
    return (
        <footer>
            <img id="left" src={saiedSitting}/>
            <span>Would you let him down ?</span>
            <img id="right" src={saiedSitting}/>
        </footer>
    )
}

export default Footer;