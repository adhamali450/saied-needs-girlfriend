import './styling/Label.sass'

function Label(props){
    return(
        <div className={`label${props.className? " " + props.className : ""}`}>
          <img className="label__icon" src={props.src} alt={props.alt? props.alt : ""}/>
          <h5 className="label__title">{props.title}</h5>
        </div>
    )
}

export default Label;