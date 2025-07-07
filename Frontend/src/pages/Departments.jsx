import { useParams } from 'react-router-dom';

const Departments = () => {
  const { category } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Department: {decodeURIComponent(category)}</h1>
      {/* You can fetch department-specific products here */}
    </div>
  );
};

export default Departments;