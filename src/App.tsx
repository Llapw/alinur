import { useState } from "react";
import "./App.css";

function App() {
  const [opened, setOpened] = useState(false);

  const artworks = [
    "/photos/friend1.jpg",
    "/photos/grey1.jpg",
    "/photos/grey2.jpg",
    "/photos/julia1.jpg",
    "/photos/julia2.jpg",
    "/photos/gun1.jpg"
  ];

  return (
    <main className={opened ? "page opened" : "page"}>
      <section className="hero" onClick={() => setOpened(true)}>
        <img src="/photos/gun2.jpg" alt="background" className="hero-image"></img>

        <div className="hero-text">
          <h1>Alinur Abralin</h1>
        </div>
      </section>

      <section className="gallery-panel">
        <div className="gallery">
            {artworks.map((src, index) => (
              <div className="artwork" key={src} style={{ transitionDelay: `${0.3 + index * 0.15}s` }}>
                <img src={src} alt={`Artwork ${index + 1}`}></img>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}

export default App;