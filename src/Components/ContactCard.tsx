interface ContactProps {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}
const ContactCard: React.FC<ContactProps> = ({
  lastName,
  firstName,
  status,
  onEdit,
  onDelete,
  id,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold">
        {firstName} {lastName}
      </h3>
      <p className="text-gray-600 mb-2">Status: {status}</p>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => onEdit(id)}
          className="px-2 py-1 text-indigo-500 border rounded-md border-indigo-500 hover:bg-indigo-100 transition duration-300"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(id)}
          className="px-2 py-1 text-red-500 border rounded-md border-red-500 hover:bg-red-100 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
