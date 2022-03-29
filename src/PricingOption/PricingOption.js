import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded text-xl font-bold">{name}</h2>
      <p>
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500">/month</span>
      </p>
      <div>
        <h3 className="text-2xl mt-4 text-left">Benifits:</h3>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
        <button className="bg-green-500 flex w-full justify-center py-2 rounded mt-4 text-white font-bold hover:bg-green-700">
          Buy Now <ArrowRightIcon className="w-6 h-6 ml-3 "></ArrowRightIcon>
        </button>
      </div>
    </div>
  );
};

export default PricingOption;
