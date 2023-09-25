import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return; // this is also called early return
  const mainMovie = movies[1];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[40%] md:pt-0 bg-black md:bg-transparent">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
