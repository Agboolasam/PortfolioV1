import UseInView from "../Hooks/UseInView"


// eslint-disable-next-line react/prop-types
function EntryAnimate({ children, threshold = 0.1 }) {
    const [ref, isInView] = UseInView(threshold);
    return (
        <div ref={ref} className={`entry-animate ${isInView ? 'in-view' : ''}`}>
            {children}
        </div>
    )
}

export default EntryAnimate
