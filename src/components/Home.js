import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CarouselSec from "./CarouselSec";
import HeroSection from "./HeroSection";
import NavBar from "./Navbar";
import axios from "axios";
import GridCards from "./GridCards";

function Home() {
  const [topsongs, setTopsongs] = useState([]);
  const [newsongs, setNewsongs] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filtersongs, setFiltersongs] = useState([]);
  const [genre, setGenre] = useState([]);

  const [ishowAllTop, setIshowAllTop] = useState(false);
  const [ishowAllNew, setIshowAllNew] = useState(false);
  const [value, setValue] = useState(0); // Ensure this value corresponds to the index of the default selected tab

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
    const fetchNewsongs = async () => {
      const data = await fetchData(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      // console.log(data);
      setNewsongs(data.data);
    };
    const fetchAllsongs = async () => {
      const data = await fetchData("https://qtify-backend-labs.crio.do/songs");
      setSongs(data.data);
      console.log(data.data);
      setFiltersongs(data.data)
    };
    const fetchGenre = async () => {
      const data = await fetchData("https://qtify-backend-labs.crio.do/genres");
      // console.log(data.data);
      setGenre(data.data);
    };
    fetchTopsongs();
    fetchNewsongs();
    fetchAllsongs();
    fetchGenre();
    // setFiltersongs(songs)
  }, []);
  const filterSongs = (value) => {
    if (value === "all") {
      setFiltersongs(songs);
    } else {
      const res = songs.filter((data) => data.genre.key === value);
      setFiltersongs(res);
    }
  };
  const handleChangeSongs = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      filterSongs("all");
    } else {
      // console.log(genre.data[newValue].key)
      filterSongs(genre.data[newValue - 1].key);
    }
  };

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
      <div className="top-songs" style={{ marginTop: "1px" }}>
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
      <div className="top-songs" style={{padding:"15px"}}>
        <div className="songs-top" style={{color: "#ffff"}}>
          <h2>Songs</h2>
        </div>
        <div className="songs-head" style={{padding:"15px"}}>
          <Tabs
            value={value}
            onChange={handleChangeSongs}
            aria-label="icon label tabs example"
          >
            <Tab label="All" style={{ color: "#ffff" }} value={0} />
            {genre.length !== 0 &&
              genre.data.map((res, index) => (
                <Tab
                  key={res.key}
                  label={res.label}
                  style={{ color: "#ffff" }}
                  value={index + 1}
                />
              ))}
          </Tabs>
        </div>
        <div className="carousel">
          <CarouselSec children={filtersongs} />
        </div>
      </div>
    </div>
  );
}

export default Home;
