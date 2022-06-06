export const Clickhandler = () =>
{
    const clickHandler = (event, count = 1) =>
    {
        console.log("CLICKED", count, event)
    }

    return(
        <div>
            <button onClick={clickHandler}> EVENT HANDLING </button>
            <button onClick={(event) => clickHandler(event, 5)}> EVENT HANDLING 5</button>
        </div>
    );
}