import React from "react";
import { FaHeadset, FaLock, FaShieldAlt } from "react-icons/fa";

function SuccessfullSection() {
  return (
    <section className="pt-16 relative top-6  ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          WHY ARE WE SO SUCCESSFUL?
        </h2>

        <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto mb-8">
          Here are 3 powerful reasons to choose us:
        </p>

        {/* 3 adet kutucuk */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* 1. Kutu */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-center mb-4 text-4xl text-red-500">
              <FaShieldAlt />
            </div>
            <h3 className="text-lg font-semibold">100% Buyer Guarantee</h3>
            <p className="text-sm text-gray-600 mt-2">
              Full refund if you don&apos;t get your tickets
            </p>
          </div>

          {/* 2. Kutu */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-center mb-4 text-4xl text-red-500">
              <FaLock />
            </div>
            <h3 className="text-lg font-semibold">
              Protected and reliable transactions
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Your personal information will always be secure
            </p>
          </div>

          {/* 3. Kutu */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-center mb-4 text-4xl text-red-500">
              <FaHeadset />
            </div>
            <h3 className="text-lg font-semibold">
              Comprehensive customer support
            </h3>
            <p className="text-sm text-gray-600 mt-2">Available 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessfullSection;
