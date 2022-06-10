import { useState } from "react"

export const Form = () =>
{
    const [username, setUsername] = useState('')

    const handleSubmit = (event) =>
    {
        event.preventDefault() //this prevents refreshing of page everytime you click the buton

        alert(`your username is ${username}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input 
                    type='text' 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <button type='submit'> SUBMIT </button>
        </form>
    )
}