import Project from "../components/Project"
import EntryAnimate from '../components/EntryAnimate';

function Projects() {
    const projects = [
        {
            title: "AuthX",
            description: "This is a description of AuthX .",
            link: "https://authx1.netlify.app",
            repolink: ""
        },
        {
            title: "ArtisanHub",
            description: "This is a description of AuthX .",
            link: "https://authx1.netlify.app",
            repolink: ""
        },
        {
            title: "ArtisanHub",
            description: "This is a description of AuthX .",
            link: "https://authx1.netlify.app",
            repolink: ""
        },
        {
            title: "ArtisanHub",
            description: "This is a description of AuthX .",
            link: "https://authx1.netlify.app",
            repolink: ""
        }

    ]
    return (
        <div className="projectsContainer">

            {projects.map((project, index) => (
                <EntryAnimate key={index}>
                    <Project
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        link={project.link}
                    />
                </EntryAnimate>
            ))}
        </div>
    )
}


export default Projects
