import './Tools.css';
import bootstrap from './assets/bootstrap.png';
import express from './assets/expressjs.png';
import reacticon from './assets/react.png';
import node from './assets/nodejs.png';
import javascript from './assets/javascript.png';
import vite from './assets/vite.png';
import codeigniter from './assets/codeigniter.png';
import python from './assets/python.png';
import php from './assets/php.png';



export default function Tools() {
    const tools = [
        {
            link: "#",
            icon: bootstrap,
            name : "bootstrap",
        },
        {
            link: "#",
            icon: codeigniter,
            name : "codeigniter",
        },
        {
            link: "#",
            icon: express,
            name : "expressJs",
        },
        {
            link: "#",
            icon: javascript,
            name : "javascript",
        },
        {
            link: "#",
            icon: node,
            name : "nodeJs",
        },
        {
            link: "#",
            icon: php,
            name : "php",
        },
        {
            link: "#",
            icon: python,
            name : "python",
        },
        {
            link: "#",
            icon: reacticon,
            name : "react",
        },
        {
            link: "#",
            icon: vite,
            name : "vite",
        },
    ]
    return (
        <>
            <div className="title"><h2 data-aos="fade-up">Tools</h2></div>
            <section id="MyTools">
                <div className="container" >
                    {tools.map((tool, index) => (
                        <div className="tool" key={index} data-aos="fade-up">
                            <a href={tool.link}><img src={tool.icon} alt={tool.name} /></a>
                        </div>
                    ))}
                </div>

            </section>
            

        </>
    );

}