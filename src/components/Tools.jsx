/* eslint-disable react/prop-types */



function Tools({ tool, icon, description }) {
    return (
        <div className="tools">
            <div className="tools-icon">
                <img src={icon} alt={`${tool} icon`} />

            </div>
            <div className="tools-text">
                <h3>{tool}</h3>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default Tools
