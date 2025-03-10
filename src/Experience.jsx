
import "./Experience.css";

export default function Experience() {
    const experiences = [

        {
        date: "May - June 2023",
        title: "TADA (Toddlers Autism Detection Application) Project - Bangkit Academy",
        details: [
            "Design Database for application.",
            "Responsible for building Restful API for mobile application needs using JavaScript programming language for common features, Express.js for framework, and JWT (Jsonwebtoken) for authentication.",
            "Prepare the needs related to Google Cloud Service (Cloud Storage for files, Cloud SQL for database, Cloud App Angine for deployment, and cloud logging for to monitor the condition and performance of your application.).",
            "Designing Cloud Architecture for application deployment",
        ],
        },
        {
        date: "July - August 2022",
        title: "Web Developer Intern at PT. Telkom Akses Palembang",
        details: [
            "Designing a telegram reminder BOT application that is linked to a website for the finance and commerce section at PT. Telkom Akses Palembang.",
            "Developing and implementing system frontend using Bootstrap and backend using Codeigniter",
        ],
        },
    ];

    return (
        <div className="experience-container">
            <div className="title"><h2 data-aos="fade-up" >Experience</h2></div>
            <div className="timeline" data-aos="fade-up">
                {experiences.map((exp, index) => (
                <div className="timeline-item" key={index} >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <span className="timeline-date">{exp.date}</span>
                        <h3 className="timeline-title">{exp.title}</h3>
                        <ul>
                        {exp.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
