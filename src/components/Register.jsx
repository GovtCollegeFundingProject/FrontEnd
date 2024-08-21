import React from 'react';

const Register = () => {
  const cards = [
      {
        id: 1,
        title: 'Individual',
        description:'Register to contribute as an Individual',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUifInkgLw6gxPtqSIKwAk_QOnBH8KvHs2w&s'
      },
      {
        id: 2,
        title: 'Company',
        description:'Register to contribute as an Organization',
        imageUrl: 'https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-company-line-icon-vector-png-image_6707332.png'
      },
    ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div>
        <h2 className="text-3xl font-medium text-center text-gray-800 mb-20">Register</h2>
      </div>
      <div className="flex gap-24">
        {cards.map(card => (
          <div key={card.id} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 text-center w-[400px] h-[400px] border-4 border-blue-900">
            <img 
              src={card.imageUrl} 
              alt={card.title} 
              className="w-[130px] h-[130px] rounded-full object-cover mb-4" 
            />
            <div className="text-xl font-bold mb-2 text-gray-800">{card.title}</div>
            <div className="text-base text-gray-600 mb-4">{card.description}</div>
            <button className="w-[200px] py-2 bg-blue-900 text-white rounded hover:scale-105 transition-transform">Register</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Register;
