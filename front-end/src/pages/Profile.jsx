import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  
  return (
    <div>
      <h1>{user.name} {user.email} </h1>
    </div>
  );
};

export default Profile;
