import { useForm, SubmitHandler } from "react-hook-form";
import { UseAppDispatch, useAppSelector } from "../hooks/useReducer";
import { addItem, removeItem, updateItem } from "../app/Features/contactSlice";
import { generateUniqueId } from "../functions/generateId";
import { useState } from "react";
import ContactCard from "../Components/ContactCard";

export interface InputProps {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm<InputProps>();
  // const [isContactFrom, setIsContactFrom] = useState(true);
  const [editingContact, setEditingContact] = useState<InputProps | null>(null);
  const dispatch = UseAppDispatch();
  const contact = useAppSelector((state) => state.contact);

  const handleContact: SubmitHandler<InputProps> = (data) => {
    if (editingContact) {
      const updatedContact: Partial<InputProps> = {
        ...data,
      };
      dispatch(
        updateItem({ id: editingContact.id, updatedItem: updatedContact })
      );

     
    } else {
  
      const newContact: InputProps = {
        ...data,
        id: generateUniqueId(),
      };
      dispatch(addItem(newContact));
    }

    setEditingContact(null); 
  };

  const handleEdit = (contactId: number) => {
 
    const selectedContact = contact.items.find((item) => item.id === contactId);
    if (selectedContact) {
      setEditingContact(selectedContact);
      setValue("firstName", selectedContact.firstName);
      setValue("lastName", selectedContact.lastName);
      setValue("status", selectedContact.status);
    }
  };

  const handleDelete = (contactId: number) => {
    dispatch(removeItem(contactId));
  };
  console.log(contact);
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <button
        type="button"
        className="w-[200px] bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
      >
        Create Contact
      </button>

      <div className="flex justify-center items-center mt-5">
        <section className="w-full max-w-xl p-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">Create Contact</h2>
          <form onSubmit={handleSubmit(handleContact)}>
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

      <>
        {contact.items.map((item) => (
          <div key={item.id}>
            <ContactCard
              key={item.id}
              id={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              status={item.status}
              onEdit={() => handleEdit(item.id)}
              onDelete={() => handleDelete(item.id)}
            />
          </div>
        ))}
      </>
    </div>
  );
};

export default Contact;
