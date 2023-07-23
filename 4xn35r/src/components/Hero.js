import "./HeroStyle.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="heroimg" src={props.heroimg} />
      </div>
      <div className="hero-text">
        <h1> {props.title}</h1>
        <p>{props.text}</p>

        <a href="props.url" className={props.btnclass}>
          {props.buttonText}
        </a>
      </div>
    </>
  );
}

export default Hero;
