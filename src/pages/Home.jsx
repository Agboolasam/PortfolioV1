import TypingEffect from '../components/TypingEffect';
import img from '../assets/img.png';
import EntryAnimate from '../components/EntryAnimate';
import Tools from '../components/Tools';
import Divider from '../components/Divider';
import Certs from '../components/Certs';

export default function Home() {
    const devtools = [
        { tool: "HTML", icon: "https://www.svgrepo.com/show/452228/html-5.svg", description: "Markup language for creating web pages." },
        { tool: "CSS", icon: "https://th.bing.com/th/id/R.ab042fdaad873f71992f13ed3fb7b688?rik=Jk9w7%2buWVOLAZQ&pid=ImgRaw&r=0", description: "Style sheet language for styling web pages." },
        { tool: "Tailwind CSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg", description: "Utility-first CSS framework for rapid UI development." },

        { tool: "JavaScript", icon: "https://www.svgrepo.com/show/353925/javascript.svg", description: "Programming language for web development." },
        { tool: "React", icon: "https://www.svgrepo.com/show/452092/react.svg", description: "JavaScript library for building user interfaces." },
        { tool: "Node.js", icon: "https://www.svgrepo.com/show/354119/nodejs-icon.svg", description: "JavaScript runtime for server-side development." },
        { tool: "Express", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png", description: "Web framework for Node.js." },
        { tool: "MongoDB", icon: "https://www.svgrepo.com/show/331488/mongodb.svg", description: "NoSQL database for storing data." },
        { tool: "vite", icon: "https://www.svgrepo.com/show/374167/vite.svg", description: "Build tool and development server for modern web projects." },

    ];

    const devopstools = [
        { tool: "Docker", icon: "https://www.svgrepo.com/show/354926/docker.svg", description: "Containerization platform for deploying applications." },
        { tool: "Kubernetes", icon: "https://www.svgrepo.com/show/353983/kubernetes.svg", description: "Container orchestration platform for managing containerized applications." },
        { tool: "Jenkins", icon: "https://www.svgrepo.com/show/373699/jenkins.svg", description: "Continuous Integration and Continuous Deployment for automating software delivery." },
        {
            tool: "AWS",
            icon: "https://www.svgrepo.com/show/448266/aws.svg",
            description: "Cloud computing platform for hosting and deploying applications."
        },
        { tool: "Azure", icon: "https://www.svgrepo.com/show/448274/azure.svg", description: "Microsoft's cloud computing service for building, testing, and deploying applications." },
        { tool: "GitHub Actions", icon: "https://miro.medium.com/v2/resize:fit:679/1*_7mJjD1resPodxT7agk16w.png", description: "CI/CD service for automating workflows directly from GitHub repositories." },
        { tool: "Terraform", icon: "https://www.svgrepo.com/show/354447/terraform-icon.svg", description: "Infrastructure as Code (IaC) tool for building, changing, and versioning infrastructure safely and efficiently." }
    ];

    const scmtools = [
        { tool: "Git", icon: "https://www.svgrepo.com/show/509966/git.svg", description: "Version control system for tracking changes." },
        { tool: "GitHub", icon: "https://www.svgrepo.com/show/516640/github.svg", description: "Web-based platform for version control using Git." }
    ];

    const systools = [
        { tool: "Linux", icon: "https://www.svgrepo.com/show/448236/linux.svg", description: "Open-source operating system for servers and development." },
        { tool: "Windows", icon: "https://www.svgrepo.com/show/509291/windows.svg", description: "Proprietary operating system developed by Microsoft." },
        { tool: "macOS", icon: "https://www.svgrepo.com/show/509155/macos.svg", description: "Operating system for Apple's Mac computers." }
    ];

    const certifications = [
        {
            certName: "Microsoft Azure Fundamentals",
            link: "https://learn.microsoft.com/api/credentials/share/en-us/SamsonAGBOOLA-0199/33784982A709CD29?sharingId=70420BC93E140F8C",
            image: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg?branch=main",

        }
    ]
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
                    <h3 className='lilHeader'>Development</h3>
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
                    <h3 className='lilHeader'>DevOps</h3>
                </EntryAnimate>
                <div className="toolscontainer">

                    {devopstools.map((tool, index) => (
                        <EntryAnimate key={index}>
                            <Tools tool={tool.tool} icon={tool.icon} description={tool.description} />
                        </EntryAnimate>
                    ))}


                </div>
                <Divider />
                <EntryAnimate>
                    <h3 className='lilHeader'>SCM Tools</h3>
                </EntryAnimate>
                <div className="toolscontainer">

                    {scmtools.map((tool, index) => (
                        <EntryAnimate key={index}>
                            <Tools tool={tool.tool} icon={tool.icon} description={tool.description} />
                        </EntryAnimate>
                    ))}


                </div>
                <Divider />
                <EntryAnimate>
                    <h3 className='lilHeader'>Systems</h3>
                </EntryAnimate>
                <div className="toolscontainer">

                    {systools.map((tool, index) => (
                        <EntryAnimate key={index}>
                            <Tools tool={tool.tool} icon={tool.icon} description={tool.description} />
                        </EntryAnimate>
                    ))}


                </div>

            </section>

            <h2 id="certifications">Certifications</h2>
            <section id='certscontainer'>
                {certifications.map((cert, index) => (
                    <EntryAnimate key={index}>
                        <Certs certLink={cert.link} certName={cert.certName} img={cert.image} />
                    </EntryAnimate>
                ))}
            </section>
        </main >
    )
}
