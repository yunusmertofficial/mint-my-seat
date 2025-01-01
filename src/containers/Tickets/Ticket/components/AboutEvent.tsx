import { FC } from "react";

const AboutEvent: FC<{ description: string }> = ({ description }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-4">Event Information</h2>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

export default AboutEvent;
