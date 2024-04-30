import "./intro.scss";
import womanImage from "../../assets/woman.png";
import downImage from "../../assets/angle-down.png";
import { init } from "ityped";
import { useEffect } from "react";
import { useRef } from "react";

export default function Intro() {
  const textref = useRef(null);
  useEffect(() => {
    init(textref.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Project Manager"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={womanImage} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I`m</h2>
          <h1>Sakine Akyol</h1>
          <h3>
            Software <span ref={textref}> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={downImage} alt="" />
        </a>
      </div>
    </div>
  );
}
