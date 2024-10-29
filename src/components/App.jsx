import Profile from "./Profile/Profile";
import userData from "../userData.json";
import "../index.css";
import "modern-normalize";
import FriendList from "./FriendList/FriendList";
import friends from "../friends.json";
import FriendListItem from "./FriendListItem/FriendListItem";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
