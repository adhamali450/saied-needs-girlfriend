import './styling/Seperator.sass'

function Seperator(props){
    return (
        <div className="seperator">
            <span>{props.text}</span>
            <span className="seperator__line"></span>
        </div>
    )
}

export default Seperator;