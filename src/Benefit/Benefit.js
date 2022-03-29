import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

const Benefit = (props) => {
  return (
    <p className="flex items-center">
      <CheckCircleIcon className="w-6 h-6 text-green-500 mt-2 mr-2"></CheckCircleIcon>
      {props.benefit}
    </p>
  );
};

export default Benefit;
