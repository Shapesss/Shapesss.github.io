import "../Styles/Comp.css";

function Comp() {
  return (
    <div class="card cardos2">
      <h1>Skills</h1>
      <div class="card skill_items">
        <div class="card itemos">
          <i class="fas fa-laptop fa-3x"></i>

          <h2>Dev</h2>
        </div>
        <div class="card itemos">
          <i class="fas fa-wand-magic fa-3x "></i>
          <h2>Design</h2>
        </div>
        <div class="card itemos">
          <i class="fa fa-book fa-3x" aria-hidden="true"></i>
          <h2>Storytelling</h2>
        </div>
        <div class="card itemos">
          <i class="fas fa-video fa-3x  "></i>
          <h2>Filmmaking</h2>
        </div>
        <div class="card itemos">
          <i class="fas fa-edit fa-3x  "></i>
          <h2>Editing</h2>
        </div>
        <div class="card itemos">
          <i class="fas fa-star fa-3x  "></i>
          <h2>VFX</h2>
        </div>
      </div>
    </div>
  );
}
export default Comp;
