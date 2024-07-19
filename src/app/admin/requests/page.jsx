"use client";
import AdminContainer from "@/components/container/AdminContainer";
import { Pagination } from "@/components/ui/Table";
import Image from "next/image";
import { useState, useRef } from "react";
import { number } from "yup";

const Requests = () => {
  const data = [
    {
      name: "Matthew",
      editTime: "Edited a minute ago",
      editor: "Ernest MNN",
      image:
        "https://images.unsplash.com/photo-1719952167462-b78f82215119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
    {
      name: "Liaison",
      editTime: "Henry 30 minute ago",
      editor: "Ernest MNN",
      image:
        "https://images.unsplash.com/photo-1719836667976-c13531c60b97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rhoda",
      editTime: "Edited an hour ago",
      editor: "Loretta MNN",
      image:
        "https://images.unsplash.com/photo-1719917525997-5a1be9bf7ce1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <AdminContainer>
      <div className="flex flex-col rounded-lg border border-gray bg-white shadow p-3 sm:p-5">
        {/* Header */}
        <div className="flex justify-between items-center gap-2">
          <h2 className="font-semibold text-dark">9 results</h2>

          {/* Button Group */}
          <div className="flex items-center p-1 border border-gray rounded-lg">
            <a
              className="inline-flex w-[30px] h-[30px] shrink-0 items-center justify-center rounded-lg"
              href="#"
            >
              <svg
                className="shrink-0 block w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            </a>
            <a
              className="inline-flex w-[30px] h-[30px] shrink-0 items-center justify-center rounded-lg"
              href="#"
            >
              <svg
                className="shrink-0 block w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </a>
          </div>
          {/* End Button Group */}
        </div>
        {/* End Header */}
        {data.map((item, index) => (
          <ListItemCard key={index} index={index} />
        ))}

        {/* Footer */}
        <Pagination />
        {/* End Footer */}
      </div>
    </AdminContainer>
  );
};


const ListItemCard = ({ index }) => {
  const [toggle, setToggle] = useState(null); 
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setToggle((prevState) => (prevState === index ? null : index));

    const handleExternalInteraction = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(null);
        document.removeEventListener('mousedown', handleExternalInteraction);
      }
    };

    if (toggle !== index) {
      document.addEventListener('mousedown', handleExternalInteraction);
    }
  };

  return (
    <div className="mt-4">
      {/* User Connection List Card */}
      <div className="p-4 border border-gray rounded-lg">
        <div className="relative sm:flex sm:justify-between sm:gap-4">
          <div>
            {/* Media */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <Image
                    width={46}
                    height={46}
                    className="block rounded-full sm:w-[46px] sm:h-[46px] max-w-full mx-auto shrink-0 w-9 h-9"
                    src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=320&amp;h=320&amp;q=80"
                    alt="img"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col grow">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="font-medium text-dark">Anna Richard</h3>
                  </div>

                  <div className="inline-flex items-center gap-2">
                    <svg
                      className="block shrink-0 w-4 h-4 text-dark-gray"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                      <path d="M10 6h4"></path>
                      <path d="M10 10h4"></path>
                      <path d="M10 14h4"></path>
                      <path d="M10 18h4"></path>
                    </svg>
                    <p className="text-xs sm:text-sm text-dark-gray">
                      Guideline
                    </p>
                  </div>
                </div>
                {/* End Content */}
              </div>
            </div>
            {/* End Media */}
          </div>
          {/* End Col */}

          <div className="mt-2 flex items-center sm:mt-0">
            <div className="flex justify-end items-center gap-4">
              {/* More Dropdown */}
              <div className="relative inline-flex" ref={dropdownRef}>
                <button
                  onClick={handleToggle}
                  type="button"
                  className="w-7 h-7 inline-flex justify-center items-center rounded-lg hover:bg-light-gray"
                >
                  <svg
                    className="w-4 h-4 shrink-0 block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </button>

                {/* Dropdown */}
                <div
                  className={`z-10 absolute top-8 right-3 block w-40 rounded-lg bg-white ring-1 ring-gray transition-[opacity,margin] ${
                    toggle === index ? "block opacity-1" : "hidden opacity-0"
                  } duration-200 shadow`}
                >
                  <div className="p-1">
                    <button
                      type="button"
                      className="flex items-center gap-2 w-full py-1.5 text-xs px-2 rounded-lg hover:bg-light-gray"
                    >
                       <svg
                          className="block shrink-0 w-4 h-4 text-dark-gray"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line
                            x1="8.59"
                            x2="15.42"
                            y1="13.51"
                            y2="17.49"
                          ></line>
                          <line
                            x1="15.41"
                            x2="8.59"
                            y1="6.51"
                            y2="10.49"
                          ></line>
                        </svg>
                        Share connection
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-2 w-full py-1.5 text-xs px-2 rounded-lg hover:bg-light-gray"
                    >
                      <svg
                          className="block shrink-0 w-4 h-4 text-dark-gray"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                          <line x1="2" x2="22" y1="2" y2="22"></line>
                        </svg>
                        Hide connection
                    </button>
                  </div>
                </div>
                {/* End Dropdown */}
              </div>
              {/* End More Dropdown */}
            </div>
          </div>
          {/* End Col */}
        </div>
      </div>
      {/* End User Connection List Card */}
    </div>
  );
};

export default Requests;
