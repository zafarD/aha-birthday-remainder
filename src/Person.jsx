
const Person = ({name, age, image}) => {
    return <article className="person">
        <img src={image} alt={name} className="img"/>
        <div>
            <h4>{age} years</h4>
            <p>{name}</p>
        </div>
    </article>
}

export default Person;