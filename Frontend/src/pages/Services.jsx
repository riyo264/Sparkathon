import { useParams } from 'react-router-dom';

const Services = () => {
  const { type } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Service: {decodeURIComponent(type)}</h1>
      {/* Info about selected service */}
    </div>
  );
};

export default Services;