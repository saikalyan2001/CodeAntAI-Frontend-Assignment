import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import Repository from "../Components/ReusableComponents/Repository";

const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const respositoryData = [
    {
      title: "design-system",
      visiblility: "Public",
      language: "React",
      size: "7320 KB",
      time: "Updated 1 day ago",
    },
    {
      title: "codeant-ci-app",
      visiblility: "Private",
      language: "Javascript",
      size: "5871 KB",
      time: "Updated 2 days ago",
    },
    {
      title: "analytics-dashboard",
      visiblility: "Private",
      language: "Python",
      size: "4521 KB",
      time: "Updated 5 days ago",
    },
    {
      title: "mobile-app",
      visiblility: "Public",
      language: "Swift",
      size: "3096 KB",
      time: "Updated 3 days ago",
    },
    {
      title: "e-commerce-platform",
      visiblility: "Private",
      language: "Java",
      size: "6210 KB",
      time: "Updated 6 days ago",
    },
    {
      title: "blog-website",
      visiblility: "Public",
      language: "HTML/CSS",
      size: "1876 KB",
      time: "Updated 4 days ago",
    },
    {
      title: "social-network",
      visiblility: "Private",
      language: "PHP",
      size: "5432 KB",
      time: "Updated 7 days ago",
    },
  ];

  const filteredRepositories = respositoryData.filter((repo) => {
    const valuesToSearch = Object.values(repo).join(" ").toLowerCase();
    return valuesToSearch.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="bg-white lg:rounded-xl w-[100%]  lg:border border-solid border-[#E9EAEB] lg:my-6 lg:mx-6">
      <div className="py-6 px-3 lg:px-6 border-b border-solid border-br1 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-2 justify-between">
          <div>
            <h2 className="text-2xl text-c1 font-semibold">Repositories</h2>
            <span className="text-sm text-c2">33 total repositories</span>
          </div>
          <div className="flex gap-3">
            <button
              className="border border-br2 rounded-md py-[10px] px-[14px] flex items-center gap-2 text-sm text-c2"
              onClick={() => window.location.reload()}
            >
              {" "}
              <span className="text-c2">
                <FiRefreshCw />
              </span>{" "}
              Refresh All
            </button>
            <button className="border border-br2 rounded-md py-[10px] px-[14px] flex items-center gap-2 text-sm text-white bg-bg2">
              {" "}
              <span className="text-xl">
                <FiPlus />
              </span>{" "}
              Add Respository{" "}
            </button>
          </div>
        </div>
        <div className="flex items-center w-[366px] relative">
          <IoIosSearch className="text-2xl text-c2 absolute ml-3" />
          <input
            type="text"
            placeholder="Search Repositories"
            className="py-[10px] px-[14px] placeholder-c2 border border-br2 rounded-md text-c2 pl-12 w-[100%] max-w-[100%] mx-auto"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div>
        {filteredRepositories.map((data, index) => (
          <Repository key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Repositories;
