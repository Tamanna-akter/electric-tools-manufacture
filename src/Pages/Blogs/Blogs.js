import React from 'react';

const Blogs = () => {
    return (
        <div className=" flex justify-center">
      <div className=" w-full px-5">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              1. How will you improve the performance of a React Application?
            </h2>
            <p className=" mb-10">
              Answer: React enables web applications to update their user interfaces  quickly, but that does not mean your medium or large React application will perform efficiently. Its performance will depend on how you use React when building it, and on your understanding of how React operates and the process through which components live through the various phases of their lifecycle. React offers a lot of performance improvements to a web app, and you can achieve these improvements through various techniques, features, and tools.During the initial rendering process, React builds a DOM tree of components. So, when data changes in the DOM tree, we want React to re-render only those components that were affected by the change, skipping the other components in the tree that were not affected.
            </p>
            <h2 className="card-title">
              2. What are the different ways to manage a state in a React
              application?
            </h2>
            <p className=" mb-10">
              Answer: There are four main types of state you need to properly manage in your React apps:

                    *Local state
                    *Global state
                    *Server state
                    *URL state
                    Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
            </p>
            <h2 className="card-title">
              3. How does prototypical inheritance work?
            </h2>
            <p className=" mb-5">
              Answer: Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
            </p>
            <p className=" mb-15"></p>
            <h2 className="card-title">
              4. You have an array of products. Each product has a name,
              price, description, etc. How will you implement a search to find
              products by name?
            </h2>
            <p className=" mb-5">
              {`Answer: 
const products = [
  {
    name: "books",
    price: 200,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nam.",
  },
  {
    name: "pen ",
    price: 5,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nam.",
  },
  {
    name: "laptop",
    price: 1000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nam.",
  },
  {
    name: "desktop",
    price: 2000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nam.",
  },
];
const search = "pen";
products.forEach((product) => {
  if (product.name.includes(search)) {
    console.log(product);
  }
});`}
            </p>
            <h2 className="card-title">
              5. What is a unit test? Why should write unit tests?
            </h2>
            <p className=" mb-10">
              Answer: Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. Developers write unit tests so they can repeatedly run them and check that no bugs have been introduced. If unit tests are slow, developers are more likely to skip running them on their own machines. One slow test won't make a significant difference; add one thousand more and we're surely stuck waiting for a while.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blogs;