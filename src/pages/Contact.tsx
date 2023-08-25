import { useForm, SubmitHandler } from "react-hook-form";
import { UseAppDispatch, useAppSelector } from "../hooks/useReducer";
import { addItem, removeItem, updateItem } from "../app/Features/contactSlice";
import { generateUniqueId } from "../functions/generateId";
import { useState } from "react";
import ContactCard from "../Components/ContactCard";
import ContactForm from "../Components/ContactForm";
import { InputProps } from "../types/types";

const Contact: React.FC = () => {
  const { register, handleSubmit, setValue, reset } = useForm<InputProps>();
  const [isContactFrom, setIsContactFrom] = useState(false);
  const [isContactCard, setIsContactCard] = useState(true);
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

      reset();
    } else {
      const newContact: InputProps = {
        ...data,
        id: generateUniqueId(),
      };
      dispatch(addItem(newContact));
      reset();
    }

    setEditingContact(null);
    setIsContactFrom(false);
    setIsContactCard(true);
  };
  const handleFormSubmit = (data: InputProps) => {
    handleContact(data);
  };
  const handleEdit = (contactId: number) => {
    setIsContactCard(false);
    setIsContactFrom(true);
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
  const handleContactForm = () => {
    setIsContactFrom(true);
    setIsContactCard(false);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <button
        onClick={handleContactForm}
        type="button"
        className="w-[200px] bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
      >
        Create Contact
      </button>
      <>
        {isContactFrom && (
          <ContactForm
            register={register}
            onSubmit={handleSubmit(handleFormSubmit)}
          />
        )}
      </>

      <>
        {contact.items.length > 0 ? (
          <div className="flex justify-center mt-10 md:ml-20 ">
            {isContactCard && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
              </div>
            )}
          </div>
        ) : (
          <h2 className="text-center mt-5">
            No Contact found! Please add contact form create Contact Button!
          </h2>
        )}
      </>
    </div>
  );
};

export default Contact;
