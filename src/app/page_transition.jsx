import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export const TypingEffect = ({
  strings,
  typeSpeed = 50,
  backSpeed = 50,
  loop = true,
  backDelay = 2000,
  startDelay = 1000,
}) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      loop: loop,
      backDelay: backDelay,
      startDelay: startDelay,
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop, backDelay, startDelay]);

  return <span ref={el}></span>;
};
