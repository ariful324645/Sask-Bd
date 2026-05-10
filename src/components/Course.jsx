import React, { useState } from "react";
import {
  PlayCircle,
  CheckCircle2,
  Lock,
  Unlock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Course = () => {
  const [unlocked, setUnlocked] = useState(false);

  const [selectedVideo, setSelectedVideo] = useState({
    title: "Premium React Introduction",
    video: "https://www.youtube.com/embed/bMknfKXIFA8",
  });

  const [openModule, setOpenModule] = useState(0);

  const modules = [
    {
      id: 1,
      title: "Module 1 : HTML Basics",
      milestone: "Milestone 1",
      lessons: [
        {
          title: "HTML Introduction",
          duration: "5 min",
          video: "https://www.youtube.com/embed/UB1O30fR-EE",
        },
        {
          title: "HTML Tags",
          duration: "5 min",
          video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        },
      ],
    },

    {
      id: 2,
      title: "Module 2 : CSS Design",
      milestone: "Milestone 2",
      lessons: [
        {
          title: "CSS Introduction",
          duration: "5 min",
          video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
        },
        {
          title: "Flexbox Design",
          duration: "5 min",
          video: "https://www.youtube.com/embed/JJSoEo8JSnc",
        },
      ],
    },

    {
      id: 3,
      title: "Module 3 : React JS",
      milestone: "Milestone 3",
      lessons: [
        {
          title: "React Introduction",
          duration: "5 min",
          video: "https://www.youtube.com/embed/bMknfKXIFA8",
        },
        {
          title: "React Router",
          duration: "5 min",
          video: "https://www.youtube.com/embed/Law7wfdg_ls",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5 md:p-8">
      {/* Top Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-600">
          Full Stack Development Course
        </h1>

        <p className="text-gray-600 mt-3">
          Learn MERN Stack Step by Step with Modules & Milestones
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Video Section */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-5">
          {/* Lock Overlay */}
          {!unlocked && (
            <div className="relative">
              <div className="absolute inset-0 bg-black/70 z-10 rounded-2xl flex flex-col items-center justify-center text-white">
                <Lock size={50} />

                <h2 className="text-2xl font-bold mt-4">Course Locked</h2>

                <p className="text-sm mt-2 text-center px-4">
                  Watch locked premium videos by unlocking the course.
                </p>

                <button
                  onClick={() => setUnlocked(true)}
                  className="mt-5 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl flex items-center gap-2 transition"
                >
                  <Unlock size={20} />
                  Open Lock Video
                </button>
              </div>

              <iframe
                className="w-full h-[250px] md:h-[500px] rounded-2xl"
                src={selectedVideo.video}
                title="Course Video"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Unlocked Video */}
          {unlocked && (
            <iframe
              className="w-full h-[250px] md:h-[500px] rounded-2xl"
              src={selectedVideo.video}
              title="Course Video"
              allowFullScreen
            ></iframe>
          )}

          {/* Video Info */}
          <div className="mt-5">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedVideo.title}
            </h2>

            <div className="flex gap-3 mt-4 flex-wrap">
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition">
                Continue Learning
              </button>

              <button className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-xl hover:bg-indigo-50 transition">
                Download Notes
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-white rounded-3xl shadow-xl p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Course Modules
          </h2>

          <div className="space-y-4">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className="border rounded-2xl overflow-hidden"
              >
                {/* Module Header */}
                <button
                  onClick={() =>
                    setOpenModule(openModule === index ? null : index)
                  }
                  className="w-full flex justify-between items-center bg-indigo-50 px-4 py-4"
                >
                  <div className="text-left">
                    <h3 className="font-bold text-gray-800">{module.title}</h3>

                    <p className="text-sm text-gray-500">{module.milestone}</p>
                  </div>

                  {openModule === index ? (
                    <ChevronUp className="text-indigo-600" />
                  ) : (
                    <ChevronDown className="text-indigo-600" />
                  )}
                </button>

                {/* Lessons */}
                {openModule === index && (
                  <div className="p-3 space-y-3">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        onClick={() => {
                          if (unlocked) {
                            setSelectedVideo({
                              title: lesson.title,
                              video: lesson.video,
                            });
                          }
                        }}
                        className={`flex justify-between items-center p-3 rounded-xl transition ${
                          unlocked
                            ? "cursor-pointer hover:bg-indigo-100 bg-gray-50"
                            : "bg-gray-100 cursor-not-allowed"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {unlocked ? (
                            <PlayCircle className="text-indigo-600" />
                          ) : (
                            <Lock className="text-red-500" />
                          )}

                          <div>
                            <h4 className="font-medium text-gray-700">
                              {lesson.title}
                            </h4>

                            <p className="text-xs text-gray-500">
                              {lesson.duration}
                            </p>
                          </div>
                        </div>

                        {unlocked ? (
                          <CheckCircle2 className="text-green-500" />
                        ) : (
                          <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-lg">
                            Locked
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-indigo-600">
            30+ Video Lessons
          </h3>

          <p className="text-gray-600 mt-2">
            Learn frontend & backend development with real examples.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-indigo-600">Real Projects</h3>

          <p className="text-gray-600 mt-2">
            Build modern MERN stack applications step by step.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-indigo-600">
            Course Certificate
          </h3>

          <p className="text-gray-600 mt-2">
            Receive a certificate after completing the course.
          </p>
        </div>
      </div>

      {/* CEO Section */}
      <div className="mt-10 bg-white px-36 py-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-6">
        {/* Image */}
        <img
          src="https://i.pravatar.cc/200?img=5"
          className="w-28 h-28 rounded-2xl object-cover"
          alt="CEO"
        />

        {/* Left Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-purple-600">CEO & Founder</h2>

          <h3 className="text-xl font-semibold">Farjana Akter</h3>

          <p className="text-gray-500">CEO of Learn Coding Academy</p>

          <span className="inline-block mt-3 bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
            ID: CEO-2026-LCA
          </span>
        </div>

        {/* Right Side Description */}
        <div className="flex-1 text-gray-600 border-l md:pl-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            About Her
          </h4>

          <p className="text-sm leading-relaxed">
            Farjana Akter is a passionate entrepreneur from Bangladesh. She
            started her journey in the tech industry as a self-taught developer
            and later founded <b>Learn Coding Academy</b> to help students learn
            modern web development skills like React, Node.js, and MongoDB.
          </p>

          <p className="text-sm mt-3 leading-relaxed">
            She focuses on practical learning, real-world projects, and building
            job-ready developers for the global IT industry.
          </p>
        </div>
      </div>
      {/* Instructor Section (5 instructors) */}
      {/* Instructor Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Our Instructors
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            {
              name: "Ariful Islam",
              role: "Full Stack Developer",
              img: "https://i.ibb.co.com/XvrFFhR/Smartly-dressed-man-with-greenery-backdrop-removebg-preview.png",
            },
            {
              name: "Sabbir Hossain",
              role: "MERN Stack Developer",
              img: "https://i.ibb.co.com/gFc5ZVKR/img-removebg-preview-removebg-preview-2.png",
            },
            {
              name: "Rakib Hasan",
              role: "Frontend Developer",
              img: "https://i.ibb.co.com/F4MD7BD0/Arif.jpg",
            },
            {
              name: "Farhan Ahmed",
              role: "Backend Developer",
              img: "https://i.ibb.co.com/PvGxb9g9/ariful-edited.jpg",
            },
            {
              name: "Tamim Iqbal",
              role: "React Specialist",
              img: "https://i.ibb.co.com/F4MD7BD0/Arif.jpg",
            },
          ].map((ins, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300"
            >
              <img
                src={ins.img}
                className="w-20 h-20 mx-auto rounded-full border-4 border-indigo-100 object-cover"
                alt={ins.name}
              />

              <h3 className="mt-3 font-bold text-gray-800">{ins.name}</h3>

              <p className="text-sm text-indigo-600 font-medium mt-1">
                {ins.role}
              </p>

              <div className="mt-3 flex justify-center gap-1 flex-wrap">
                <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                  Expert
                </span>

                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                  Mentor
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
