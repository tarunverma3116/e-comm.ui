import * as React from "react";

interface IGlobalLoaderProps {
  children: React.ReactNode;
}

// component that wait for some global fundamental data to load
const GlobalLoader: React.FunctionComponent<IGlobalLoaderProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export default GlobalLoader;
