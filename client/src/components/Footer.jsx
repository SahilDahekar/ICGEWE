import React from 'react';
import { HiOutlineExternalLink, HiOutlineMailOpen, HiOutlineGlobeAlt } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container">
            <h5 className="footer__container-title">ICGEWE</h5>
            <div className="footer__container-links">
                <a className="register-link" target="_blank" rel='noopener noreferrer' href="https://www.pvgcoet.ac.in/"><HiOutlineGlobeAlt className="icon"/><p>www.pvgcoet.ac.in</p></a>
                <a className="register-link" href="mailto:conference_entc@pvgcoet.ac.in"><HiOutlineMailOpen className="icon"/><p>conference_entc@pvgcoet.ac.in</p></a>
                <a className="register-link" target="_blank" href="https://forms.gle/R5BQ8yxsarR1dyu58"><HiOutlineExternalLink className="icon"/><p>register here </p></a>
            </div>
        </div>
        <div className="footer__copyright">
            <p className="footer__copyright">Copyright ©2023 <br/> All Rights Reserved Department of E&TC PVGCOET</p>
        </div>
    </footer>
  )
}

export default Footer;