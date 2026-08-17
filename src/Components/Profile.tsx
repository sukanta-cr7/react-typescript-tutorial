import React, {useContext} from "react";
import UserContext from "../Context/UserContext";

function Profile() {
    const { user } = useContext(UserContext) as {
      user: { username: string; password: string } | null;
    };

    if (!user) return <div>Please log in to view your profile.</div>;
    return (
        <div>
            <h1>Profile</h1>
            <p>Welcome, {user.username}!</p>
        </div>
    );
}

export default Profile;