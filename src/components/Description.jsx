import "../Styles/Description.css";
import omar from "../img/Omar.png";

function Description() {
  return (
    <div className="Containos_Desc ">
      <div className="Desc_omar shadow-drop-2-center">
        <div>
          <hr />
          <div className="Omar_title">
            <img src={omar} />
            <h2>Omar Abounayme</h2>
            <h5>Motion Designer</h5>
          </div>
          <hr />
        </div>
        <div className="Text_omar_av">
          <hr />
          <div className="Text_omar">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda veritatis dolore a eaque, iure amet animi numquam
              corrupti minima nostrum at adipisci ea inventore tenetur harum
              officiis fuga porro nihil?
              <i> Lorem ipsum</i>, dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              perferendis quas soluta natus architecto reiciendis voluptate. Sed
              voluptas <i>non nulla est ipsum! Cupiditate aperiam maiores</i>{" "}
              nulla eum odio ab asperiores? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda veritatis dolore a eaque, iure amet animi numquam
              corrupti minima nostrum at adipisci ea inventore tenetur harum
              officiis fuga <i>porro nihil</i>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default Description;
