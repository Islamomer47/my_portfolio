import React, { useState } from "react";
import thumbnail from "../../assets/aboutme.png";

const Video = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Highlights from My Coding Adventure
          </h2>
          <div className="h-1 w-24 bg-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Take a glimpse into my journey as a developer — from overcoming
            challenges to building real-world projects. Each moment has shaped
            my skills and passion for code.
          </p>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-pink-600/20"></div>

          {videoPlaying ? (
            <video
              controls
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/dfqpf2szg/video/upload/v1749727486/vd_nyasjk.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <>
              <img
                src={thumbnail}
                alt="Coding adventure thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
                >
                  ▶
                </button>
              </div>
            </>
          )}

          {videoPlaying && (
            <button
              onClick={() => setVideoPlaying(false)}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center z-10"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
