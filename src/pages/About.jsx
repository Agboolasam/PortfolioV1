import Card from "./resumeCard"
import { Prism as Highlighter } from "react-syntax-highlighter"
import useTheme from "../contexts/ThemeContext"
import { ghcolors, materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useEffect, useState } from "react"


const About = () => {
    const { isDarkMode } = useTheme();
    const [theme, setTheme] = useState()
    useEffect(() => {
        if (isDarkMode) {
            setTheme(() => materialDark)
        } else {
            setTheme(() => ghcolors)
        }
    }, [isDarkMode])


    const codeString = `const aboutAgboola = () => {
    const name = "Agboola Samson Ifedolapo";
    const role = "Frontend Developer & Cloud DevOps Engineer";
    const passion = ["React", "Node.js", "Azure", "Docker"];
    const currentFocus = "Building scalable web applications";
    
    return {
        name,
        role,
        passion,
        currentFocus
    };
};`

    const education = [{
        school: "Federal University of Agriculture, Abeokuta",
        year: "2018 - 2024",
        grade: "Second Class Upper",
        course: "Mechanical Engineering",
        cert: "Bachelors of Engineering"
    },
    {
        school: "Oxford Model COllege",
        year: "2015 - 2018",
        cert: "SSCE",
        course: "Senior Secondary Education Certificate",
    },
    ];

    const experience = [
        {
            title: "Software Engineer(Development and DevOps)",
            company: "DSI Fitness",
            duration: "2024 - Present",
            details: "Single-handedly built and deployed the website to Azure SWA using GitHub actions. Incorporated Google Appscript with Frontend for email notification, and Slack notification. Used TailwindCSS for styling. Built GitHub Actions workflows for seamless deployment of containerized applications to Azure Web Apps.",
            tools: "ReactJS, Tailwind, Google AppScript",
        },
        {
            title: "Software Engineer(Development and DevOps)",
            company: "DSI Fitness",
            duration: "2024 - Present",
            details: "Single-handedly built and deployed the website to Azure SWA using GitHub actions. Incorporated Google Appscript with Frontend for email notification, and Slack notification. Used TailwindCSS for styling. Built GitHub Actions workflows for seamless deployment of containerized applications to Azure Web Apps.",
            tools: "ReactJS, Tailwind, Google AppScript",
        },
    ]

    return (
        <div>
            <div className="about-container">
                <h1>Meet Me</h1>
                <div id="about_code"
                >
                    <Highlighter
                        key={isDarkMode ? 'dark' : 'light'}
                        language="javascript"
                        style={theme}
                        showLineNumbers={true}
                        wrapLines={true}
                        wrapLongLines={true}
                        customStyle={{
                            fontSize: '0.875rem',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word'
                        }}
                    >

                        {codeString}
                    </Highlighter>

                    <p>
                    </p>
                </div>
                <h1>Education</h1>
                {
                    education.map((item, index) => (
                        <Card key={index} items={item} type={"education"} />
                    ))
                }
                <h1>Work Experience</h1>
                {
                    experience.map((item, index) => (
                        <Card key={index} items={item} type={"experience"} />
                    ))
                }
            </div>

        </div>
    )
}

export default About
