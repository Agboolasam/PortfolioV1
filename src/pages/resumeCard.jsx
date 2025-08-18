/* eslint-disable react/prop-types */


const Card = ({ type, items }) => {

    if (type === "education") {
        return (
            <div className="eduCard" >
                <span className="dot"></span>
                <p className="cardHeding">
                    <span>
                        {items.school}
                    </span>
                    <span>
                        {items.year}
                    </span>
                </p>

                <span>
                    {items.course} - {items.cert}
                </span>
                <span>
                    {items.grade}
                </span>
            </div>
        )
    }

    if (type === "experience") {
        return (
            <div className="workCard" >
                <span className="dot"></span>
                <p className="cardHeding">
                    <span>
                        {items.title}
                    </span>
                    <span>
                        {items.duration}
                    </span>
                </p>

                <span>
                    {items.company}
                </span>
                <span>
                    {items.details}. <b>Tools:</b> <i> {items.tools}</i>
                </span>
            </div>
        )
    }
}

export default Card
