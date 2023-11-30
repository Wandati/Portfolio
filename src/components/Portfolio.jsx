import React from "react";
// import PortfolioImage from "../assets/Portfolio.jpg";
import Portfolio1 from "../assets/portfolio2.png";
import Portfolio2 from "../assets/portfolio3.png";
import Portfolio3 from "../assets/todo.png";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: Portfolio1,
    },
    {
      id: 2,
      src: Portfolio2,
    },
    {
      id: 3,
      src: Portfolio3,
    },
  ];
  const handleCode = (id) => {
    const codeUrls = {
      1: "https://destinations-app-kappa.vercel.app/",
      2: "https://bus-booking-app-delta.vercel.app/",
      3: "https://github.com/Wandati/Django-React-Todo-App",
    };

    const codeUrl = codeUrls[id];

    if (codeUrl) {
      window.location.href = codeUrl;
    } else {
      console.error(`Code URL not found for project with id ${id}`);
    }
  };
  const handleDemo = (id) => {
    const demoUrls = {
      1: "https://react-destinations-app.onrender.com/",
      2: "https://react-bus-book-app.onrender.com/",
      3: "https://django-react-todo-app-orcin.vercel.app/",
    };
    const demoUrl = demoUrls[id];
    if (demoUrl) {
      window.location.href = demoUrl;
    } else {
      alert(
        "This Project Has Not Been Deployed Yet.Please Click On the Code Button to View it."
      );
    }
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex flex-col items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-8">Check out some of my recent projects here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemo(id)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCode(id)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
