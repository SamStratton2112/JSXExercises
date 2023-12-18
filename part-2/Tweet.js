const Tweet = ({username='N/A', name='N/A', date='N/A', message='N/A'})=>{
    return (
        <ul>
            <li>Username: {username}</li>
            <li>Name: {name}</li>
            <li>Date: {date}</li>
            <li>Message: {message} </li>
        </ul>
    )
}
