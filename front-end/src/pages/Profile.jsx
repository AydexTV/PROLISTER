import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import pfp from "../assets/images/pfp.jpg";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {!!user && (
        <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-lg w-full">
          <div className="flex items-center justify-center mb-6">
            {/* Profile picture */}
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={pfp}
                alt={`${user.name}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome To ProLister,
          </h1>

          <h2 className="text-xl font-medium text-gray-700 mb-2">
            Thank You For Using Our Website and We Look
            Forward To Seeing You Find Your Dream House
          </h2>

          <div className="mt-6">
            <div className="mb-4">
              <p className="text-lg font-medium text-gray-600">Name:</p>
              <p className="text-lg text-gray-800">{user.name}</p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-600">Your E-mail:</p>
              <p className="text-lg text-gray-800">{user.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
