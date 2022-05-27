import React from 'react';

const Portfolio = () => {
    return (
        <div className=" flex justify-center ">
        <div className=" min-h-screen lg:mt-20">
          <div className=" p-3 lg:p-10  lg:w-fit w-screen bg-base-100 shadow-xl rounded-xl">
            <div className="flex">
              <div className=" flex-1">
                <h2 className=" lg:text-2xl">Name: Tamanna Akter </h2>
                <h2 className=" lg:text-2xl">Email: atamanna577@gmail.com</h2>
                <h2 className=" lg:text-2xl">Education: B.sc in Computer Science and Engineering</h2>
                <h2 className=" lg:text-2xl">Skill: HTML, CSS, Bootstrap, Tailwind, JS, ReactJs, nodeJs, Mongodb, Firebase.</h2>
              </div>
            </div>
            <div className="mt-5">
              
              <p>My recent 3 Projects:</p>
              <a
                className=" text-blue-500 underline block "
                href={`https://e-tutor-dbd3e.web.app/`}
              >
              Live-site-link
              </a>
              <a
                className=" text-blue-500 underline block "
                href={`https://smartphones-warehouse.web.app/`}
              >
                Live-site-link
              </a>
              <a
                className=" text-blue-500 underline block "
                href={`https://react-router-assignment-a6f5b.netlify.app/`}
              >
                Live-site-link
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Portfolio;