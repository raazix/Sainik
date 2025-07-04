import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Job Details
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Viewing job ID: {id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails; 