import React from "react";
import ShapeDecoration from "../home/ShapeDecoration";

const ServicesSection = () => {
  return (
    <div className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Purple Indicator */}
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3 shadow-md animate-bounce">
            <span className="text-white text-sm font-semibold">⚡</span>
          </div>
          <span className="text-gray-700 text-base font-medium">
            What I Offer
          </span>
        </div>

        {/* Shape Decoration (Added here) */}
        <ShapeDecoration className="bottom-10 left-16 sm:left-30 transform rotate-90" />

        {/* Headline */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Building Scalable Solutions &{" "}
          <span className="text-purple-600">Empowering Developers</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          As a <strong>full-stack developer, consultant, and educator</strong>,
          I help businesses and individuals achieve their digital goals—whether
          through
          <strong>custom software</strong>,{" "}
          <strong>high-performance applications</strong>, or{" "}
          <strong>practical programming education</strong>.
        </p>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="mb-6 bg-purple-100 rounded-lg p-4">
                {/* <img
                  src="/api/placeholder/300/200"
                  alt="Full-Stack Development"
                  className="w-full h-40 object-cover rounded"
                /> */}
              </div>
              <h3 className="font-bold text-xl mb-3">
                Full-Stack Web Development
              </h3>
              <p className="text-gray-600 text-sm">
                I build <strong>scalable, high-performance</strong> web
                applications using
                <strong>
                  React, Node.js, PostgreSQL, Firebase, and MongoDB
                </strong>
                . From front-end interfaces to back-end logic, I develop
                <strong>fast, interactive, and secure</strong> applications
                tailored to your needs.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="mb-6 bg-purple-100 rounded-lg p-4">
                {/* <img
                  src="/api/placeholder/300/200"
                  alt="Custom Software Solutions"
                  className="w-full h-40 object-cover rounded"
                /> */}
              </div>
              <h3 className="font-bold text-xl mb-3">
                Custom Software & Consulting
              </h3>
              <p className="text-gray-600 text-sm">
                Need a <strong>custom-built solution</strong> for your business?
                I design, develop, and optimize{" "}
                <strong>software applications</strong> tailored to your industry
                needs. From <strong>tech stack selection</strong> to
                <strong>scalable system architecture</strong>, I provide expert
                consulting to help you build efficient,{" "}
                <strong>future-proof applications</strong>.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="mb-6 bg-purple-100 rounded-lg p-4">
                {/* <img
                  src="/api/placeholder/300/200"
                  alt="Programming Education"
                  className="w-full h-40 object-cover rounded"
                /> */}
              </div>
              <h3 className="font-bold text-xl mb-3">
                Programming Education & Mentorship
              </h3>
              <p className="text-gray-600 text-sm">
                Learning programming should be{" "}
                <strong>practical and engaging</strong>. I offer structured{" "}
                <strong>one-on-one and group lessons</strong> in
                <strong>
                  full-stack development, data structures, and algorithms
                </strong>
                . I also mentor students on <strong>graduation projects</strong>
                , ensuring they
                <strong>build and understand</strong> their own projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
