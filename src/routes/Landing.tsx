import { useNavigate } from "react-router-dom";
import "../App.css";

function Landing() {
  const navigate = useNavigate(); 

  return (
    <main>
      <section className="hero" onClick={() => navigate("/alinur/home")}>
        <img
          src={`${import.meta.env.BASE_URL}photos/julia2.jpg`}
          alt="Hero"
          className="hero-image"
        />

        <div className="hero-text">
          <h1>ALINUR ABRALIN</h1>
        </div>
      </section>
    </main>
  );
}

export default Landing;