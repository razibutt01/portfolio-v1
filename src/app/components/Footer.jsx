import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <Image src={"/images/logo.png"} alt="logo" width={100} height={100} />
        <p className="text-slate-600">&copy;All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
