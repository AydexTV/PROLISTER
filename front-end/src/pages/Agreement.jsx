import { UserContext } from "../../context/userContext";
import { useContext } from "react";

const Agreement = () => {
  const { user } = useContext(UserContext);

  if (!user || !user.name) {
    return (
      <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
        <p className="text-gray-700">User information is not available.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center m-10">
      <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Rental Agreement</h1>
        <p className="mb-4 text-gray-700">
          I, <span className="font-semibold">{user.name}</span>, agree to the
          following terms and conditions:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>
            1. The rental period begins on [Start Date] and ends on [End Date].
          </li>
          <li>
            2. The rental payment is due on the first day of each month and is
            non-refundable.
          </li>
          <li>
            3. The property must be kept in good condition. Any damages must be
            reported immediately.
          </li>
          <li>4. Smoking is prohibited inside the rental property.</li>
          <li>
            5. Pets are not allowed without prior written consent from the
            landlord.
          </li>
          <li>
            6. The landlord reserves the right to enter the property for
            inspections or repairs with prior notice.
          </li>
        </ul>
        <p className="text-gray-700">
          By signing below, I acknowledge that I have read and understood the
          terms of this rental agreement.
        </p>
        <div className="mt-6">
          <p className="font-semibold">Signature:</p>
          <p className="mt-2">_________________________</p>
          <p className="mt-2">Date: __________________</p>
        </div>
        <div className="mt-6 text-center">
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => alert('Applied!')}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agreement;
