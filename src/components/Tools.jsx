/* eslint-disable react/prop-types */

function Tools({ tool, icon, description }) {
    return (
        <div className="tools">
            <img src={icon} alt={`${tool} icon`} />
            <h3>{tool}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Tools
