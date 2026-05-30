import "../App.css";

function Home(){
    const artworks = [
        "photos/friend1.jpg",
        "photos/grey1.jpg",
        "photos/grey2.jpg",
        "photos/julia1.jpg",
        "photos/gun2.jpg",
        "photos/gun1.jpg",
    ];

    return (
        <main>
            <section className="portfolio-panel">
                <section className="masonry-gallery">
                    {artworks.map((src, index) => (
                        <img
                        key={src}
                        src={`${import.meta.env.BASE_URL}${src}`}
                        alt={`Artwork ${index + 1}`}
                        className="gallery-image"
                        loading="lazy"
                        />
                    ))}
                </section>
            </section>
        </main>
    );
}

export default Home;