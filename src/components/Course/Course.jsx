const Course = ({course}) => {
    const {image, title, description, price, credit} = course;

    return (
        <div className="bg-white">
            <img src={image} alt={`image of ${title}`} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <div>
                    <span>$</span>
                    <p>Price: ${price}</p>
                </div>
                <div>
                    <span>icon</span>
                    <p>Credit: {credit}</p>
                </div>
            </div>
        </div>
    );
};

export default Course;