import './styling/Button.sass';

function Button(props){    
    
    const {className, varient, type, icon, text, alt, disabled} = props;
    
    let varientClass = varient? varient : "default";

    return(
        <button className={`btn ${varientClass} ${className? className : ""}`} 
            type={type? type : "button"} disabled={disabled}>
            <span style={{display: !text? "none": "inline-block"}}>{text}</span>
            { icon && <img src={icon} alt={alt? alt : ""}/> }
        </button>
    )
}

export default Button;