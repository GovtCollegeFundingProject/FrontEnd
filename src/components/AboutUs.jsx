import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full py-10 pl-9">
      <h2 className="text-center text-[#06038D] font-semibold text-3xl mb-8">About Us</h2>
      <div className="flex flex-col items-center px-8">
        <div className=" flex flex-row border-4 border-[#06038D] p-6 rounded-md w-3/4 mb-8">
          <img src={`https://via.placeholder.com/150`} alt="APS CHE Logo" className="mx-auto mb-4" />
          <p className="text-center text-lg font-medium">
            The A P State Council of Higher Education (APSCHE) came into existence w.e.f. 20.05.1988 through Act 16 of 1988 to advise the Government in matters relating to Higher Education in the State and to oversee its development...
          </p>
        </div>
        <div className=" flex flex-row border-4 border-[#06038D] p-6 rounded-md w-3/4">
        <p className="text-center text-lg font-medium">
            Andhra University Technology Start-Up Incubation Centre has hit the ground running by bringing several growth stage startups on board. It is a collaborative initiative intended to help create next-gen technology startups...
          </p>
          <img src={`https://via.placeholder.com/150`} alt="University Logo" className="mx-auto mb-4" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
