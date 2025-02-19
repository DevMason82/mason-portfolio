"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        shallowRouting
        color="#fffd00"
        height="4px"
        options={{ showSpinner: false }}
      />
    </>
  );
};

export default Providers;
