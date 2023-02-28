import React from "react";
import "../index.css";
import { FaCalendar, FaEnvelope } from "react-icons/fa";

const Main = () => {
  return (
    <>
      {/* Header  */}
      <div id="header" name="header" class="header">
        <div class="header__image">
          <img src="./images/gender_equality.jpg" alt="gender equality" />
          <img
            src="https://i.pinimg.com/originals/a5/80/9e/a5809ef81d24ec1457ecfaa4414194b3.jpg"
            alt="womens empowerment clip art"
          />
        </div>
        <div class="header__content">
          <div class="header__content-main">
            <h2 class="header__content-title">
              <span class="header__content-title-small">
                International Conference on
              </span>
              <br />
              <span class="line1">Gender Equality</span> &
              <span class="line2">Women Empowerment</span>
            </h2>
            <p class="header__content-subtitle">
              Feminism isn't about making women stronger. Women are already
              strong, it's about changing the way the world perceives that
              strength.
            </p>
            <div className="reg-con">
              <a
                class="reg-but"
                target="_blank"
                rel="noreferrer"
                href="https://forms.gle/R5BQ8yxsarR1dyu58"
              >
                Register
              </a>
              <a
                class="reg-but"
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1GIGnKaWOFi6grgo1nHUPf_-Tz4bMLUg5/edit?usp=sharing&ouid=114215246553845804215&rtpof=true&sd=true"
              >
                Paper Template
              </a>
            </div>
          </div>
          <div class="header__content-secondary">
            <p class="header__content-date">
              <FaCalendar className="icon" />
              <span>
                {" "}
                8<sup>th</sup>, 9<sup>th</sup>
                March 2023
              </span>
            </p>
            <p class="header__content-email">
              <FaEnvelope className="icon" />
              <a href="mailto:conference_entc@pvgcoet.ac.in">
                conference_entc@pvgcoet.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Header Ends  */}

      {/* Organised by  */}
      <div class="org">
        <div class="org__container">
          <h3 class="org__title">Organised By</h3>
          <div class="org__image">
            <img src="./images/pvg_logo.jpg" alt="PVG's Logo" />
          </div>
          <h2 class="org__name">
            Pune Vidyarthi Griha's College of Engineering and Technology & G K
            Pate (Wani) Institute of Management <br />
            <span class="org__name-line2">
              Approved by AICTE, DTE (Code: 6274) | Affiliated to SPPU, Pune |
              NAAC Second Cycle 'A' Grade
            </span>
          </h2>
          <p className="org__association-line1">In Association With</p>
          <div class="org__image">
            <img src="./images/sppu_logo.png" alt="SPPU Logo" />
          </div>
          <h3 className="org__association">
            Department of Education & Extension
            <br /> Savitribai Phule Pune University
          </h3>
          {/* <p class="org__name-address">44, Vidya Nagari, Shivdarshan, Parvati, Pune - 411009 Maharashtra - India</p> */}
        </div>
      </div>
      {/* Organised by  */}

      {/* Hounarables  */}
      <div class="hounarables">
        <div class="hounarables__container">
          <div class="hounarables__primary">
            <h3 class="hounarables__primary-title">Chief Patrons</h3>
            <div class="hounarables__primary__members">
              <div class="hounarables__primary__member">
                <h4 class="hounarables__primary__member-name">
                  Hon. Shri. S.P. Redekar
                </h4>
                <p class="hounarables__primary__member-position">
                  Chairman, Pune Vidyarthi Griha (PVG) and
                  <br />
                  Director, PVG's COET & GKP(W)IM, Pune
                </p>
              </div>
              <div class="hounarables__primary__member">
                <h4 class="hounarables__primary__member-name">
                  Hon. Prof. Sanjeev Sonawane
                </h4>
                <p class="hounarables__primary__member-position">
                  Pro-Vice-Chancellor
                  <br />
                  Savitribai Phule Pune University (SPPU)
                </p>
              </div>
              <div class="hounarables__primary__member">
                <h4 class="hounarables__primary__member-name">
                  Hon. Prof. R.G. Kaduskar
                </h4>
                <p class="hounarables__primary__member-position">
                  Director, PVG's COET & GKP(W)IM, Pune
                </p>
              </div>
            </div>
          </div>
          <div class="hounarables__secondary">
            <div class="hounarables__secondary__member">
              <h3 class="hounarables__secondary__member-title">Patron</h3>
              <div>
                <h4 class="hounarables__secondary__member-name">
                  Dr. M.R. Tarambale
                </h4>
                <p class="hounarables__secondary__member-position">
                  In-charge Principal <br />
                  PVG's COET & GKP(W)IM, Pune
                </p>
              </div>
            </div>
            <div class="hounarables__secondary__member">
              <h3 class="hounarables__secondary__member-title">Convener</h3>
              <div>
                <h4 class="hounarables__secondary__member-name">
                  Dr. Y.B. Thakare
                </h4>
                <p class="hounarables__secondary__member-position">
                  Head, Department of E&TC <br />
                  PVG's COET & GKP(W)IM, Pune
                </p>
              </div>
            </div>
            <div class="hounarables__secondary__member">
              <h3 class="hounarables__secondary__member-title">Co-Convener</h3>
              <div>
                <h4 class="hounarables__secondary__member-name">
                  Dr. Geeta Shinde
                </h4>
                <p class="hounarables__secondary__member-position">
                  Associate Professor <br />
                  Department of Education & Extension, SPPU
                </p>
              </div>
            </div>
            <div class="hounarables__secondary__member">
              <h3 class="hounarables__secondary__member-title">Coordinator</h3>
              <div>
                <h4 class="hounarables__secondary__member-name">
                  Prof. P.S. Deshpande
                </h4>
                <p class="hounarables__secondary__member-position">
                  Department of E&TC
                  <br />
                  PVG's COET & GKP(W)IM, Pune
                </p>
              </div>
            </div>
            <div class="hounarables__secondary__member">
              <h3 class="hounarables__secondary__member-title">
                Co-Coordinator
              </h3>
              <div>
                <h4 class="hounarables__secondary__member-name">
                  Dr. S.R. Litke
                </h4>
                <p class="hounarables__secondary__member-position">
                  Department of E&TC
                  <br />
                  PVG's COET & GKP(W)IM, Pune
                </p>
              </div>
            </div>
          </div>
          <div class="hounarables__keynote">
            <h3 class="hounarables__keynote-title">Keynote Speakers</h3>
            <div class="hounarables__keynote__members">
              <div class="hounarables__keynote__member">
                <div class="org__image">
                  <img
                    src="./images/keynote1.png"
                    alt="Hon. Prof. Sanjeev Sonawane"
                  />
                </div>
                <h4 class="hounarables__keynote__member-name">
                  Hon. Prof. Sanjeev Sonawane
                </h4>
                <p class="hounarables__keynote__member-position">
                  Pro-Vice-Chancellor
                  <br />
                  Savitribai Phule Pune University (SPPU)
                </p>
              </div>
              <div class="hounarables__keynote__member">
                <div class="org__image">
                  <img
                    src="./images/keynote5.png"
                    alt="Hon. Prof. Ujwala Chakradeo"
                  />
                </div>
                <h4 class="hounarables__keynote__member-name">
                  Prof. Ujwala Chakradeo
                </h4>
                <p class="hounarables__keynote__member-position">
                  Hon'ble Vice Chancellor
                  <br />
                  SNDT Women's University
                </p>
              </div>
              <div class="hounarables__keynote__member">
                <div class="org__image">
                  <img
                    src="./images/keynote3.png"
                    alt="Dr. Alka Chopra"
                  />
                </div>
                <h4 class="hounarables__keynote__member-name">
                  Dr. Alka Chopra
                </h4>
                <p class="hounarables__keynote__member-position">
                  President at Soul Body Healing Center,
                  <br />
                  Founder Global Women Power
                </p>
              </div>
              <div class="hounarables__keynote__member">
                <div class="org__image">
                  <img
                    src="./images/keynote4.png"
                    alt="Dr. Neeta Inamdar"
                  />
                </div>
                <h4 class="hounarables__keynote__member-name">
                  Dr. Neeta Inamdar
                </h4>
                <p class="hounarables__keynote__member-position">
                  Professor and Head <br />
                  Manipal Academy of Higher Education(MAHE)
                </p>
              </div>
              <div class="hounarables__keynote__member">
                <div class="org__image">
                  <img
                    src="./images/keynote6.png"
                    alt="Dr. Aishwarya Ashish Patil"
                  />
                </div>
                <h4 class="hounarables__keynote__member-name">
                  Dr. Aishwarya Ashish Patil
                </h4>
                <p class="hounarables__keynote__member-position">
                  Co-founder and director
                  <br />
                  Astral Education
                </p>
              </div>
              <div class="hounarables__keynote__member">
                <div class="org__image">
                  <img
                    src="./images/keynote2.png"
                    alt="Priyadarshani Karve"
                  />
                </div>
                <h4 class="hounarables__keynote__member-name">
                  Priyadarshani Karve
                </h4>
                <p class="hounarables__keynote__member-position">
                  Managing director, <br />
                  Samuchit Enviro Tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hounarables Ends */}

      {/* About the Conference  */}
      <div id="about" name="about" class="conf">
        <div class="conf__container-about">
          <h3 class="conf-title">About the Conference</h3>
          <p class="conf-about">
            The International Conference on Gender Equality and Women
            Empowerment (ICGEWE-2023) is organized on 8th & 9th March 2023 to
            celebrate “International Women's Day” by the Department of
            Electronics & Telecommunication Engineering, PVG's College of
            Engineering and Technology and G.K. Pate (Wani) Institute of
            Management, Pune and Dept of Education and Extension SPPU Pune. The
            ICGEWE-2023 aims to open a wide online platform to present and share
            knowledge on best practices, actions, areas of improvement related
            to Gender Equality and Women Empowerment. This is the third
            sucessful consecutive year of ICGEWE to celebrate womanhood & Gender
            equality.
          </p>
        </div>
        <svg
          class="bg-blob1"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#BBDEFB"
            d="M52.5,-53.5C62.2,-42.9,60.2,-21.4,57.3,-2.8C54.5,15.7,50.8,31.5,41.1,40.2C31.5,49,15.7,50.9,3.2,47.7C-9.4,44.5,-18.8,36.4,-28.1,27.6C-37.5,18.8,-46.7,9.4,-46.8,-0.1C-46.8,-9.5,-37.7,-19,-28.3,-29.6C-19,-40.3,-9.5,-52,6,-58C21.4,-63.9,42.9,-64.1,52.5,-53.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      {/* About the Conference Ends */}

      {/* Objectives and Outcomes */}
      <div class="conf__wrapper">
        {/* Objectives */}
        <div class="conf__obj">
          <div class="conf__container">
            <h3 class="conf__obj-title">Objectives</h3>
            <ol class="conf__obj-list">
              <li class="conf__obj-item">
                To inspire the society for Gender Equality by providing an
                interactive platform.
              </li>
              <li class="conf__obj-item">
                To empower women for overall development of the society by
                creating awareness about the different dimensions of womanhood.
              </li>
              <li class="conf__obj-item">
                To broaden social connect with international researchers.
              </li>
            </ol>
          </div>
          {/* <!-- <div class="bg-square"></div> --> */}
          <svg
            class="bg-blob2"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFDDE1"
              d="M46.3,-46.5C50.5,-31.7,37.7,-13,32.1,5.6C26.4,24.1,27.9,42.6,19.7,49.9C11.6,57.3,-6.2,53.6,-26.6,47C-46.9,40.3,-69.8,30.7,-78.5,12.3C-87.2,-6.1,-81.6,-33.4,-66.2,-50.8C-50.7,-68.1,-25.4,-75.5,-2.1,-73.8C21.1,-72.1,42.2,-61.3,46.3,-46.5Z"
              transform="translate(100 100)"
            />
          </svg>
          {/* <!-- <div class="bg-square2"></div> --> */}
          <svg
            class="bg-blob3"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFDDE1"
              d="M49.3,-39.9C62.2,-23.2,69.6,-2.8,63.7,11.2C57.9,25.2,38.7,32.9,20.8,40.3C3,47.8,-13.5,55.1,-29.6,51.3C-45.6,47.5,-61.2,32.5,-62.6,17C-64,1.5,-51.2,-14.6,-38.4,-31.3C-25.6,-48,-12.8,-65.3,2.7,-67.5C18.2,-69.7,36.5,-56.6,49.3,-39.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        {/* Objectives Ends */}
        {/* Outcomes */}
        <div class="conf__out">
          <div class="conf__container">
            <h3 class="conf__out-title">Outcomes</h3>
            <ol class="conf__out-list">
              <li class="conf__out-item">
                Increased awareness about Gender Equality to achieve real impact
                on the quality of life for women, men, families and communities.
              </li>
              <li class="conf__out-item">
                Better understanding of Woman's strengths through interactions
                and greater social connect.
              </li>
              <li class="conf__out-item">
                Improved insights into the multidimensionality of womanhood.
              </li>
            </ol>
          </div>
        </div>
        {/* Outcomes Ends */}
      </div>
      {/* Objectives and Outcomes Ends */}

      {/* Conference Topics */}
      <div id="topics" class="conf__topics">
        <div class="conf__topics-container">
          <h3 class="conf__topics-title">Conference Topics</h3>
          <p class="conf__topics-des">
            Following are the various topics of importance under consideration
            in ICGEWE -2023 but are not limited to these titles. Any suitable
            topic not mentioned but in line with the conference objectives can
            be considered.
          </p>
          <ol class="conf__topics-list">
            <li class="conf__topics-item">
              NextGen Women: Challenges and opportunities
            </li>
            <li class="conf__topics-item">
              Role of women in nation development
            </li>
            <li class="conf__topics-item">
              Women Empowerment: Challenges in rural and urban area
            </li>
            <li class="conf__topics-item">
              Role of women in education and research
            </li>
            <li class="conf__topics-item">Role of women in economic growth</li>
            <li class="conf__topics-item">Women in decision making</li>
            <li class="conf__topics-item">
              Women Entrepreneurship: Challenges and opportunities
            </li>
            <li class="conf__topics-item">Women and cyber security</li>
            <li class="conf__topics-item">Feminism in Global scenario</li>
            <li class="conf__topics-item">Human rights for women</li>
            <li class="conf__topics-item">Women and Health</li>
            <li class="conf__topics-item">Cultural heritage and woman</li>
            <li class="conf__topics-item">Post pandemic women empowerment</li>
            <li class="conf__topics-item">
              Policies for women empowerment in different countries
            </li>
            <li class="conf__topics-item">
              Gender Equality: Social and economical aspects
            </li>
            <li class="conf__topics-item">
              Gender equality and Gender Sensitization
            </li>
            <li class="conf__topics-item">
              Gender equality in political participation and decision-making
            </li>
            <li class="conf__topics-item">
              Corporate leadership for gender equality
            </li>
            <li class="conf__topics-item">
              Gender equality Plans and strategies
            </li>
            <li class="conf__topics-item">
              Success stories of different countries on Women Empowerment and
              gender Equality
            </li>
          </ol>
        </div>
      </div>
      {/* Conference Topics Ends */}

      {/* Important Dates */}
      <div id="timeline" class="dates">
        <div class="dates-container">
          <h3 class="dates__title">Important Dates</h3>
          <section class="timeline-section">
            <div class="timeline-items">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">
                  February 28<sup>th</sup>, 2023 <b>(till 6pm)</b>
                </div>
                <div class="timeline-content">
                  <h3>
                    Full Lenght Paper Submission (in{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://docs.google.com/document/d/1GIGnKaWOFi6grgo1nHUPf_-Tz4bMLUg5/edit?usp=sharing&ouid=114215246553845804215&rtpof=true&sd=true"
                    >
                      conference format
                    </a>
                    )
                  </h3>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">
                  March 2<sup>nd</sup>, 2023 <b>(till 6pm)</b>
                </div>
                <div class="timeline-content">
                  <h3>Notification of Acceptance of the paper</h3>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">
                  March 4<sup>th</sup>, 2023 <b>(till 6pm)</b>
                </div>
                <div class="timeline-content">
                  <h3>Camera ready Power Point Presentation (PPTs)</h3>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">
                  March 4<sup>th</sup>, 2023 <b>(till 6pm)</b>
                </div>
                <div class="timeline-content">
                  <h3>
                    Last date of Registration for both attendees and presenter
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </div>
        <svg
          class="bg-blob4"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#BBDEFB"
            d="M24.4,-46C31.7,-38,37.9,-31.7,38.7,-24.3C39.5,-16.9,35,-8.5,40.2,3C45.4,14.5,60.4,29,63.1,42.5C65.8,55.9,56.2,68.3,43.6,64.4C31.1,60.4,15.5,40.1,0.6,39C-14.3,37.9,-28.5,56,-35.1,56.5C-41.6,57,-40.5,39.9,-42.6,27.5C-44.8,15.2,-50.2,7.6,-47.9,1.3C-45.6,-4.9,-35.6,-9.9,-33.5,-22.2C-31.4,-34.6,-37.1,-54.3,-32.8,-64.1C-28.5,-73.8,-14.3,-73.6,-2.9,-68.6C8.5,-63.7,17,-54,24.4,-46Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          class="bg-blob5"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#BBDEFB"
            d="M35.1,-56.6C45.9,-54.5,55.5,-46,59.2,-35.5C62.9,-25.1,60.8,-12.5,59.7,-0.6C58.7,11.3,58.7,22.6,54.8,32.8C50.9,43,43.1,52.1,33.3,56.4C23.6,60.6,11.8,60,4,53.2C-3.9,46.3,-7.7,33.2,-20.7,30.8C-33.7,28.4,-55.9,36.7,-61,33.4C-66.2,30,-54.3,15,-49.6,2.7C-44.9,-9.6,-47.3,-19.1,-42.3,-22.8C-37.3,-26.4,-24.9,-24,-16.6,-27.6C-8.3,-31.2,-4.2,-40.8,4,-47.7C12.1,-54.6,24.2,-58.7,35.1,-56.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      {/* Important Dates Ends */}
    </>
  );
};

export default Main;
