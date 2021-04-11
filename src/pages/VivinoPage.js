import React from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import SecondHeader from "../components/second-header/SecondHeader";
import "./styles.scss";

function VivinoPage(props) {
  return (
    <div>
      <div className="header">
        <HeaderComponent></HeaderComponent>
        <SecondHeader></SecondHeader>
      </div>
    </div>
  );
}

export default VivinoPage;
