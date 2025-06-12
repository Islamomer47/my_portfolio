import React from "react";

const SkillTags = () => (
  <div className="max-w-5xl mx-auto px-6 py-20">
    <div className="flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 relative">
          <span className="bg-yellow-200 px-2 py-1 -ml-2">I make sure</span>{" "}
          your idea & creation
          <br />
          delivered properly
        </h2>
        <div className="h-1 w-16 bg-pink-400 mb-6"></div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A web developer with a strong foundation in front-end and back-end
          development, honed through an intensive course at Orange Coding
          Academy. Currently in my fourth year of the Computer Information
          Systems program at Hashemite University.
        </p>
        <p className="text-gray-700 leading-relaxed">
          My experience includes building 10 impactful projects such as an
          integrated entertainment platform for streaming movies, an e-event
          management and ticketing system, and a strategic platform for managing
          local and regional elections.
        </p>
      </div>
      <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-inner">
        <p className="text-gray-700 mb-4 leading-relaxed">
          My projects included many features such as payment methods via PayPal
          and Stripe, dealing with artificial intelligence by creating a system
          for answering questions and auto-responders, as well as creating a
          chat system in addition to a live broadcast system.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Through working within organized teams where I was a scrum master,
          product owner, and quality assurance, I gained a lot of skills and
          experience. I am proficient in JavaScript, React, Node.js, Firebase,
          and PostgreSQL.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "Node.js", "JavaScript", "Firebase", "PostgreSQL"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-pink-200 text-black px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  </div>
);

export default SkillTags;
