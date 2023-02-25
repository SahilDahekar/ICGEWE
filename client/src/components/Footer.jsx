import React from 'react';
import { HiOutlineExternalLink, HiOutlineMailOpen, HiOutlineGlobeAlt , HiOutlineLocationMarker , HiOutlinePhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer id="#footer" name="#footer" className="footer">
        <div className="footer__container">
            <h5 className="footer__container-title">ICGEWE</h5>
            <div className="footer__container-links">
                <div className="quick-links">
                  <h6 className="quick-links-title">Quick Links</h6>
                  <div className="quick-links-content">
                    <a className="register-link" target="_blank" href="https://forms.gle/R5BQ8yxsarR1dyu58"><HiOutlineExternalLink className="icon"/><p>register here </p></a>
                    <a className="register-link" href="mailto:conference_entc@pvgcoet.ac.in"><HiOutlineMailOpen className="icon"/><p>conference_entc@pvgcoet.ac.in</p></a>
                  </div>
                </div>
                <div id="contactUs" name="contactUs" className="contactUs">
                  <h6 className="contactUs-title">Contact Us</h6>
                  <div className="contactUs-content">
                    <a className="register-link" target="_blank" rel='noopener noreferrer' href="https://www.pvgcoet.ac.in/"><HiOutlineGlobeAlt className="icon"/><p>www.pvgcoet.ac.in</p></a>
                    <a className="register-link" rel='noopener noreferrer' href="tel:+9102024228258"><HiOutlinePhone className="icon"/><p>+91 020 24228258 / 65 / 79</p></a>
                    <a className="register-link address" target="_blank" href="https://goo.gl/maps/CUstR9sPHEUHRjD68"><HiOutlineLocationMarker className="icon"/><p>44, Vidya Nagari, Shivdarshan, Parvati,<br/> Pune - 411009 Maharashtra - India</p></a>
                  </div>
                </div>
            </div>
        </div>
        <div className="footer__copyright">
            <p className="footer__copyright">Copyright ©2023 <br/> All Rights Reserved Department of E&TC PVG's COET & GKP(W)IM</p>
        </div>
    </footer>
  )
}

export default Footer;