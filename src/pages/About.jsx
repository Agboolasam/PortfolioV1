import EducationCard from "./education/EducationCard"
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


    return (
        <div>
            <div className="about-container">
                <h1>Meet Me</h1>
                <div id="about_code"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                >
                    <Highlighter
                        key={isDarkMode ? 'dark' : 'light'}
                        language="javascript"
                        style={theme}
                        showLineNumbers={false}
                        customStyle={{
                            width: '80%',
                            fontSize: '0.875rem',
                            overflow: 'auto'

                        }}
                    >

                        {codeString}
                    </Highlighter>

                    <p>
                    </p>
                </div>
            </div>
            <EducationCard />
        </div>
    )
}

export default About
