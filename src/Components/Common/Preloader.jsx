import preloader from "../../img/Spinner-0.7s-237px.svg";

const Preloader = (props) => {
  return (
    <div className="preloader">
      <img src={preloader} alt="" />
      {props.loadingText && <div>{props.loadingText}</div> }
    </div>
  );
};

export default Preloader;
