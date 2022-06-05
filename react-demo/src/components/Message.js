import React, { useState } from "react";

const Message = (props) =>
{
    const [message, setMessage] = useState('Welcome visitor')

    return(
        <div>
            <h1>{message}</h1>
            <button onClick={()=> setMessage('BUTTON CLICKED')}> CLICK ME</button>
        </div>
    );
}

export default Message;