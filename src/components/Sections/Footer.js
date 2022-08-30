import '../styling/Footer.sass'
import saiedSitting from '../../assets/saied-sitting.png'

function Footer(){
    return (
        <footer>
            <img id="left" src={saiedSitting}/>
            <small>Would you let him down ?</small>
            <img id="right" src={saiedSitting}/>
        </footer>
    )
}

export default Footer;