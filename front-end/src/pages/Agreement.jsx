import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Agreement = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const { propertyId, propertyTitle, landlordId } = location.state; // Extract the property ID

  // Get today's date and one year from today's date
  const startDate = new Date().toLocaleDateString();
  const endDate = new Date();
  endDate.setFullYear(endDate.getFullYear() + 1);
  const endDateString = endDate.toLocaleDateString();

  if (!user || !user.name) {
    return (
      <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
        <p className="text-gray-700">User information is not available.</p>
      </div>
    );
  }

  // Handle application submission
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/application/apply",
        {
          userName: user.name,
          userEmail: user.email,
          propertyId, // Send the property ID to the backend
          landlordId, // Send the landlord ID to the backend
        }
      );
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit the application.");
    }
  };

  return (
    <div className="flex justify-center items-center m-10">
      <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-blue-500">Rental Agreement for:</span> {propertyTitle}
        </h1>{" "}
        {/* Show property title */}
        <p className="mb-4 text-gray-700">
          I, <span className="font-semibold">{user.name}</span>, agree to the
          following terms and conditions:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>1. The rental contract begins on {startDate} and is auto renewed on {endDateString}.</li>
          <br />
          <li>
            2. The rental payment is due on the first day of each month and is
            non-refundable.
          </li>
          <br />
          <li>
            3. The property must be kept in good condition. Any damages must be
            reported immediately.
          </li>
          <br />
          <li>4. Smoking is prohibited inside the rental property.</li>
          <br />
          <li>
            5. Pets are not allowed without prior written consent from the
            landlord.
          </li>
          <br />
          <li>
            6. The landlord reserves the right to enter the property for
            inspections or repairs with prior notice.
          </li>
        </ul>
        <p className="text-black font-bold underline">
          By Applying, I acknowledge that I have read and understood the terms of this rental agreement.
        </p>
        <div className="mt-6">
          <p className="mt-2">Signature: {user.name}</p>
          <p className="mt-2">Date: {startDate}</p>
        </div>
        <div className="mt-6 text-center"></div>
        <div className="mt-6 text-center">
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={handleSubmit} // Call the submit function
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agreement;
