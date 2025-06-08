import "./ScrollToTop.css";
import { memo, useRef } from "react";
import Button from "react-bootstrap/Button";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";

function ScrollToTop() {
  const myRef = useRef();

  const ScrollToTopHandler = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  window.addEventListener("scroll", () => {
    window.scrollY < 250 && myRef.current.classList.remove("show");
    window.scrollY >= 250 && myRef.current.classList.add("show");
  });

  return (
    <>
      <Button ref={myRef} variant="light" className="scroll-to-top" onClick={ScrollToTopHandler}>
        <LiaLongArrowAltUpSolid size={25} />
      </Button>
    </>
  );
}

export default memo(ScrollToTop);
