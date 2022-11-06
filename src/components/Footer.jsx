import "../Styles/Footer.css";
import { Card } from "react-bootstrap";

function Footer() {
  return (
    <Card className="footer">
      <Card.Body>
        Made For Omar
        <svg
          width="0"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <line x1="9" y1="10" x2="9.01" y2="10" />
          <line x1="15" y1="10" x2="15.01" y2="10" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        </svg>
      </Card.Body>
    </Card>
  );
}
export default Footer;
