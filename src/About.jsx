import './About.css'
import './MyButton.jsx'
import MyButton from './MyButton.jsx'; 
import myFoto from './assets/me.jpg'
import MedSos from './MedSos.jsx';
import { VscFile } from "react-icons/vsc";

export default function About() { 
    return (
        <>
            <div className="wrapper">
                <section id="about">
                    <div className="container">
                        <div className="aboutMe">
                            <span>Hello, my name is</span>
                            <h1>Bulan Fitri Dahlan</h1>
                            <h3>Frontend Developer</h3>
                            <p>A Bachelor of Informatics Engineering graduate with a strong interest in web development,
                            particularly frontend development. Possesses analytical and creative thinking skills and enjoys learning new things.
                            Focused on creating engaging digital experiences and constantly striving to optimize work efficiency.</p>
                            <div className="cv"> <span><MyButton link="https://drive.google.com/file/d/1GNk0RVeUqnGEevRd-dGj-hGKl4ezIemB/view?usp=sharing"> cv <VscFile size={15} style={{ paddingTop:"8px" }} /></MyButton></span></div>
                        </div>
                    </div>
                </section>
                <aside>
                    <div className="foto">
                        <img src={myFoto} alt="bulann" />
                    </div>
                </aside>
            </div>
            <MedSos/>
        </>
    )
}
