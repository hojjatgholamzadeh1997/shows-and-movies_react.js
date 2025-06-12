import "./ScrollToTopButton.css";
import { memo, useState } from "react";
import Button from "react-bootstrap/Button";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";
import { scrollToTop } from "../../utils/utils";

function ScrollToTop() {
  const [shouldScrollButtonShow, setShouldScrollButtonShow] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY < 250 ? setShouldScrollButtonShow(false) : setShouldScrollButtonShow(true);
  });

  return (
    <>
      {shouldScrollButtonShow && (
        <Button variant="light" className="scroll-to-top" onClick={scrollToTop}>
          <LiaLongArrowAltUpSolid size={25} />
        </Button>
      )}
    </>
  );
}

export default memo(ScrollToTop);
