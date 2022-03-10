import "./Card.css";
import { SiCplusplus, SiJavascript, SiHtml5, SiPython, SiReact, SiGit } from "react-icons/si";

const Card: React.FC<{
    image: string;
    name: string;
    jobTitle: string;
    jobDescriptor: string;
    skills: Array<string>;
}> = ({ image, name, jobTitle, jobDescriptor, skills }) => {
    return (
        <>
            <div className="card">
                <span className="user-personal-details">
                    <span className="user-image">
                        <img src={image} alt={name} />
                    </span>
                    <span className="user-name">{name}</span>
                </span>
                <span className="user-job">
                    <span className="user-job-details">
                        <span className="user-job-title">{jobTitle}</span>
                        <span className="user-job-description">{jobDescriptor}</span>
                    </span>
                    <span className="user-job-skills">
                        {skills.map((skill: string) => {
                            switch (skill) {
                                case "C++":
                                    return <SiCplusplus fontSize={20} />;
                                case "JavaScript":
                                    return <SiJavascript fontSize={20} />;
                                case "HTML5":
                                    return <SiHtml5 fontSize={20} />;
                                case "Python":
                                    return <SiPython fontSize={20} />;
                                case "React":
                                    return <SiReact fontSize={20} />;
                                case "Git":
                                    return <SiGit fontSize={20} />;
                                default:
                                    return null;
                            }
                        })}
                    </span>
                </span>
            </div>
        </>
    );
};

export default Card;
