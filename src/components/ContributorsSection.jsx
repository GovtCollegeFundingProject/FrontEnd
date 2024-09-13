// import React from "react";

// const ContributorsSection = () => {
//   return (
//     <div className="bg-white py-10 mt-5">
//       <div className="text-center mb-10">
//         <h2 className="text-2xl font-bold text-[#06038D]">
//           Individual Contributors
//         </h2>
//         <div className="flex justify-center gap-52 mt-12 mb-9">
//           {[
//             {
//               name: "John Doe",
//               amount: "₹3,00,000",
//               img: "https://www.freepik.com/free-photos-vectors/indian-man-face",
//             },
//             {
//               name: "Smith",
//               amount: "₹5,00,000",
//               img: "https://www.shutterstock.com/search/indian-male-face?page=2",
//             },
//             {
//               name: "David",
//               amount: "₹4,00,000",
//               img: "https://www.google.com/imgres?q=men%20indian%20profile%20faces&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fclose-up-portrait-young-indian-man-with-beard-white-shirt-isolated-standing-smiling_155003-23823.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Findian-male-face&docid=x9lBgAZcMK6xqM&tbnid=7WYiMneoJO-dEM&vet=12ahUKEwjM_9LHjKmIAxVF1DgGHeZHK9oQM3oECEoQAA..i&w=417&h=626&hcb=2&ved=2ahUKEwjM_9LHjKmIAxVF1DgGHeZHK9oQM3oECEoQAA",
//             },
//             {
//               name: "Thomas",
//               amount: "₹1,00,000",
//               img: "https://www.shutterstock.com/search/indian-man-face",
//             },
//             {
//               name: "Ellyse",
//               amount: "₹5,00,000",
//               img: "https://www.google.com/imgres?q=women%20indian%20profile%20faces&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fcloseup-smiling-young-beautiful-indian-woman_1262-2261.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.2008272138.1725321600%26semt%3Dais_hybrid&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Findian-woman-face&docid=kVJmhpEvSfIuCM&tbnid=rfKigfMdKzzWUM&vet=12ahUKEwiT1tKwjamIAxWA8jgGHSwXLBEQM3oECHcQAA..i&w=626&h=417&hcb=2&ved=2ahUKEwiT1tKwjamIAxWA8jgGHSwXLBEQM3oECHcQAA",
//             },
//           ].map((contributor, index) => (
//             <div key={index} className="text-center">
//               <img
//                 src={contributor.img}
//                 alt={contributor.name}
//                 className="rounded-full w-24 h-24 mx-auto"
//               />
//               <h3 className="mt-2 font-medium">{contributor.name}</h3>
//               <p className="text-sm">{contributor.amount}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="text-center mb-10">
//         <h2 className="text-2xl font-bold text-[#06038D]">
//           Company Contributors
//         </h2>
//         <div className="flex justify-center gap-52 mt-12 mb-5">
//           {[
//             {
//               name: "Dabur India",
//               amount: "₹5,00,000",
//               img: "https://via.placeholder.com/100",
//             },
//             {
//               name: "Kirloskar Oil",
//               amount: "₹4,00,000",
//               img: "https://via.placeholder.com/100",
//             },
//             {
//               name: "Gayatri Pros",
//               amount: "₹6,00,000",
//               img: "https://via.placeholder.com/100",
//             },
//             {
//               name: "Virsa Corpo",
//               amount: "₹4,00,000",
//               img: "https://via.placeholder.com/100",
//             },
//             {
//               name: "Mindbowl",
//               amount: "₹3,00,000",
//               img: "https://via.placeholder.com/100",
//             },
//           ].map((company, index) => (
//             <div key={index} className="text-center">
//               <img
//                 src={company.img}
//                 alt={company.name}
//                 className="rounded-full w-24 h-24 mx-auto"
//               />
//               <h3 className="mt-2 font-medium">{company.name}</h3>
//               <p className="text-sm">{company.amount}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContributorsSection;

import React from "react";

const ContributorsSection = () => {
  return (
    <div className="bg-white py-10 mt-5">
      {/* Individual Contributors Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-[#06038D]">
          Individual Contributors
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-12 mb-9">
          {[
            {
              name: "Ramesh Kumar",
              amount: "₹3,00,000",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWflfExnCbA3PI_8NTRje0pKSOMvYN8U73g&s",
            },
            {
              name: "Mahesh Reddy",
              amount: "₹5,00,000",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfEryph4Lznqm--GKcjH2MRGC6MOyCQE6e-fppezYryk08N0iUMz6x1V7zSYcSjGnQHg&usqp=CAU",
            },
            {
              name: "Ravi Battula",
              amount: "₹4,00,000",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1rWiogZyRw43uNCZB-vPkgU7bMzhg0iPVQ&s",
            },
            {
              name: "Anitha Reddy",
              amount: "₹1,00,000",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCoNBR6cEkst7qR4IQZWouAkk1fobXu6DBg&s",
            },
            {
              name: "Lakshmi Narayana",
              amount: "₹5,00,000",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWMWQUMb08QYNyuzGJ2miNkUCtQxODSvzGQ&s",
            },
          ].map((contributor, index) => (
            <div key={index} className="text-center max-w-[150px]">
              <img
                src={contributor.img}
                alt={contributor.name}
                className="rounded-full w-24 h-24 mx-auto"
              />
              <h3 className="mt-2 font-medium">{contributor.name}</h3>
              <p className="text-sm">{contributor.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company Contributors Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-[#06038D]">
          Company Contributors
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-12 mb-5">
          {[
            {
              name: "Dabur India",
              amount: "₹5,00,000",
              img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Dabur_Logo.svg/800px-Dabur_Logo.svg.png",
            },
            {
              name: "Kirloskar Oil",
              amount: "₹4,00,000",
              img: "https://www.kirloskaroilengines.com/image/layout_set_logo?img_id=589197&t=1724938959562",
            },
            {
              name: "Gayatri Pros",
              amount: "₹6,00,000",
              img: "https://www.gayatri.co.in/images/logo.gif",
            },
            {
              name: "Reliance Energy",
              amount: "₹4,00,000",
              img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justrechargenow.com%2Fjust-recharge-now%2Freliance-energy&psig=AOvVaw1x5-fZOOa4dcSDiSoOjvhQ&ust=1726299016778000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNi3-JGzv4gDFQAAAAAdAAAAABAE",
            },
            {
              name: "TATA Steel",
              amount: "₹3,00,000",
              img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flogowik.com%2Ftata-steel-logo-vector-svg-pdf-ai-eps-cdr-free-download-18891.html&psig=AOvVaw3UnEe1DV8fFlEABnDxqYeh&ust=1726299089904000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiVsLKzv4gDFQAAAAAdAAAAABAE",
            },
          ].map((company, index) => (
            <div key={index} className="text-center max-w-[150px]">
              <img
                src={company.img}
                alt={company.name}
                className="rounded-full w-24 h-24 mx-auto"
              />
              <h3 className="mt-2 font-medium">{company.name}</h3>
              <p className="text-sm">{company.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributorsSection;
