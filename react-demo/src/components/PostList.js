import { useState, useEffect } from "react"

export const PostList = () =>
{
    const [posts, setPosts] = useState([])

    useEffect(() => 
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(err => 
            {
                console.log(err)
            })
    }, [])

    return(
        <div>
            <ul>
                {
                    posts.map(post => 
                        {
                            return(
                                <div>
                                    <li key={post.id}>
                                        UserID: {post.userId}<br/>
                                        TITLE: {post.title}<br/>
                                        BODY: {post.body}<br/><br/>
                                    </li>
                                </div>
                            )
                        }) 
                }
            </ul>
        </div>
    )
}