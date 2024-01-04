function App() {
    return (
        <div>
            <Tweet
            username="user1"
            name="User One"
            date={new Date().toDateString}
            message="first tweet"
            />
            <Tweet
            username="user2"
            name="User Two"
            date={new Date().toDateString}
            message="second tweet"
            />
            <Tweet
            username="user3"
            name="User Three"
            date={new Date().toDateString}
            message="third tweet"
            />
        </div>
    )
}