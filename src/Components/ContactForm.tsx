import React from "react";
import { UseFormRegister } from "react-hook-form";
import { InputProps } from "../types/types";

interface ContactFormProps {
  register: UseFormRegister<InputProps>;
  onSubmit: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ register, onSubmit }) => {
  return (
    <div className="flex justify-center items-center mt-5">
      <section className="w-full max-w-xl p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-6">Create Contact</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              {...register("firstName")}
              id="firstName"
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
              {...register("lastName")}
            />
          </div>
          <div className="mb-4">
            <p className="block text-sm font-medium text-gray-700">Status</p>
            <div className="mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-indigo-500"
                  {...register("status")}
                  value="active"
                />
                <span className="ml-2">Active</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  className="form-radio text-indigo-500"
                  {...register("status")}
                  value="inactive"
                />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Save Contact
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
