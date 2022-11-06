import "../Styles/Main_body.css";
import video from "../img/video.mp4";

function Mainbody() {
  return (
    <div className="videos">
      <video autoPlay muted loop src={video} className="act_vid"></video>
      <h1>Welcome</h1>
    </div>
  );
}
export default Mainbody;
