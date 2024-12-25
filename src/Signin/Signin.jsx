import React, { useState } from "react";
import { Link } from "react-router";

const Signin = () => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <div className="bg-bg4 flex flex-col gap-8 items-center py-20 w-[720px]  mx-auto">
      <div className="border border-solid border-br1 rounded-xl mx-auto w-[100%] max-w-[95%] h-[560px] whitespace-nowrap">
        <div className="py-9 px-4 border border-solid border-b-br2 rounded-t-xl flex flex-col gap-5 items-center">
          <div className="lg:w-[210px] flex items-center gap-[11px] text-lg">
            <img src="/logo.png" alt="logo" />
            <h2 className="text-[30px] text-c1 leading-7">CodeAnt AI</h2>
          </div>
          <h2 className="text-2xl text-c1 font-semibold">
            Welcome to CodeAnt AI
          </h2>
          <div>
            <div className={`flex items-center cursor-pointer`}>
              <p
                className={`text-xl font-semibold leading-7  text-c2 ${
                  isSelected ? "bg-bg2 text-white" : ""
                } py-3 px-14 border-2 border-solid rounded-lg`}
                onClick={() => setIsSelected(true)}
              >
                SAAS
              </p>
              <p
                className={`text-xl font-semibold leading-7 text-c2  ${
                  isSelected ? "" : "bg-bg2 text-white"
                } py-3 px-10 border-2 border-solid rounded-lg`}
                onClick={() => setIsSelected(false)}
              >
                Self Hosted
              </p>
            </div>
          </div>
        </div>
        {isSelected ? (
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to={"/repositories"}>
              <p className="flex items-center gap-4 text-c5 font-semibold leading-6 border border-br4 rounded-lg py-4 px-20 ">
                <span>
                  <img src="/images/github.png" alt="" />
                </span>
                Sign in with Github
              </p>
            </Link>
            <Link to={"/repositories"}>
              <p className="flex items-center gap-4 text-c5 font-semibold leading-6 border border-br4 rounded-lg py-4 px-20 ">
                <span>
                  <img src="/images/bitbucket.png" alt="" />
                </span>
                Sign in with Bitbucket
              </p>
            </Link>
            <Link to={"/repositories"}>
              <p className="flex items-center gap-4 text-c5 font-semibold leading-6 border border-br4 rounded-lg py-4 px-20 ">
                <span>
                  <img src="/images/azuredevops.png" alt="" />
                </span>
                Sign in with Azure Devops
              </p>
            </Link>
            <Link to={"/repositories"}>
              <p className="flex items-center gap-4 text-c5 font-semibold leading-6 border border-br4 rounded-lg py-4 px-20 ">
                <span>
                  <img src="/images/gitlab.png" alt="" />
                </span>
                Sign in with GitLab
              </p>
            </Link>
          </div>
        ) : (
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to={"/repositories"}>
              <p className="flex items-center gap-4 text-c5 font-semibold leading-6 border border-br4 rounded-lg py-4 px-20 ">
                <span>
                  <img src="/images/gitlab.png" alt="" />
                </span>
                Self Hosted GitLab
              </p>
            </Link>
            <Link to={"/repositories"}>
              <p className="flex items-center gap-4 text-c5 font-semibold leading-6 border border-br4 rounded-lg py-4 px-20 ">
                <span>
                  <img src="/images/key.png" alt="" />
                </span>
                Sign in with SSO
              </p>
            </Link>
          </div>
        )}
      </div>

      <p className="text-c1">
        By signing up you agree to the{" "}
        <span className="font-bold">Privacy Policy.</span>
      </p>
    </div>
  );
};

export default Signin;
