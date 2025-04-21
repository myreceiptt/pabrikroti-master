// /src/components/sections/ReusableLoader.tsx

// External libraries
import React from "react";

// Blockchain configurations
import { colorAccent } from "@/config/myreceipt";

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => (
  <h2 style={{ color: colorAccent }} className="text-left text-sm font-medium">
    {message}
  </h2>
);

export default Loader;
