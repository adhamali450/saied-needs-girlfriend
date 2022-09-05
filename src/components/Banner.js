import "./styling/Banner.sass"



function Banner(props){

    const {icon, title, content, details, footer} = props;

    return(
        <section className="banner">
            <img className="icon-sale" src={icon} alt=""/>
            <h6 className="title">{title}</h6>
            <p className="content">{content}</p>
            <small className="details">{details}</small>
            {footer}
        </section>
    )
}

export default Banner;