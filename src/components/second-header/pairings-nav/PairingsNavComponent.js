import React from "react";
import "./styles.scss";
import pairingImg from "./../../../assests/img/pairing-icon.svg";
import BottomLineComponent from "../bottom-line/BottomLineComponent";
import beef from "./../../../assests/img/beef-icon.svg";
import lamb from "./../../../assests/img/lamb-icon.svg";
import pork from "./../../../assests/img/pork-icon.svg";
import deer from "./../../../assests/img/deer-icon.svg";
import poultry from "./../../../assests/img/hen-icon.svg";
import mushroom from "./../../../assests/img/mushroom-icon.svg";
import meat from "./../../../assests/img/meat-icon.svg";
import cheese from "./../../../assests/img/cheese-icon.svg";
import cheeseSplice from "./../../../assests/img/cheese-splice-icon.svg";
import pasta from "./../../../assests/img/pasta-icon.svg";
import spicy from "./../../../assests/img/spicy-icon.svg";
import aperitif from "./../../../assests/img/aperitif-icon.svg";
import snacks from "./../../../assests/img/snacks-icon.svg";
import leanFish from "./../../../assests/img/lean-fish-icon.svg";
import richFish from "./../../../assests/img/rich-fish-icon.svg";
import shellFish from "./../../../assests/img/sea-shell-icon.svg";
import vegetarian from "./../../../assests/img/vegetarian-icon.svg";

function PairingsNavComponent(props) {
  return (
    <div>
      <div className="dropdown-custom">
        {/* <input id="dropcheck" className="dropcheck" type="checkbox" /> */}
        <img src={pairingImg} className="pairing-img" />
        <div className="dropdown-custom-title">Pairings</div>
        <div className="dropdown-custom-content">
          <div className="row pairing-raw">
            <div className="col-md-4 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12  pairing-item">
                    <img src={beef} className="content-one-img" />
                    Beef
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={lamb} className="content-one-img" />
                    Lamb
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={beef} className="content-one-img" />
                    Veal
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={pork} className="content-one-img" />
                    Pork
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={deer} className="content-one-img" />
                    Game(deer, vension)
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={poultry} className="content-one-img" />
                    Poultry
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={mushroom} className="content-one-img" />
                    Mushrooms
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12  pairing-item">
                    <img src={meat} className="content-one-img" />
                    Cured meat
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={cheese} className="content-one-img" />
                    Goat Cheese
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={cheeseSplice} className="content-one-img" />
                    Mature and hard cheese
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={cheeseSplice} className="content-one-img" />
                    Mature and soft cheese
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={pasta} className="content-one-img" />
                    Pasta
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={spicy} className="content-one-img" />
                    Spicy food
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12  pairing-item">
                    <img src={aperitif} className="content-one-img" />
                    Aperitif
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={snacks} className="content-one-img" />
                    Appertizers and snacks
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={leanFish} className="content-one-img" />
                    Lean fish
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={richFish} className="content-one-img" />
                    Rich fish
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={shellFish} className="content-one-img" />
                    Shellfish
                  </div>
                  <div className="col-md-12  pairing-item">
                    <img src={vegetarian} className="content-one-img" />
                    Vegetarian
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BottomLineComponent></BottomLineComponent>

          {/* <div className="browse-wines" >
            Browse all wines
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default PairingsNavComponent;
