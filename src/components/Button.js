import './styling/Button.sass';

function Button(props){    
    
    const {className, type, icon, text, href, target, alt} = props;
    
    let typeClass = type? type : "default";

    return(
        <a className={`btn ${typeClass} ${className? className : ""}`} 
            href={href} 
            target={target ? target : "_self"}>
            <span style={{display: !text? "none": "inline-block"}}>{text}</span>
            { icon && <img src={icon} alt={alt}/> }
        </a>
    )
}

export default Button;