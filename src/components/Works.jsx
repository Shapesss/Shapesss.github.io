import "../Styles/Works.css";
import photo from "../img/kirby.jpeg";
function dis_over_vis() {
  document.getElementById("Overlayos").style.opacity = "1";
}
function dis_over() {
  document.getElementById("Overlayos").style.display = "flex";
  document.getElementById("Overlayos").style.opacity = "0";
  setTimeout(() => {
    dis_over_vis();
  }, 300);
}
function dis_over_off() {
  document.getElementById("Overlayos").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("Overlayos").style.display = "none";
  }, 600);
}
function Works() {
  return (
    <div>
      <div className="card cardos3" id="works">
        <div className="Work" onClick={dis_over}>
          <img src={photo} />
          <h3>Projet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            sed totam consectetur, sapiente ad culpa provident si
          </p>
        </div>

        <div className="Work" onClick={dis_over}>
          <img src={photo} />
          <h3>Projet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            sed totam consectetur, sapiente ad culpa provident si
          </p>
        </div>
        <div className="Work" onClick={dis_over}>
          <img src={photo} />
          <h3>Projet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            sed totam consectetur, sapiente ad culpa provident si
          </p>
        </div>
        <div className="Work" onClick={dis_over}>
          <img src={photo} />
          <h3>Projet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            sed totam consectetur, sapiente ad culpa provident si
          </p>
        </div>
        <div className="Work" onClick={dis_over}>
          <img src={photo} />
          <h3>Projet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            sed totam consectetur, sapiente ad culpa provident si
          </p>
        </div>
        <div className="Work" onClick={dis_over}>
          <img src={photo} />
          <h3>Projet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            sed totam consectetur, sapiente ad culpa provident si
          </p>
        </div>
      </div>
      <div id="Overlayos" onClick={dis_over_off}>
        <div id="pr_img">
          <img src={photo} />
        </div>
        <div id="over_text">
          <h1 id="Titlos">Title</h1>
          <div id="pr_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum
            dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
