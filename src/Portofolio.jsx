import './Portofolio.css';
import invitation from './assets/invitation.png';
import telkomAkses from './assets/telkomAkses.png';
import bangkitCapstone from './assets/bangkit-capstone.png';
import { VscLinkExternal } from "react-icons/vsc";
import { VscGithubAlt } from "react-icons/vsc";

export default function Portofolio() {
    return (
        <>
            <div className="title"><h2 data-aos="fade-up">Portofolio</h2></div>
            <section id='MyPortofolio'>
                <div className="container">
                    <div className="porto1">
                        <a href="https://luxury-cascaron-ffb3ce.netlify.app"><img src={invitation} alt="invitation" data-aos="fade-up"/></a>
                        <div className="desc">
                            <a href="https://luxury-cascaron-ffb3ce.netlify.app" ><h3 data-aos="fade-up">Lann-inv</h3></a>
                            <p data-aos="fade-up">Portfolio website for digital wedding invitation business.
                                Create an elegant and user-friendly web portfolio to highlight and showcase the digital wedding invitation services offered by Lann-inv.
                            </p>
                            <div className="portoLink" data-aos="fade-up">
                                <div className="linkExternal"><a href="https://luxury-cascaron-ffb3ce.netlify.app"><VscLinkExternal size={23} color=' #EFE1D1'/></a></div>
                                <div className="github"><a href="https://github.com/bulanndhln/wedding-project"><VscGithubAlt size={23} color=' #EFE1D1' /></a></div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="porto2">
                        <a href="#about"><img src={telkomAkses} alt="telkomAkses" data-aos="fade-up"/></a>
                        <div className="desc">
                            <a href="#about"><h3 data-aos="fade-up">Commerce PT.Telkom Akses Palembang</h3></a>
                            <p data-aos="fade-up">Internal management system. Design and implement a strong internal system to manage and
                                monitor daily reports in the shared service commerce section of PT. Telkom Access Palembang.</p>
                            <div className="portoLink" data-aos="fade-up">
                                <div className="linkExternal"><a href="#about"><VscLinkExternal size={23} color=' #EFE1D1'/></a></div>
                                <div className="github"><a href="https://github.com/bulanndhln/ProjectKP"><VscGithubAlt size={23} color=' #EFE1D1' /></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="porto3">
                        <a href="#"><img src={bangkitCapstone} alt="bangkit capstone" data-aos="fade-up" /></a>
                        <div className="desc">
                            <a href="#"><h3 data-aos="fade-up">Capstone Project at Bangkit Academy 2023</h3></a>
                            <p data-aos="fade-up">The Toddler Autism Detection application is a system that detects possible symptoms of autism in children under five years old through a questionnaire. The responses are processed using an AI/ML model to provide a quick and accurate initial analysis.</p>
                            <div className="portoLink" data-aos="fade-up">
                                <div className="linkExternal"><a href="https://github.com/AutismDetection-C23-PR518/backend/tree/backend-api"><VscLinkExternal size={23} color=' #EFE1D1'/></a></div>
                                <div className="github"><a href="https://github.com/AutismDetection-C23-PR518/backend/tree/backend-api"><VscGithubAlt size={23} color=' #EFE1D1' /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    );
}

