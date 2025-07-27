import TypingEffect from '../components/TypingEffect';
import img from '../assets/img.png';
import EntryAnimate from '../components/EntryAnimate';
import Tools from '../components/Tools';
import Divider from '../components/Divider';

export default function Home() {
    const devtools = [
        { tool: "HTML", icon: "path/to/html-icon.png", description: "Markup language for creating web pages." },
        { tool: "CSS", icon: "path/to/css-icon.png", description: "Style sheet language for styling web pages." },
        { tool: "Tailwind CSS", icon: "path/to/tailwind-icon.png", description: "Utility-first CSS framework for rapid UI development." },

        { tool: "JavaScript", icon: "path/to/javascript-icon.png", description: "Programming language for web development." },
        { tool: "React", icon: "path/to/react-icon.png", description: "JavaScript library for building user interfaces." },
        { tool: "Node.js", icon: "path/to/nodejs-icon.png", description: "JavaScript runtime for server-side development." },
        { tool: "Express", icon: "path/to/express-icon.png", description: "Web framework for Node.js." },
        { tool: "MongoDB", icon: "path/to/mongodb-icon.png", description: "NoSQL database for storing data." },
        { tool: "vite", icon: "path/to/vite-icon.png", description: "Build tool and development server for modern web projects." },
        { tool: "Git", icon: "path/to/git-icon.png", description: "Version control system for tracking changes." },
    ];

    const devopstools = [
        { tool: "Docker", icon: "path/to/docker-icon.png", description: "Containerization platform for deploying applications." },
        { tool: "Kubernetes", icon: "path/to/kubernetes-icon.png", description: "Container orchestration platform for managing containerized applications." },
        { tool: "Jenkins", icon: "path/to/cicd-icon.png", description: "Continuous Integration and Continuous Deployment for automating software delivery." },
        {
            tool: "AWS",
            icon: "path/to/aws-icon.png",
            description: "Cloud computing platform for hosting and deploying applications."
        },
        { tool: "Azure", icon: "path/to/azure-icon.png", description: "Microsoft's cloud computing service for building, testing, and deploying applications." },
        { tool: "GitHub Actions", icon: "path/to/github-actions-icon.png", description: "CI/CD service for automating workflows directly from GitHub repositories." },
        { tool: "Terraform", icon: "path/to/terraform-icon.png", description: "Infrastructure as Code (IaC) tool for building, changing, and versioning infrastructure safely and efficiently." }
    ];

    return (
        <main>
            <section id='intro'>
                <EntryAnimate>
                    <section id="right">
                        <img src={img} loading='lazy' alt="Agboola samson ifedolapo's portrait" />
                    </section>

                </EntryAnimate>

                <section id="left">
                    <p id='name'>Hi, I&apos;m Agboola Samson Ifedolapo</p>
                    <h2 id='changingtext'><span id='iam'>I am a</span> <TypingEffect /></h2>

                    <EntryAnimate threshold={0.2}>
                        <p id='about'>I&apos;m a passionate and dedicated software engineer with a strong foundation in both frontend and backend technologies. My expertise lies in creating seamless user experiences and building robust backend systems. I thrive on challenges and continuously seek opportunities to learn and grow in the ever-evolving world of technology.<br /><br />With a background in mechanical design engineering, I bring a unique perspective to software development, combining technical skills with a creative approach to problem-solving. I am committed to delivering high-quality solutions that meet the needs of users and drive business success.</p>
                    </EntryAnimate>
                </section>
            </section>

            <h2>Tools And Tech Expertise</h2>


            <section>
                <EntryAnimate>
                    <Divider />
                    <h3>Development</h3>
                </EntryAnimate>
                <div className="toolscontainer">

                    {devtools.map((tool, index) => (
                        <EntryAnimate key={index}>
                            <Tools tool={tool.tool} icon={tool.icon} description={tool.description} />
                        </EntryAnimate>
                    ))}

                </div>
                <Divider />
                <EntryAnimate>
                    <h3>DevOps</h3>
                </EntryAnimate>
                <div className="toolscontainer">

                    {devopstools.map((tool, index) => (
                        <EntryAnimate key={index}>
                            <Tools tool={tool.tool} icon={tool.icon} description={tool.description} />
                        </EntryAnimate>
                    ))}


                </div>
            </section>

            <h2>Certifications</h2>
            <section>

            </section>
        </main >
    )
}
