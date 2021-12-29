import React, { useEffect, useState } from "react";

const FadeInSections = (props) => {
  const [isVisible, setVisible] = useState(null);
  const domRef = React.useRef();

  //Uses intersectionObserver to show when child element is on screen, doesn't reset on scroll up or scroll down. !!!!! Eventually want it to reset on scroll down !!!!!

  useEffect(() => {
    let prevRatio;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
          setVisible(entry.isIntersecting);
        }
        prevRatio = entry.intersectionRatio;
      });
    });
    observer.observe(domRef.current);
  }, []);

  //!!!!!!!!!!!!Still under development!!!!!!!!!!!!!!!! show visible css if prev scroll position is less than current scroll position. But right now FadeInSections uses prop.children and useRef, which doesn't work well with window.scrollY

  // const scrollFunc = () => {
  //   if(prevPos <= visiblePos){
  //    setVisiblePos(window.scrollY);
  //   } else if (prevPos > visiblePos) {
  //     setVisible(true);
  //     console.log("true");
  //   }
  //   setPrevPos(visiblePos);
  // };

  // const debounceScroll = useMemo(() => debounce(scrollFunc, 300), []);

  // useEffect(() => {
  //   window.addEventListener("scroll", debounceScroll);
  // }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSections;
