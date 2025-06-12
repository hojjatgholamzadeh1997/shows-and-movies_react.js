import "./Footer.css";
import { memo } from "react";

function Footer() {
  return (
    <>
      <div className="border-top py-5 text-center px-5" style={{fontSize: "13px"}}>
        © 2025 <a href="https://github.com/hojjatgholamzadeh1997" target="_blank" rel="noopener noreferrer" className="footer-link">Hojjat Gholamzadeh</a>. All rights reserved.
      </div>
    </>
  );
}

export default memo(Footer);
