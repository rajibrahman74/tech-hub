import React from "react";
import bgOne from "../assets/All Images/Vector.png";
import bgTwo from "../assets/All Images/Vector-1.png";
import ContextapiE1 from "../assets/Blog-example-img/contextapiE1.png";
import Contextapi2 from "../assets/Blog-example-img/contexapiE2.png";
import ContextapiE3 from "../assets/Blog-example-img/contextapiE3.png";
import CustomehookE1 from "../assets/Blog-example-img/customehookE1.png";
import CustomehookE2 from "../assets/Blog-example-img/customehookE2.png";
import UserefE1 from "../assets/Blog-example-img/userefE1.png";
import UsememoE from "../assets/Blog-example-img/usememoE.png";

const Blog = () => {
  return (
    <section>
      <style>
        {`.liner-gradient {
          background: linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%);
        }`}
      </style>
      <div className="jobDetails h-[298px] flex justify-center items-center liner-gradient">
        <img
          className="absolute top-0 right-0 bg-no-repeat"
          src={bgTwo}
          alt=""
        />
        <h1 className="text-[#1A1919] text-3xl font-extrabold">Blogs</h1>
        <img className="absolute left-0 top-[151px]" src={bgOne} alt="" />
      </div>

      <div className="max-w-7xl mt-8 mb-12 mx-auto flex flex-col gap-16 px-4">
        <div className="p-5 shadow-md rounded-md flex flex-col gap-8">
          <p className="text-xl font-bold">
            1. When should you use context API?
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-lg">
              <span className="font-bold">context API:</span> Context API is a
              useful feature provided by React that allows data to be passed
              down the component tree without the need to manually pass it as
              props through every level. It can be useful in various situation.
            </p>
            <p className="font-bold">Example:</p>
            <div className="flex flex-col justify-start gap-5">
              <span className="">
                <img className="rounded-md" src={ContextapiE1} alt="" />
              </span>
              <span>
                <img className="rounded-md" src={Contextapi2} alt="" />
              </span>
              <span>
                <img className="rounded-md" src={ContextapiE3} alt="" />
              </span>
            </div>
          </div>
          <p className="text-lg">
            In general, if you have data that needs to be accessed by multiple
            components across the component tree and you don't want to manually
            pass it down through every level, then Context API may be a good
            solution for your use case.
          </p>
        </div>

        <div className="p-5 shadow-md rounded-md flex flex-col gap-6">
          <p className="text-xl font-bold">2. What is a custom hook?</p>
          <div className="flex flex-col gap-3">
            <p className="text-lg">
              <span className="font-bold">Custom hook:</span> A custom hook is a
              JavaScript function that uses one or more of the built-in React
              hooks (such as useState, useEffect, useContext, etc.) to
              encapsulate reusable logic in a simple and reusable way. Custom
              hooks allow you to abstract away complex logic and state
              management from your components and reuse it across multiple
              components, reducing code duplication and making your code more
              organized and easier to maintain.
            </p>
            <p className="font-bold">Example:</p>
            <div className="flex flex-col justify-normal gap-5">
              <span>
                <img className="rounded-md" src={CustomehookE1} alt="" />
              </span>
              <span>
                <img className="rounded-md" src={CustomehookE2} alt="" />
              </span>
            </div>
          </div>
        </div>

        <div className="p-5 shadow-md rounded-md flex flex-col gap-6">
          <p className="text-xl font-bold">3. What is useRef?</p>
          <div className="flex flex-col gap-3">
            <p className="text-lg">
              <span className="font-bold">useRef:</span> useRef is a built-in
              React hook that allows you to create a mutable reference to a DOM
              element or a value that persists across renders. It returns an
              object with a single current property that can be used to store
              and retrieve the current value of the reference.
            </p>
            <p className="font-bold">Example:</p>
            <span>
              <img className="rounded-md" src={UserefE1} alt="" />
            </span>
          </div>
          <p className="text-lg">
            In this example, we're using useRef to create a new reference called
            inputRef and initializing it to null. We're then passing the
            inputRef reference to the ref attribute of the input element, which
            allows us to access the actual DOM element via the current property
            of the reference.
          </p>
        </div>

        <div className="p-5 shadow-md rounded-md flex flex-col gap-6">
          <p className="text-xl font-bold">4. What is useMemo?</p>
          <div className="flex flex-col gap-3">
            <p className="text-lg">
              <span className="font-bold">useMemo:</span> useMemo is a hook in
              React that allows you to memoize the result of a function and only
              recompute it when one of its dependencies has changed.
            </p>
            <p className="font-bold">Example:</p>
            <span>
              <img className="rounded-md" src={UsememoE} alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;