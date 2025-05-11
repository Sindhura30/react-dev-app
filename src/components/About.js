import UserContext from "../utils/userContext";

const About = () => {
    return (
        <div className="w-full">
            <h1 className="flex min-w-[950px]">About Page</h1>
            <UserContext.Consumer>
                {data => (<p className="flex w-full min-w-[950px]">User : {data.loggedInUser}</p>)}
            </UserContext.Consumer>
        </div>
    )
}

export default About;