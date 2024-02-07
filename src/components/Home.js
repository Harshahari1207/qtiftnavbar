import { useEffect, useState } from "react";
import CarouselSec from "./CarouselSec";
import HeroSection from "./HeroSection";
import NavBar from "./Navbar";
import axios from "axios";
import GridCards from "./GridCards";
function Home() {
  const [topsongs, setTopsongs] = useState([]);
  const [ishowAll, setIshowAll] = useState(false);
  const fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      return res;
    } catch (err) {
      return null;
    }
  };

  useEffect(() => {
    const fetchTopsongs = async () => {
      const data = await fetchData(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      // console.log(data);
      setTopsongs(data.data);
    };
    fetchTopsongs();
  }, []);
  const handleShowAll = () => {
    setIshowAll(!ishowAll);
  };
  return (
    <div>
      <NavBar />
      <div className="hero-main">
        <HeroSection />
      </div>
      <div className="top-songs">
        <div className="top-head">
          <h2>Top Albums</h2>
          <button onClick={handleShowAll}>
            {ishowAll ? <h3>Collapse</h3> : <h3>Show all</h3>}
          </button>
        </div>
        {ishowAll ? (
          <div className="carousel">
            <GridCards children={topsongs} />
          </div>
        ) : (
          <div className="carousel">
            <CarouselSec children={topsongs} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
