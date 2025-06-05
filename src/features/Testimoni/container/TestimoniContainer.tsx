import React from "react";
import TestimoniCard from "../components/TestimoniCard";
import { testimoniData } from "../data/tesimoni";

const TestimoniContainer = () => {
  return (
    <section className="min-h-[40rem] font-sfpro testimonibg">
      <div className="mycontainer py-20">
        <h4 className="text-center text-4xl font-bold">What Our Client Say</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
          {testimoniData.map((item, index) => (
            <TestimoniCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniContainer;
