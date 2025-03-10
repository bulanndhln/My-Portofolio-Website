import './Navbar.css';
export default function Navbar() { 
    return (
        <nav >
            <div className="navbar">
                <a href="#about"><h2>bulann</h2></a>
                <div className="navRight">
                    <a href="#tools">Tools</a>
                    <a href="#experience">Experience</a>
                    <a href="#portofolio">Portofolio</a>
                    <a href="#about">About</a>                    
                </div>

            </div>
        </nav>
    );
}
