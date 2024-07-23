import UserCard from "../components/UserCard";
import withAgeHighlight from "../components/withAgeHighlight";


const user1 = {name: "Juan", email:"juan@example.com", age:25};
const user2 = {name: "Ana", email:"ana@example.com", age:35};
const user3 = {name: "Rosa", email:"rosa@example.com", age:22};

const EnhancedUserCard = withAgeHighlight(UserCard,30);


function HighOrderComponentsExample(){
    return(
        <div>
            <UserCard user={user1} />
            <EnhancedUserCard user={user2}/>
            <EnhancedUserCard user={user3}/>
        </div>
    )
}

export default HighOrderComponentsExample;
