const Greet = (props) =>
{
    return(
        <div>
            <h1>HELLO {props.name} your pet's name is: {props.pet}</h1>
            {props.children}
            <p>{2 + 1}</p>
        </div>
    );
}

export default Greet;