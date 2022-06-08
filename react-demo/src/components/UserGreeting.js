export const UserGreeting = () =>
{
    const isLoggedIn = false

    //question mark is like, is boolean 'isLoggedIn' true? 
    //if true, output 'User' if false, output 'Guest'

    return(
        <div>
            <h1> WELCOME {isLoggedIn ? 'User' : 'Guest'}</h1>
        </div>
    )
} 

//CONDITIONAL RENDERING