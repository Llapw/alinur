function AboutMe(){
  return (
    <main className="about-page">
      <section className="about-layout">
        <aside className="about-left">
          <img src="./photos/alik.jpg" alt="Alinur Abralin" className="about-image" />
          <div className="about-contact">
            <p>Email: scawstudio@gmail.com</p>
            <p>
              Instagram:{" "}

              <a href="https://instagram.com/scawa.s" target="_blank">
                @scawa.s
              </a>

            </p>
          </div>
        </aside>

        <section className="about-text">
          <p>
            fine art, fashion, commercial, and portrait photographer from Kazakhstan, currently based in Prague. In his practice, he combines a conceptual approach, cinematic staging, and a subtle connection with the model, blending analog and digital techniques.
          </p>

          <p>
            Each photograph is a self-contained story, a form of art, and a means of
            self-expression. Visual language has been shaped by the influence of such
            notable artists as Francesca Woodman, Gaspar Noé, Abbas Kiarostami,
            Stefanie Schneider and last but not least, Greta Gerwig.
          </p>
        </section>
      </section>
    </main>
  );
}

export default AboutMe;