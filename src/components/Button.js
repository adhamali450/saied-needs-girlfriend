import { Fragment } from "react";
import './styling/Button.sass';

function Button(props){    
    
    const {className, varient, type, href, icon, text, alt, disabled} = props;
    
    let varientClass = varient? varient : "default",
        fullClassName = `btn ${varientClass} ${className? className : ""}`,
        content = (
            <Fragment>
                <span style={{display: !text? "none": "inline-block"}}>{text}</span>
                { icon && <img src={icon} alt={alt? alt : ""}/> }
            </Fragment>
        );

    // Will render either <a> or <button> depending on the user preferences
    return(
        href ?
        <a 
            className={fullClassName} 
            disabled={disabled}
            href={href}>
            {content}        
        </a> :
        
        <button 
            className={fullClassName} 
            disabled={disabled}
            onClick={props.onClick}
            type={type? type : "button"} >
            {content}
        </button>
    )
}

export default Button;