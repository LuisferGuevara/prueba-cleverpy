// import { FC, useEffect, useState } from "react";

// const ScrollButton: FC = () => {
//   const [showButton, setShowButton] = useState<boolean>(false);
//   const [scrollPosition, setScrollPosition] = useState<number>(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentPosition = window.pageYOffset;

//       if (currentPosition > 400) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }

//       setScrollPosition(currentPosition);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
//   return (
//     <button className={`scroll-button ${showButton ? "show" : ""}`} onClick={scrollToTop}>
//       {scrollPosition > 400 ? (
//         <i className="fas fa-chevron-up"></i>
//       ) : (
//         <i className="fas fa-chevron-down"></i>
//       )}
//     </button>
//   );
// };
// export default ScrollButton;
import { FC, useState } from "react";

const ScrollButton: FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollTo = (direction: "up" | "down") => {
    const step = direction === "up" ? -200 : 200;
    setIsScrolling(true);
    const scrollInterval = setInterval(() => {
      const newY = window.scrollY + step;
      window.scrollTo(0, newY);
      if (direction === "up" && newY <= 0) {
        clearInterval(scrollInterval);
        setIsScrolling(false);
      } else if (direction === "down" && newY >= document.body.scrollHeight - window.innerHeight) {
        clearInterval(scrollInterval);
        setIsScrolling(false);
      }
    }, 25);
  };

  return (
    <div >
      {isScrolling ? (
        <button className="scroll-button" onClick={() => setIsScrolling(false)}>
          <i className="fas fa-chevron-up"></i>
        </button>
      ) : (
        <button className="scroll-button" onClick={() => scrollTo("down")}>
          <i className="fas fa-chevron-down"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
