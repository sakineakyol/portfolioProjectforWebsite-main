import "./topbar.scss";
// import Person from "../person/Person";
//import Mail from "../mail/Mail";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import HomeIcon from "@mui/icons-material/Home";

// eslint-disable-next-line react/prop-types
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Sakine.
          </a>
        </div>
        <div className="itemContainer">
          {/* <Person /> */}
          <HomeIcon />
          <span> Sakine Akyol </span>
        </div>
        <div className="itemContainer">
          <LocalPhoneIcon className="LocalPhoneIcon" />
          <span> +90 553 861 5451 </span>
        </div>
        <div className="itemContainer">
          {/* <Mail /> */}
          <LocalPostOfficeIcon />
          <span> sakineeakyoll@gmail.com</span>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
