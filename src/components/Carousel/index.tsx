import React, { MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import usePreventScroll from "../../hooks/usePreventScrollY";
import "./index.css";
import tween from "./tween";
import Next from "../../assets/flat-color-icons_next.svg";
import Previous from "../../assets/flat-color-icons_previous.svg";

export interface ClickedItem {
  index: number;
}

export interface ICarouselProps {
  width?: number | string;
  height?: number | string;
  pauseDuration?: number;
  slideDuration?: number;
  direction?: 1 | -1;
  pauseOnHover?: boolean;
  autoPlay?: boolean;
  tweenAnime?:
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "bounce"
    | Function;
  navButton?: boolean;
  navType?: "admin";
  navButtonOrientation?: "horizontal" | "vertical";
  dots?: boolean;
  dotsColor?: string;
  dotsActivedColor?: string;
  dotsLocation?: "top" | "bottom" | "left" | "right";
  draggable?: boolean;
  dragThreshold?: number;
  orientation?: "horizontal" | "vertical";
  onItemClick?: (item: ClickedItem) => void;
  onChange?: (index: number) => void;
  children: Array<React.ReactNode>;
}

const Carousel: React.FC<ICarouselProps> = (props) => {
  const {
    width,
    height,
    pauseDuration = 2000,
    slideDuration = 1000,
    direction = 1,
    pauseOnHover = true,
    autoPlay = true,
    tweenAnime = "ease",
    navButton = false,
    navType,
    navButtonOrientation = "horizontal",
    dots = true,
    dotsColor = "#ffffff",
    dotsActivedColor = "#1677ff",
    dotsLocation = "bottom",
    draggable = true,
    dragThreshold = 150,
    orientation = "horizontal",
    onItemClick,
    onChange,
    children,
  } = props;
  const [current, setCurrent] = useState(direction === 1 ? 1 : children.length);

  const [touched, setTouched] = useState(false);
  const absPerWidthRef = useRef(0);

  const pauseRef = useRef(false);
  const leftRef = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slidingRef = useRef(false);
  const rafRef = useRef(-1);
  const slidePropRef = useRef<"left" | "top">("left");
  const dataRef = useRef([
    children[children.length - 1],
    ...children,
    children[0],
  ]);
  const timer = useRef<any>(-1);
  const mouseDownClientXRef = useRef(-1);

  const mouseMoveClientXRef = useRef(0);
  const preventClick = useRef(false);
  const tweenFn = useMemo(() => {
    if (typeof tweenAnime === "function") {
      return tweenAnime;
    } else if (typeof tween[tweenAnime] === "function") {
      return tween[tweenAnime];
    } else {
      return tween.ease;
    }
  }, [tweenAnime]);

  const init = () => {
    if (direction === 1) {
      leftRef.current = 100;
    } else {
      leftRef.current = (dataRef.current.length - 2) * 100;
    }

    slidePropRef.current = orientation === "vertical" ? "top" : "left";

    sliderRef.current!.style[slidePropRef.current] = `${-leftRef.current}%`;

    let sliderRect = sliderRef.current!.getBoundingClientRect();
    if (orientation === "vertical") {
      absPerWidthRef.current = sliderRect.height / dataRef.current.length;
    } else {
      absPerWidthRef.current = sliderRect.width / dataRef.current.length;
    }
  };

  useEffect(init, []);
  usePreventScroll(touched);
  useEffect(() => {
    go(current);
    return () => clearTimeout(timer.current);
  }, [current]);

  const go = (index: number) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    if (timer.current) {
      clearTimeout(timer.current);
    }
    const startTime = Date.now();
    //begin value
    const b = leftRef.current;
    //change value
    const c = index * 100 - leftRef.current;
    if (c === 0) {
      calcNext();
      return;
    }
    slidingRef.current = true;
    const anim = () => {
      const currTime = Math.min(slideDuration, Date.now() - startTime);
      leftRef.current = tweenFn(currTime, b, c, slideDuration);
      if (leftRef.current !== b + c) {
        sliderRef.current!.style[slidePropRef.current] = `${-leftRef.current}%`;
        rafRef.current = requestAnimationFrame(anim);
      } else {
        slidingRef.current = false;
        // animation end, start next timer
        calcNext();
      }
    };
    anim();
  };

  const calcNext = () => {
    if (leftRef.current >= (dataRef.current.length - 1) * 100) {
      leftRef.current = 100;
      sliderRef.current!.style[slidePropRef.current] = `${-leftRef.current}%`;
      updateCurrent(1);
    } else if (leftRef.current <= 0) {
      leftRef.current = (dataRef.current!.length - 2) * 100;
      sliderRef.current!.style[slidePropRef.current] = `${-leftRef.current}%`;
      updateCurrent(dataRef.current!.length - 2);
    } else {
      // calculate autoplay and pause
      if (autoPlay) {
        if (!pauseOnHover || (pauseOnHover && !pauseRef.current)) {
          updateCurrentDelay(Math.floor(leftRef.current / 100) + direction);
        }
      }
    }
  };

  const updateCurrent = (next: number) => {
    setCurrent(next);
  };

  const updateCurrentDelay = (next: number) => {
    timer.current = setTimeout(() => setCurrent(next), pauseDuration);
  };

  const pauseTimer = () => {
    if (!pauseOnHover) return;
    pauseRef.current = true;
    clearTimeout(timer.current);
    timer.current = -1;
  };

  const resumeTimer = () => {
    if (!pauseOnHover) return;
    pauseRef.current = false;
    if (!slidingRef.current) {
      calcNext();
    }
  };

  const goPrev = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (slidingRef.current) return;
    setCurrent(current - 1);
  };

  const goNext = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (slidingRef.current) return;
    setCurrent(current + 1);
  };

  const isDotActive = (dotIndex: number): boolean => {
    if (current === dotIndex + 1) {
      return true;
    }
    if (current <= 0 && dotIndex == dataRef.current.length - 3) {
      return true;
    }
    if (current >= dataRef.current.length - 1 && dotIndex === 0) {
      return true;
    }
    return false;
  };

  const handleDotClick = (dotIndex: number) => {
    setCurrent(dotIndex + 1);
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (!draggable) return;
    if (slidingRef.current) return;
    if (timer.current) clearTimeout(timer.current);
    e.preventDefault();
    e.stopPropagation();
    mouseDownClientXRef.current =
      orientation === "vertical" ? e.clientY : e.clientX;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!draggable) return;
    if (mouseDownClientXRef.current === -1) return;
    preventClick.current = true;
    mouseMoveClientXRef.current =
      orientation === "vertical" ? e.clientY : e.clientX;
    const offset =
      ((mouseMoveClientXRef.current - mouseDownClientXRef.current) /
        absPerWidthRef.current) *
      100;

    sliderRef.current!.style[slidePropRef.current] = `${-(
      leftRef.current - offset
    )}%`;
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (!draggable) return;
    if (mouseMoveClientXRef.current === 0) {
      mouseDownClientXRef.current = -1;
      //if autoplay==true && pauseOnHover == false && mouseDown && noMove , trigger the timer
      calcNext();
      return;
    }
    handleSlideEnd();
  };

  const handleMouseLeave = (e: MouseEvent) => {
    if (mouseMoveClientXRef.current === 0) {
      mouseDownClientXRef.current = -1;
      resumeTimer();
      return;
    }
    pauseRef.current = false;
    handleSlideEnd();
  };

  const handleSlideEnd = () => {
    const absOffset = mouseMoveClientXRef.current - mouseDownClientXRef.current;

    const offset = (absOffset / absPerWidthRef.current) * 100;
    leftRef.current = leftRef.current - offset;
    if (Math.abs(absOffset) >= dragThreshold) {
      setCurrent(current - Math.abs(offset) / offset);
      if (onChange) {
        onChange(current - Math.abs(offset) / offset);
      }
    } else {
      go(current);
      if (onChange) {
        onChange(current);
      }
    }
    setTouched(false);
    mouseDownClientXRef.current = -1;
    mouseMoveClientXRef.current = 0;
  };

  const handleItemClick = (index: number) => {
    if (preventClick.current) {
      preventClick.current = false;
      return;
    }
    if (typeof onItemClick === "function") {
      let i = 0;
      if (index === 0) {
        i = dataRef.current.length - 2;
      } else if (index === dataRef.current.length - 1) {
        i = 0;
      } else {
        i = index - 1;
      }
      onItemClick({ index: i });
    }
  };

  const calcSliderStyle = () => {
    if (orientation === "vertical") {
      return {
        width: "100%",
        height: `${dataRef.current.length * 100}%`,
      } as React.CSSProperties;
    }
    return {
      width: `${dataRef.current.length * 100}%`,
      height: "100%",
    } as React.CSSProperties;
  };

  const handleTouchStart = (e: any) => {
    if (!draggable) return;
    if (slidingRef.current) return;
    if (timer.current) clearTimeout(timer.current);
    //setTouched(true);
    const touch = e.touches[0];
    mouseDownClientXRef.current =
      orientation === "vertical" ? touch.clientY : touch.clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!draggable) return;
    if (mouseDownClientXRef.current === -1) return;
    preventClick.current = true;

    const touch = e.touches[0];
    mouseMoveClientXRef.current =
      orientation === "vertical" ? touch.clientY : touch.clientX;

    const offset =
      ((mouseMoveClientXRef.current - mouseDownClientXRef.current) /
        absPerWidthRef.current) *
      100;
    //console.log(Math.abs(offset));

    // if (Math.abs(offset) > 5) {
    //   e.preventDefault();
    // }

    sliderRef.current!.style[slidePropRef.current] = `${-(
      leftRef.current - offset
    )}%`;
  };

  const handleTouchEnd = (e: any) => {
    if (!draggable) return;
    if (mouseMoveClientXRef.current === 0) {
      mouseDownClientXRef.current = -1;
      // If autoplay == true && pauseOnHover == false && mouseDown && noMove, trigger the timer
      calcNext();

      return;
    }

    handleSlideEnd();
  };

  return (
    <div
      className="carousel"
      style={{ width, height, position: "relative" }}
      onMouseEnter={pauseTimer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`slider ${orientation}`}
        ref={sliderRef}
        style={calcSliderStyle()}
      >
        {dataRef.current.map((child, index) => (
          <div
            key={index}
            className="slice"
            onClick={() => handleItemClick(index)}
          >
            {child}
          </div>
        ))}
      </div>
      {navButton && navType === "admin" && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            justifyContent: "space-between",
            bottom: "50%",
            display: "flex",
          }}
        >
          <div
            style={{ padding: "10px" }}
            onClick={goPrev}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseMove={(e) => e.stopPropagation()}
          >
            <img src={Next} alt="" />
          </div>
          <div
            style={{ padding: "10px" }}
            onClick={goNext}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseMove={(e) => e.stopPropagation()}
          >
            <img src={Previous} alt="" />
          </div>
        </div>
      )}
      {navButton && navType !== "admin" && (
        <>
          <div
            className={`nav-btn ${navButtonOrientation} ${
              navButtonOrientation === "horizontal" ? "left" : "top"
            }`}
            onClick={goPrev}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseMove={(e) => e.stopPropagation()}
          ></div>
          <div
            className={`nav-btn ${navButtonOrientation} ${
              navButtonOrientation === "horizontal" ? "right" : "bottom"
            }`}
            onClick={goNext}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseMove={(e) => e.stopPropagation()}
          ></div>
        </>
      )}
      {dots && (
        <div className={`dots ${dotsLocation}`}>
          {children.map((_, index) => (
            <div
              key={index}
              className={isDotActive(index) ? "active" : ""}
              onClick={() => handleDotClick(index)}
              style={{
                //transform: "translateY(10px)",
                backgroundColor: isDotActive(index)
                  ? dotsActivedColor
                  : dotsColor,
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
