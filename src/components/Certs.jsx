/* eslint-disable react/prop-types */


function Certs({ certLink, certName, img }) {
    return (
        <div className="certs">
            <div className="certicon">
                <img src={img} alt={certName} />
            </div>
            <div className="certtext">
                {certName}
                <a href={certLink}>
                    View
                </a>

            </div>

        </div>
    )
}

export default Certs
