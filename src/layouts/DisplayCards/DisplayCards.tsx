import "./DisplayCards.css";
import faker from "@faker-js/faker";

/* Components and Layouts */
import Card from "../../components/Card";

const DisplayCards: React.FC = () => {
    const skillsAvl: Array<string> = ["C++", "JavaScript", "HTML5", "Python", "React", "Git"];
    interface Data {
        image: string;
        name: string;
        jobTitle: string;
        jobDescription: string;
        skills: Array<string>;
    }
    const data: Array<Data> = [];
    for (let i: number = 0; i < 50; i++) {
        const image: string = faker.image.avatar();
        const name: string = faker.name.findName();
        const jobTitle: string = faker.name.jobTitle();
        const jobDescription: string = faker.lorem.lines(3);
        const skills: Array<string> = faker.random.arrayElements(skillsAvl);
        const obj = { image, name, jobTitle, jobDescription, skills };
        data.push(obj);
    }
    return (
        <>
            <div className="cards">
                {data.map((oneData) => (
                    <Card
                        image={oneData.image}
                        name={faker.name.findName()}
                        jobTitle={faker.name.jobTitle()}
                        jobDescriptor={faker.lorem.lines(3)}
                        skills={faker.random.arrayElements(skillsAvl)}
                    />
                ))}
            </div>
        </>
    );
};

export default DisplayCards;
