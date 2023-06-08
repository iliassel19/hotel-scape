import React from "react";
import FooterImg from "../../assets/footer.jpg";
import Logo from "../../assets/Logo-footer.svg";
const Footer = () => {
  return (
    <footer className="col-start-1 col-end-[-1] h-screen relative py-20 text-white">
      <img
        src={FooterImg}
        alt="Scape Hotel King Bedroom"
        className="w-full h-full object-cover absolute top-0 left-0 z-[1]"
      />
      <div className="w-full h-full object-cover absolute top-0 left-0 z-[2] bg-black bg-opacity-60"></div>
      <div className="flex flex-col items-center justify-center relative z-30">
        <a href="#">
          <img src={Logo} alt="Scape Hotel logo" />
        </a>
        <div className="flex flex-col items-center justify-center mt-12 mb-16">
          <p>2230 Madison Street</p>
          <p>Yountville, CA 92129</p>
          <a href="#">(888) 921-3546</a>
          <a href="#">reservations@hotelscape.com</a>
        </div>
        <nav className="w-full py-6 border-y border-white flex items-center justify-center mb-16">
          <ul className="flex items-center justify-between w-2/3">
            <li className="font-Sans-serif text-base">
              <a href="#">Our Story</a>
            </li>
            <li className="font-Sans-serif text-base">
              <a href="#">Packages</a>
            </li>
            <li className="font-Sans-serif text-base">
              <a href="#">Contact</a>
            </li>
            <li className="font-Sans-serif text-base">
              <a href="#">Gallery</a>
            </li>
            <li className="font-Sans-serif text-base">
              <a href="#">News</a>
            </li>
          </ul>
        </nav>
        <p>&copy; Copyright 2022. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
