import './styling/Button.sass';

function Button(props){    
    
    const {className, varient, icon, text, alt, disabled} = props;
    
    let varientClass = varient? varient : "default";

    return(
        <button className={`btn ${varientClass} ${className? className : ""}`} 
            disabled={disabled}>
            <span style={{display: !text? "none": "inline-block"}}>{text}</span>
            { icon && <img src={icon} alt={alt}/> }
        </button>
    )
}

export default Button;