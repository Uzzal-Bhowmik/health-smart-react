import React from "react";
import "./DynamicService.css";
import { useLoaderData } from "react-router-dom";

const DynamicService = () => {
  const serviceData = useLoaderData();
  console.log(serviceData);
  return <div></div>;
};

export default DynamicService;
