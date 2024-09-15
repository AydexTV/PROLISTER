import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";

const Applications = () => {
  const { user } = useContext(UserContext);
  const [applications, setApplications] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    // Only fetch applications if the user is logged in and is a landlord
    if (user && user.id) {
      const fetchApplications = async () => {
        try {
          const response = await axios.get(
            `${backendUrl}/api/application/landlord/${user.id}`
          );
          setApplications(response.data);
        } catch (error) {
          console.error("Error fetching applications:", error);
        }
      };

      fetchApplications();
    }
  }, [user]);

  if (!user || !user.id) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">User not logged in.</p>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">No applications found for this landlord.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Applications For Your Properties</h1>
      <ul>
        {applications.map((application) => (
          <li
            key={application._id}
            className="mb-6 p-6 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition-all"
          >
            <p className="text-lg text-gray-700 mb-2">
              <strong className="font-semibold text-gray-800">Applicant Name:</strong>{" "}
              {application.applicantName}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong className="font-semibold text-gray-800">Applicant Email:</strong>{" "}
              {application.applicantEmail}
            </p>
            <a
              className="inline-block py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              href={`property/${application.propertyId}`}
            >
              View Property
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applications;
