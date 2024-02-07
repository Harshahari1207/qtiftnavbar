import { useEffect, useState } from "react";
import CarouselSec from "./CarouselSec";
import HeroSection from "./HeroSection";
import NavBar from "./Navbar";
import axios from "axios";
import GridCards from "./GridCards";
function Home() {
  const [topsongs, setTopsongs] = useState([]);
  const [newsongs, setNewsongs] = useState([]);
  const [ishowAllTop, setIshowAllTop] = useState(false);
  const [ishowAllNew, setIshowAllNew] = useState(false);
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
    const fetchNewsongs = async()=>{
      const data = await fetchData(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      // console.log(data);
      setNewsongs(data.data);

    }
    fetchTopsongs();
    fetchNewsongs()
  }, []);
  const handleShowAllTop = () => {
    setIshowAllTop(!ishowAllTop);
  };
  const handleShowAllNew = () => {
    setIshowAllNew(!ishowAllNew);
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
          <button onClick={handleShowAllTop}>
            {ishowAllTop ? <h3>Collapse</h3> : <h3>Show all</h3>}
          </button>
        </div>
        {ishowAllTop ? (
          <div className="carousel">
            <GridCards children={topsongs} />
          </div>
        ) : (
          <div className="carousel">
            <CarouselSec children={topsongs} />
          </div>
        )}
      </div>
      <div className="top-songs" style={{marginTop: "1px"}}>
        <div className="top-head">
          <h2>New Albums</h2>
          <button onClick={handleShowAllNew}>
            {ishowAllNew ? <h3>Collapse</h3> : <h3>Show all</h3>}
          </button>
        </div>
        {ishowAllNew ? (
          <div className="carousel">
            <GridCards children={newsongs} />
          </div>
        ) : (
          <div className="carousel">
            <CarouselSec children={newsongs} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
