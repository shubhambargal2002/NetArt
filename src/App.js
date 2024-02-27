import "./App.css";
import { CallSvg, FacebookSvg, WwwSvg } from "./images";

function App() {
  return (
    <>
      <div className="logo_container">
        <img src="logo.png" alt="logo" />
      </div>

      <div className="hero_container">
        <div className="hero_left">
          <img src="1.png" alt="Award" />
        </div>
        <div className="hero_right">
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{" "}
            </li>
          </ul>
          <img src="2.png" alt="" />
          <p>
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>

      <div className="products_outer_container">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div className="products_container">
          <img src="3.png" alt="Products" />
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
      </div>

      <div className="line_container">
        <div className="line"></div>
      </div>

      <div className="content_container">
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <div>
          CHEMICALS & PROCESS<span></span>POWER<span></span>WATER & WASTE WATER
          <span></span>OILS & GAS<span></span>PHARMA<span></span>SUGARS &
          DISTILLERIES<span></span>PAPER & PULP<span></span>MARINE & DEFENCE
          <span></span>METAL & MINING<span></span>FOOD & BEVERAGE<span></span>
          PETROCHEMICAL & REFINERIES<span></span>SOLAR<span></span>BUILDING
          <span></span>HVAC<span></span>FIRE FIGHTING<span></span>AGRICULTURE &
          RESIDENTIAL
        </div>
      </div>

      <div className="footer">
        <div>
          <CallSvg />
          <p>
            Toll <b>1800 200 1234</b>
          </p>
        </div>
        <div>
          <FacebookSvg />
          <a
            href="https://www.facebook.com/cripumps"
            target="_blank"
            rel="noreferrer"
          >
            www.facebook.com/cripumps
          </a>
        </div>
        <div>
          <WwwSvg />
          <a href="https://www.crigroups.com" target="_blank" rel="noreferrer">
            www.crigroups.com
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
