import './MedSos.css';
import { BsInstagram } from "react-icons/bs";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";

export default function MedSos() {
    const Line = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            width: 150
        }}
        />
);
    return (
        <div className="medsos" >
            <div className="line"><Line color='#EFE1D1' /></div>
            <div className="instagram"><a href="https://www.instagram.com/bulanndhln/"><BsInstagram size={23} color=' #EFE1D1'/></a></div>
            <div className="linkedin"><a href="https://www.linkedin.com/in/bulan-fitri-dahlan-3b6b4b1b0/"><SlSocialLinkedin size={23} color=' #EFE1D1' /></a></div>
            <div className="github"><a href="https://github.com/bulanndhln"><VscGithubAlt size={23} color=' #EFE1D1' /></a></div>
            <div className="line"><Line color='#EFE1D1'/></div>
        </div>
    );
}   