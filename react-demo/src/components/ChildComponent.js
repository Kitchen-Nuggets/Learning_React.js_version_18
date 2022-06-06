export const ChildComponent = (props) =>
{

    return(
        <div>
            <button onClick={props.greetHandler}> PARENT CHILD COMMS </button>
            <button onClick={() => props.greetHandler('CHILD PARAMETER')}> PASS PARAMETER FROM CHILD COMPONENT WHEN PARENT COMPONENT IS CALLED </button>
        </div>
    );
}