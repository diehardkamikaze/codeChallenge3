import "./index.css";
import { useState, useCallback } from "react";
import Slide from "../Slide";
import { cycled_slice, throttle } from '../../utils';
import svg_slider from '../../assets/right_arrow.svg'


const VISIBLE_SLIDES_COUNT = 3;
const animation_speed = 600;

export default function Slider({slides}) {

  const visible_slides_count = Math.min(slides.length, VISIBLE_SLIDES_COUNT); 
  

  const colors = ["red", "green", "lightblue"];
  const [anime, setAnime] = useState([]);

  const [curSlide, setCurSlide] = useState(0);

  const leftHandler = useCallback(throttle(function () {    
    setAnime(["anime", "anime-small", "anime-small"]);
    setTimeout(() => {
      setCurSlide((curSlide) => curSlide + 1);
      setAnime(["", "", "anime-fade"]);
    }, animation_speed);
  }, animation_speed * 2), [animation_speed]);

  return (
    <>
      <div className="Slider">
        {
          cycled_slice(slides, curSlide, curSlide + visible_slides_count)
          .map((elem, i) => {
          return (
            <Slide
              key={i + visible_slides_count * curSlide}
              className={"Slide" + (anime[i] ? ` ${anime[i]}` : "")}
              color={colors[(curSlide + i) % 3]}
              padding={i}
              name={elem?.name}
              clone_url={elem?.clone_url}
              url={elem?.html_url}
              forks_count={elem?.forks_count}
              size={elem?.size}
              stargazers={elem?.stargazers_count}
            />
          );
        })}
        {slides.length > 1 && <div className="next-slide" onClick={leftHandler}><img width="50" src={svg_slider} /></div>}
      </div>
   </>
  );
}