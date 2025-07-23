function Project({ title, description, link, repolink }) {
    return (
        <div className="projectContainer">
            <h3>{title}</h3>
            <p>{description}</p>
            <img
                src={`https://api.microlink.io/?url=${encodeURIComponent(link)}&screenshot=true&embed=screenshot.url`}
                alt={`Open Graph preview of ${title}`}
            />
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
            {repolink && <a href={repolink} target="_blank" rel="noopener noreferrer">View Repository</a>}
        </div>
    )
}

export default Project;
