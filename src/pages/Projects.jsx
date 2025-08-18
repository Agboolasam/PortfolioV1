import Project from "../components/Project"
import EntryAnimate from '../components/EntryAnimate';

function Projects() {
    const projects = [
        {
            title: "DSI FITNESS",
            description: "This is a fitness website, Still in dev stage. MAkes use of Google appscripts to handle events. Built with ReactJS and tailwindCSS",
            link: "https://proud-forest-076d4e10f.6.azurestaticapps.net/",
            repolink: ""
        },
        {
            title: "ArtisanHub",
            description: "ArisanHub is a startup, that connecting artisans to potential clients",
            link: "https://artisan.teslarez.xyz",
            repolink: ""
        },
        {
            title: "AuthX",
            description: "Simple Login system that uses a Mongo DB and a Node JS backend (Backend not hosted)",
            link: "https://authx1.netlify.app",
            repolink: ""
        },
        {
            title: "Shopify",
            description: "Simple Shopify On boarding page ",
            link: "https://shopify-agboola.netlify.app/",
            repolink: ""
        },
        {
            title: "Mobile Mart",
            description: "Landing page for a Gadget store  ",
            link: "https://mobilemarthng.netlify.app/",
            repolink: ""
        },
        {
            title: "Basic Calculator",
            description: "Basic calculator with HTML, CSS and JS. with darkmode implementation ",
            link: "https://agboolabasiccalc.netlify.app/",
            repolink: ""
        },

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
