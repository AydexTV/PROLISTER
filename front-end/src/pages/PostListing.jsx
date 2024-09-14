import React, { useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { UserContext } from "../../context/userContext";

const PostListing = () => {
  const { user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 5,
  });

  const onSubmit = async (data) => {
    setUploading(true);
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("type", data.type);
    formData.append("price", data.price);
    formData.append("rooms", data.rooms);
    formData.append("bathrooms", data.bathrooms);
    formData.append("area", data.area);
    formData.append("country", data.country);
    formData.append("city", data.city);
    formData.append("latitude", data.latitude);
    formData.append("longitude", data.longitude);
    formData.append("landlord", user.name);
    formData.append("landlordId", user.id);

    files.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/properties",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Property listed successfully");
      reset();
      setFiles([]);
    } catch (error) {
      console.error(error);
      alert("Failed to list property");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-4xl m-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-6">Post a New Listing</h1>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.title && (
              <p className="text-red-500 text-xs italic">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.description && (
              <p className="text-red-500 text-xs italic">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Type
            </label>
            <select
              {...register("type", { required: "Type is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a type</option>
              <option value="furnished">Furnished</option>
              <option value="not furnished">Not Furnished</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-xs italic">
                {errors.type.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              {...register("price", { required: "Price is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.price && (
              <p className="text-red-500 text-xs italic">
                {errors.price.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rooms
            </label>
            <input
              type="number"
              {...register("rooms", { required: "Rooms is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.rooms && (
              <p className="text-red-500 text-xs italic">
                {errors.rooms.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Bathrooms
            </label>
            <input
              type="number"
              {...register("bathrooms", { required: "Bathrooms is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.bathrooms && (
              <p className="text-red-500 text-xs italic">
                {errors.bathrooms.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Area
            </label>
            <input
              type="number"
              {...register("area", { required: "Area is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.area && (
              <p className="text-red-500 text-xs italic">
                {errors.area.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Country
            </label>
            <input
              type="text"
              {...register("country", { required: "Country is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.country && (
              <p className="text-red-500 text-xs italic">
                {errors.country.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              City
            </label>
            <input
              type="text"
              {...register("city", { required: "City is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.city && (
              <p className="text-red-500 text-xs italic">
                {errors.city.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Latitude
            </label>
            <input
              type="number"
              step="0.000001"
              {...register("latitude", { required: "Latitude is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.latitude && (
              <p className="text-red-500 text-xs italic">
                {errors.latitude.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Longitude
            </label>
            <input
              type="number"
              step="0.000001"
              {...register("longitude", { required: "Longitude is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.longitude && (
              <p className="text-red-500 text-xs italic">
                {errors.longitude.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Images (max 5)
            </label>
            <div
              {...getRootProps({
                className:
                  "w-full p-4 border border-dashed border-gray-300 rounded-md cursor-pointer",
              })}
            >
              <input {...getInputProps()} />
              {files.length > 0 ? (
                <ul className="list-disc pl-5 mt-2">
                  {files.map((file, index) => (
                    <li key={index} className="text-gray-700">
                      {file.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">
                  Drag & drop images here, or click to select files
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-md text-white ${
              uploading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
            } transition-colors`}
            disabled={uploading}
          >
            {uploading ? "Submitting..." : "Submit Listing"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostListing;
