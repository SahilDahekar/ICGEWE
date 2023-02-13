import React from 'react';
import Navbar from '../components/Navbar';

const Organiser = () => {
  return (
    <>

    <Navbar/>

    {/* About PVG */}
    <div class="aboutOrg">
        <h3 class="aboutOrg-title">About PVG</h3>
        <div class="aboutOrg-wrapper">
            <div class="aboutOrg-img">
                <img src="https://lh5.googleusercontent.com/p/AF1QipMgibdomv9YPvlIKe8V-lxS7jvb92UkSPJswkCx=w1080-k-no" alt="Pune vidyarthi griha sanstha image"/>
            </div>
            <p class="aboutOrg-des">The parent institute Pune Vidyarthi Griha (PVG) is a well-known Charitable Institution
                of Maharashtra, established in 1909, by a group of dedicated and visionary educationists. The primary mission of the
                Institute is to provide progressive and value-added education facilities for the deserving, poor students of
                the society. Today, the institution has grown into a big banyan tree with its branches spread across Pune,
                Mumbai, and Nashik. PVG's various institutions conduct a wide spectrum of education programs from
                Pre-primary to Higher education, in professional fields like Engineering Technology, Management, Computer
                Science, and Commerce & Science College etc. PVG has been the only institute in India, which has striven
                hard for professional education in the Printing field since 1926 and has taken the lead in establishing
                degree and diploma in Printing Technology, approved by the All India Council for Technical Education. PVG
                has a modern Printing Press and Publications division. It has published mainly technical books, which are
                standard & very popular.
            </p>
        </div>
        <svg class="bg-blob1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#BBDEFB" d="M43.9,-30.8C57.2,-18.3,68.6,-0.1,62.7,9.8C56.9,19.7,33.9,21.2,13.8,32.2C-6.3,43.3,-23.5,63.9,-37.2,62.8C-51,61.8,-61.2,39,-61.2,19.5C-61.3,0,-51.1,-16.3,-39.1,-28.5C-27.2,-40.6,-13.6,-48.7,0.8,-49.4C15.3,-50.1,30.6,-43.3,43.9,-30.8Z" transform="translate(100 100)" />
        </svg>
        <svg class="bg-blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#BBDEFB" d="M49.8,-45.9C53.7,-34.8,38.6,-14.7,33.6,7.8C28.6,30.4,33.7,55.4,25.2,64.1C16.7,72.7,-5.4,64.9,-19.2,53.2C-32.9,41.4,-38.3,25.7,-37,13.5C-35.8,1.3,-27.9,-7.4,-20.7,-19.2C-13.4,-31.1,-6.7,-46.2,8.1,-52.7C22.9,-59.2,45.9,-57,49.8,-45.9Z" transform="translate(100 100)" />
        </svg>
    </div>
    {/* About PVG Ends */}

    {/* About PVGCOET and GKP(W)IM */}
    <div class="aboutClg">
        <h3 class="aboutClg-title">About PVGCOET & GKP(W)IM</h3>
        <div class="aboutClg-wrapper">
            <div class="aboutClg-img">
                <img src="https://images.goklassifieds.com/2020/05/PVGs-College-of-Engineering-and-Technology-Pune-Cover.jpg" alt="PVGCOET Pune"/>
            </div>
            <p class="aboutClg-des">Established in 1985, Pune Vidyarthi Griha's College of Engineering and Technology and
                G.K. Pate (Wani) Institute of Management (formerly known as College of Engineering and Technology) is
                approved by AICTE and affiliated to the Savitribai Phule Pune University and accredited 'A' Grade by NAAC in
                2nd cycle. It is one of the reputed engineering college in India. In 2020, the institute has merged with G.
                K. Pate (Wani) Institute of Management (GKP (W) IM) for the management programme. The PVG's COET and GKP(W)
                IM runs undergraduate programmes in Printing Technology, Mechanical Engineering, Electrical Engineering,
                Electronics & Tele-communication Engineering, Computer Engineering, Information Technology, Artificial
                Intelligence and Data-Science, and postgraduate programmes in Electrical Engineering, Printing Technology,
                and Business Administration. The college also runs PhD programmes in Printing Technology, Mechanical
                Engineering and Electrical Engineering.
            </p>
        </div>
    </div>
    {/* About PVGCOET and GKP(W)IM Ends */}

    {/* Vision */}
    <div class="vision">
        <h3 class="vision-title">Vision</h3>
        <p class="vision-des">To achieve excellence in engineering education</p>
    </div>
    {/* Vision Ends */}

    {/* Mission */}
    <div class="mission">
        <h3 class="mission-title">Mission</h3>
        <ol class="mission-list">
            <li class="mission-item">To satisfy all stakeholders</li>
            <li class="mission-item">To develop ethical, highly motivated engineering professionals with good human
                values, requisite skills and competencies</li>
            <li class="mission-item">To adopt innovative teaching mechanisms</li>
            <li class="mission-item">To promote research culture.</li>
            <li class="mission-item">To contribute to country's economic developments.</li>
            <li class="mission-item">To be responsive to changes in technology, socioeconomic and environmental
                conditions.</li>
        </ol>
    </div>
    {/* Mission Ends */}

    </>
  )
}

export default Organiser;