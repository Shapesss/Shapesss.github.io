import "../Styles/Profile_card.css";
import omar from "../img/Omar.png";
import { Button } from "react-bootstrap";

function Profile_car() {
  return (
    <>
      <div className="cardos">
        <div className="photo_rotate">
          <img src={omar} className="photo" />
        </div>
        <div className="contentos">
          <h2>
            Omar Abounayme
            <h3>Motion Designer</h3>
          </h2>
          <p>
            View fine me gone this name an rank. Compact greater and demands mrs
            the parlors. Park be fine easy am size away. Him and fine bred knew.
            At of hardly sister favour. As society explain country raising
            weather of.
          </p>
        </div>
        <div className="socials">
          <Button as="a" href="#" className="btn_cardo">
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mail"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#3baea0"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </Button>

          <Button as="a" href="#" className="btn_cardo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-social"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="5" r="2" />
              <circle cx="5" cy="19" r="2" />
              <circle cx="19" cy="19" r="2" />
              <circle cx="12" cy="14" r="3" />
              <line x1="12" y1="7" x2="12" y2="11" />
              <line x1="6.7" y1="17.8" x2="9.5" y2="15.8" />
              <line x1="17.3" y1="17.8" x2="14.5" y2="15.8" />
            </svg>
            Socials
          </Button>
        </div>
      </div>
    </>
  );
}

export default Profile_car;
