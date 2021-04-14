import React from "react";
import "./styles.scss";
function PillComponent(props) {
  let pillDiv = "pill-div-selected-icon";
  let pillIcon = "pill-icon-selected-icon";
  let pillText = "pill-text-selected-icon";
  let pillFlagIcon = "pill-flag-icon-not-display";
  let imgSrc = "./images/australia-icon.svg";

  var urlAus =
    "https://www.pngfind.com/pngs/m/224-2244500_australia-round-flag-australia-flag-circle-png-transparent.png";
  // if (props.pillName) {
  //   className += " menu-active";
  // }

  switch (props.pillName) {
    case "selected-with-icon":
      pillDiv = "pill-div-selected-icon";
      pillIcon = "pill-icon-selected-icon";
      pillText = "pill-text-selected-icon";
      break;
    case "unselected-with-icon":
      pillDiv = "pill-div-unselected-icon";
      pillIcon = "pill-icon-unselected-icon";
      pillText = "pill-text-unselected-icon";
      break;
    case "unselected-with-another-icon":
      pillDiv = "pill-div-unselected-icon";
      pillIcon = "pill-icon-unselected-without-icon";
      pillText = "pill-text-unselected-icon";
      pillFlagIcon = "pill-flag-icon-display";
      break;
    case "selected-without-icon":
      pillDiv = "pill-div-selected-without-icon";
      pillIcon = "pill-icon-selected-without-icon";
      pillText = "pill-text-selected-without-icon";
      break;
    case "unselected-without-icon":
      pillDiv = "pill-div-unselected-without-icon";
      pillIcon = "pill-icon-unselected-without-icon";
      pillText = "pill-text-unselected-without-icon";
      break;
    case "unselected-without-icon-full-width":
      pillDiv = "pill-div-unselected-without-icon-full-width";
      pillIcon = "pill-icon-unselected-without-icon-full-width";
      pillText = "pill-text-unselected-without-icon-full-width";
      break;
    default:
      break;
  }

  return (
    <div>
      {/* <div>{props.propName}</div> */}
      <div className={pillDiv}>
        <span className={pillIcon}>×</span>
        {/* <span
          className="flag-img"
          // style={{
          //   backgroundImage: "url(" + { urlAus } + ")",
          //   // backgroundImage: `url(${
          //   //   process.env.PUBLIC_URL + "./../../../assests/img/search-icon.svg"
          //   // })`,
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          // }}
          style={{
            backgroundImage: `url(${props.photo_icon})`,
          }}
        ></span> */}
        <img src={props.photo_icon} className={pillFlagIcon} />

        <span className={pillText}>{props.textValue}</span>
      </div>
    </div>
  );
}

export default PillComponent;
