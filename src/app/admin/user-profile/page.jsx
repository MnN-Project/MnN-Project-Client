"use client";
import React from "react";
import AdminContainer from "@/components/container/AdminContainer";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Radio from "@/components/ui/Radio";
import { cn } from "@/libs/utils";

const GridWrapper = ({ children, className, label, large }) => {
  return (
    <div
      className={cn(
        "mt-5 grid grid-cols-12 gap-y-1.5 sm:gap-x-5 sm:gap-y-0 w-full",
        className
      )}
    >
      <div
        className={`col-span-12 sm:col-span-4 ${
          large ? "lg:col-span-2" : "lg:col-span-3"
        } 2xl:col-span-2`}
      >
        <Label htmlFor={label} className="text-dark-gray capitalize">
          {label}
        </Label>
      </div>
      {/* End Col */}

      <div
        className={`col-span-12 sm:col-span-8 ${
          large ? "lg:col-span-8" : "lg:col-span-4"
        }`}
      >
        {children}
      </div>
      {/* End Col */}
    </div>
  );
};

const UserProfile = () => {
  return (
    <AdminContainer>
      <main>
        {/* Account Card */}
        <div className="mt-3 p-6 sm:p-8 rounded-lg bg-white border border-gray shadow shadow-gray">
          {/* Title */}
          <div className="mb-4 lg:mb-8">
            <h1 className="font-semibold text-[18px] text-dark">Profile</h1>
            <p className="text-sm text-dark-gray">
              Manage your name, password and account settings.
            </p>
          </div>
          {/* End Title */}

          {/* Form */}
          <form>
            {/* Avatar */}
            <div className="py-6 sm:py-8">
              {/* Grid */}
              <div className="grid gap-1.5 grid-cols-12 sm:gap-x-5 sm:gap-y-0">
                <div className="col-span-12 xl:col-span-3 sm:col-span-4 2xl:col-span-2">
                  <Label className="inline-block mt-2.5 text-sm text-dark-gray">
                    Avatar
                  </Label>
                </div>
                {/* End Col */}

                <div className="col-span-12 sm:col-span-8 xl:col-span-8">
                  {/* Logo Upload Group */}
                  <div className="flex items-center gap-3 sm:gap-5">
                    <span className="flex items-center justify-center shrink-0 w-20 h-20 rounded-full border-2 border-dotted border-gray">
                      <svg
                        className="shrink-0 block w-7 h-7 text-dark-gray"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="3"
                          rx="2"
                          ry="2"
                        />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                    </span>

                    <div className="grow">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="hover:bg-green text-white flex items-center gap-2 font-semibold text-[10px] sm:text-xs px-3 py-2 rounded-lg border border-transparent bg-light-green"
                        >
                          <svg
                            className="w-4 h-4 block shrink-0 text-white"
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
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" x2="12" y1="3" y2="15" />
                          </svg>
                          Upload photo
                        </button>
                        <button
                          type="button"
                          className="text-danger flex items-center gap-2 hover:bg-light-gray font-medium text-xs px-3 py-2 rounded-lg border border-gray"
                        >
                          Delete
                        </button>
                      </div>
                      <p className="mt-2 text-xs text-dark-gray">
                        Pick a photo up to 1MB.
                      </p>
                    </div>
                  </div>
                  {/* End Logo Upload Group */}
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
            </div>
            {/* End Avatar */}

            {/* Personal Info */}
            <div className="py-6 sm:py-8 border-t border-gray">
              <h2 className="font-semibold text-dark">Personal info</h2>

              {/* Grid */}
              <GridWrapper label="name">
                <Input
                  id="name"
                  className="w-full sm:mt-2.5 placeholder:text-dark-gray"
                  type="text"
                  placeholder="Enter full name"
                />

                <p className="text-sm mt-2 text-dark-gray">
                  Enter your full name, or a display name you are comfortable
                  with.
                </p>
              </GridWrapper>
              {/* End Grid */}

              {/* Grid */}
              <GridWrapper label="username">
                <Input
                  id="name"
                  className="w-full sm:mt-2.5 placeholder:text-dark-gray"
                  type="text"
                  placeholder="Enter username"
                />

                <p className="text-sm mt-2 text-dark-gray">
                  Enter your display name on Preline public forums.
                </p>
              </GridWrapper>
              {/* End Grid */}

              {/* Grid */}
              <GridWrapper label="email">
                <Input
                  id="email"
                  className="w-full sm:mt-2.5 placeholder:text-dark-gray"
                  type="text"
                  placeholder="@example.com"
                />

                <p className="text-sm mt-2 text-dark-gray">
                  Enter the email address you want to use to log in with MNN.
                </p>
              </GridWrapper>

              {/* End Grid */}

              {/* Grid */}
              <GridWrapper label="location">
                <Input
                  id="location"
                  className="w-full sm:mt-2.5 placeholder:text-dark-gray"
                  type="text"
                  placeholder="Enter Location"
                />
              </GridWrapper>
              {/* End Grid */}

              {/* Button Group */}
              <GridWrapper>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="text-sm font-semibold text-white bg-light-green hover:bg-green rounded-lg border border-transparent px-3 py-2"
                  >
                    Save changes
                  </button>
                  <button
                    type="button"
                    className="text-sm font-medium text-dark-gray rounded-lg border border-gray focus:bg-light-gray px-3 py-2"
                  >
                    Cancel
                  </button>
                </div>
              </GridWrapper>
              {/* End Button Group */}
            </div>
            {/* End Personal Info */}

            {/* Password */}
            <div className="py-6 sm:py-8 border-t border-gray">
              <div className="inline-flex items-center gap-2">
                <h2 className="font-semibold text-dark">Password</h2>
              </div>

              {/* Grid */}
              <GridWrapper label="current password">
                <Input
                  id="current password"
                  className="w-full sm:mt-2.5 placeholder:text-dark-gray"
                  type="text"
                  placeholder="Enter Current Password"
                />
              </GridWrapper>
              {/* End Grid */}

              {/* Grid */}
              <GridWrapper label="new password">
                <div className="space-y-2">
                  <Input
                    id="new password"
                    className="w-full sm:mt-2.5 placeholder:text-dark-gray"
                    type="text"
                    placeholder="Enter New Password"
                  />
                  <Input
                    id="Repeat New password"
                    className="w-full sm:mt-2.5 placeholder:text-dark-gray"
                    type="text"
                    placeholder="Repeat New Password"
                  />
                </div>

                <div className="flex items-center gap-2 mt-5">
                  <button
                    type="button"
                    className="text-sm font-semibold text-white bg-light-green hover:bg-green rounded-lg border border-transparent px-3 py-2"
                  >
                    Change
                  </button>
                  <a className="text-sm text-green font-semibold" href="#">
                    I forgot my password
                  </a>
                </div>
              </GridWrapper>
            </div>

            {/* Social Accounts */}
            <div className="py-6 sm:py-8 border-t border-gray">
              <div className="inline-flex items-center gap-2">
                <h2 className="font-semibold text-dark">Social accounts</h2>
              </div>
              <GridWrapper label="URL">
                <div className="space-y-2">
                  <Input
                    className="w-full sm:mt-2.5 placeholder:text-dark-gray"
                    type="text"
                    placeholder="Link to social profile"
                  />
                  <Input
                    className="w-full sm:mt-2.5 placeholder:text-dark-gray"
                    type="text"
                    placeholder="Link to social profile"
                  />
                  <Input
                    className="w-full sm:mt-2.5 placeholder:text-dark-gray"
                    type="text"
                    placeholder="Link to social profile"
                  />
                </div>
              </GridWrapper>
            </div>
            {/* End Social Accounts */}

            {/* Two-Step Verification */}
            <div className="py-6 sm:py-8 border-t border-gray">
              <div className="inline-flex items-center gap-2">
                <GridWrapper label=" Two-Step Verification">
                  {/* Alert */}
                  <div
                    className="p-4 text-green rounded-lg bg-green/10"
                    role="alert"
                  >
                    <div className="flex">
                      <svg
                        className="w-5 h-5 block shrink-0 mt-1"
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <div className="ms-3 dl857">
                        <h3 className="text-sm font-semibold">
                          Advanced security features are available on Enterprise
                        </h3>
                        <button
                          type="button"
                          className="mt-2 py-2 px-3 text-sm font-semibold text-white bg-light-green hover:bg-green rounded-lg border border-transparent flex items-center gap-2"
                        >
                          <svg
                            className="block shrink-0 w-4 h-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                          </svg>
                          Upgrade
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Alert */}
                </GridWrapper>
              </div>
            </div>
            {/* End Two-Step Verification */}

            {/* Disable Ads */}
            <div className="py-6 sm:py-8 border-t border-gray">
              <div className="inline-flex items-center gap-2">
                <GridWrapper
                  label={
                    <Label className="text-dark-gray">
                      Disable Ads
                      <span className="ml-1 px-1.5 py-0.5 bg-green text-white text-xs rounded-full">
                        PRO
                      </span>
                    </Label>
                  }
                >
                  <div className="mt-1.5 flex items-start">
                    <Radio />
                    <Label className="text-xs text-dark-gray ms-2">
                      With your Pro account, you can disable ads across the
                      site.
                    </Label>
                  </div>
                </GridWrapper>
              </div>
            </div>
            {/* End Disable Ads */}

            {/* Sessions */}
            <div className="py-6 sm:py-8 border-t border-gray">
              <div className="flex items-center gap-2">
                <GridWrapper label="Sessions" large>
                  {/* Grid */}
                  <div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
                    {/* Card */}
                    <SessionCard current device="Chrome OS">
                      <li className="flex justify-between items-center">
                        <span className="text-xs uppercase text-dark-gray">
                          Location:
                        </span>
                        <span className="text-sm font-medium">Nigeria</span>
                      </li>

                      <li className="flex justify-between items-center">
                        <span className="text-xs uppercase text-dark-gray">
                          Device:
                        </span>
                        <span className="text-sm font-medium">
                          Safari - iOS
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-xs uppercase text-dark-gray">
                          IP address:
                        </span>
                        <span className="text-sm font-medium">
                          129.562.028.172
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-xs uppercase text-dark-gray">
                          Recent activity:
                        </span>
                        <span className="text-sm font-medium">
                          5 minutes ago
                        </span>
                      </li>
                    </SessionCard>
                    {/* End Card */}

                    {/* Card */}
                    <SessionCard device="Mozilla Firefox">
                      <li className="flex justify-between items-center">
                        <span className="text-xs uppercase text-dark-gray">
                          Location:
                        </span>
                        <span className="text-sm font-medium">Nigeria</span>
                      </li>

                      <li className="flex justify-between items-center">
                        <span className="text-xs uppercase text-dark-gray">
                          Device:
                        </span>
                        <span className="text-sm font-medium">
                          Safari - iOS
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-xs uppercase text-dark-gray">
                          IP address:
                        </span>
                        <span className="text-sm font-medium">
                          129.562.028.172
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-xs uppercase text-dark-gray">
                          Recent activity:
                        </span>
                        <span className="text-sm font-medium">1 Month ago</span>
                      </li>
                    </SessionCard>
                    {/* End Card */}

                    {/* Card */}
                    <SessionCard device="iPad PRO">
                      <li className="flex justify-between items-center">
                        <span className="text-xs uppercase text-dark-gray">
                          Location:
                        </span>
                        <span className="text-sm font-medium">Nigeria</span>
                      </li>

                      <li className="flex justify-between items-center">
                        <span className="text-xs uppercase text-dark-gray">
                          Device:
                        </span>
                        <span className="text-sm font-medium">
                          Safari - iOS
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-xs uppercase text-dark-gray">
                          IP address:
                        </span>
                        <span className="text-sm font-medium">
                          129.562.028.172
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-xs uppercase text-dark-gray">
                          Recent activity:
                        </span>
                        <span className="text-sm font-medium">2 days ago</span>
                      </li>
                    </SessionCard>
                    {/* End Card */}
                  </div>
                  {/* End Grid */}
                </GridWrapper>
              </div>
            </div>
            {/* End Sessions */}

            {/* Danger Zone */}
            <div className="py-6 sm:py-8 border-t border-gray">
              <div className="flex items-center gap-2">
                <GridWrapper label="Danger Zone">
                  <button
                    type="button"
                    className="text-danger flex items-center gap-2 font-medium text-xs px-3 py-2 rounded-lg border border-gray hover:bg-light-gray"
                  >
                    Delete my account
                  </button>

                  <p className="text-sm text-dark-gray mt-3">
                    This will immediately delete all of your data. This action
                    is not reversible, so please continue with caution.{" "}
                    <a className="text-green font-semibold" href="#">
                      Learn more
                    </a>
                  </p>
                </GridWrapper>
              </div>
            </div>
            {/* End Danger Zone */}
          </form>
          {/* End Form */}
        </div>
        {/* End Account Card */}
      </main>
    </AdminContainer>
  );
};

const SessionCard = ({ children, current, device }) => {
  return (
    <div className="flex flex-col border border-gray rounded-lg p-5 col-span-1">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex items-center justify-center w-[38px] h-[38px] border border-gray rounded-lg">
          <svg
            className="block shrink-0 w-5 h-5 text-dark-gray"
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
            <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
          </svg>
        </div>

        <button
          type="button"
          className="flex items-center rounded-lg px-3 py-2 text-dark text-sm hover:bg-light-gray border border-gray gap-2"
        >
          <svg
            className="shrink-0 w-3 h-3"
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
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>
          Sign out
        </button>
      </div>
      {/* End Header */}

      {/* Heading */}
      <div className="flex items-center justify-between mt-4">
        <span className="font-medium text-dark">{device}</span>
        {current ? (
          <span className="text-[10px] text-green bg-green/10 inline-flex items-center rounded-full gap-1.5 py-0.5 px-1 font-semibold">
            Current session
          </span>
        ) : (
          <span className="text-[10px] text-dark bg-gray inline-flex items-center rounded-full gap-1.5 py-0.5 px-1 font-semibold">
            Expired
          </span>
        )}
      </div>
      {/* End Heading */}

      {/* List Group */}
      <ul className="mt-4 space-y-2">{children}</ul>
      {/* End List Group */}

      <button
        type="button"
        className="mt-4 inline-flex items-center justify-center gap-2 text-sm px-3 py-2 border border-gray rounded-lg hover:bg-light-gray"
      >
        <svg
          className="block shrink-0 w-4 h-4"
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
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        Don’t recognize something?
      </button>
    </div>
  );
};

export default UserProfile;
