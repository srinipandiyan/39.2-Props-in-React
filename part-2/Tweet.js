/**Tweet: creates a tweet
 * contains username, name (of user), date, and message props
 */

function Tweet({username, name, date, message}){
    return (
        <div className="tweet">
            <span className="username">{username}</span>
            <span>{name}</span>
            <span className="date">{date}</span>
            <p>{message}</p>
        </div>
    )
}