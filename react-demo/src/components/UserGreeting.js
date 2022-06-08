export const UserGreeting = () =>
{
    const isLoggedIn = false

    return(
        <div>
            <h1> WELCOME {isLoggedIn ? 'User' : 'Guest'}</h1>
        </div>
    )
} 

//CONDITIONAL RENDERING