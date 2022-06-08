export const NameList = () =>
{
    const names = ['josh', 'juliana', 'chewy', 'zoey']

    return(
        <div>
            {
                names.map((name) => 
                {
                    /*********************IMPORTANT**********************/
                    //key is for giving each item in list of array a unique identifier
                    //without the unique key, javascript will have an error
                    //and ask you to that, each items in the array should have a unique key

                    //try removing 'key={name}' inside the h2 element, so you can see the error
                    //on the google chrome's console

                    //NOTE: since each names inside the array are all unique 
                    //and none of them are the same
                    //'name' variable was used to give each items a unique key

                    //also, try putting h2 element array inside div, it doesn't work and idk why :D

                    return(
                    <h2 key={name}>{name}</h2>
                    )
                })
            }
        </div>
    )
}