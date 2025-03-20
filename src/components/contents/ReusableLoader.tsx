// /src/components/contents/ReusableLoader.tsx

// External libraries
import React from "react";

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => (
  <h2 className="text-left text-sm font-medium text-icon-wording">{message}</h2>
);

export default Loader;
