import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    emoji: "👤",
    title: "Register / Login",
    description:
      "Create your account or login to start your booking journey.",
    path: "/login"
  },
  {
    emoji: "🔍",
    title: "Search Hostel",
    description:
      "Find hostels by name and pick your check-in and check-out dates.",
    path: "/"
  },
  {
    emoji: "🛏️",
    title: "Book Bed / Room",
    description: "Choose your preferred bed or room and confirm your booking.",
    path: "/"
  },
  {
    emoji: "💳",
    title: "Make Payment",
    description: "Complete payment securely to finalize your reservation.",
    path: "/"
  },
  {
    emoji: "✅",
    title: "Booking Confirmed",
    description:
      "Receive confirmation with details. Check-in official time: 2 PM, Check-out: 11 AM.",
    path: "/"
  },
];

// Simple confetti component with floating colored dots
const Confetti = () => {
  const colors = ["#F59E0B", "#B45309", "#D97706", "#FBBF24", "#FCD34D"];
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          style={{
            backgroundColor: colors[i % colors.length],
            animationDelay: `${Math.random() * 2}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            position: "absolute",
            opacity: 0.8,
            animation: "floatUp 3s ease-in-out infinite",
          }}
          className="confetti-dot"
        />
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          50% { opacity: 1; }
          100% { transform: translateY(-60px) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default function Journey() {
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    // Animate steps one by one with bounce scale effect
    steps.forEach((_, i) => {
      setTimeout(() => {
        setVisibleSteps((v) => [...v, i]);
      }, i * 700);
    });
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center p-8 font-sans relative overflow-x-hidden">
      <h1 className="text-5xl font-extrabold text-yellow-700 mb-12 select-none">
        Your Booking Journey
      </h1>

      <div className="relative max-w-4xl w-full">
        {/* Vertical line */}
        <div className="absolute left-10 top-0 bottom-0 w-1 bg-yellow-300 rounded"></div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map(({ emoji, title, description, path }, idx) => {
            const isVisible = visibleSteps.includes(idx);
            const isActive = visibleSteps.length - 1 === idx;

            return (
              <div
                key={idx}
                className={`flex items-start space-x-6 transition-all duration-700 ease-out cursor-pointer
                ${isVisible ? "opacity-100 translate-x-0" : idx % 2 === 0 ? "-translate-x-14 opacity-0" : "translate-x-14 opacity-0"}
                hover:scale-105 hover:shadow-lg
                `}
              >
                <div className="flex flex-col items-center relative">
                  <div
                    className={`flex items-center justify-center bg-yellow-400 rounded-full h-20 w-20 text-6xl shadow-lg relative select-none
                      transform-gpu transition-transform duration-700
                      ${isActive ? "animate-bounceScale" : ""}
                      ${isVisible ? "scale-100" : "scale-75"}
                    `}
                  >
                    {emoji}
                    {/* glowing ring on active */}
                    {isActive && (
                      <span className="absolute -inset-2 rounded-full border-4 border-yellow-500 opacity-70 animate-ping"></span>
                    )}
                  </div>
                  {/* Connector line except last */}
                  {idx !== steps.length - 1 && (
                    <div className="h-full w-1 bg-yellow-300 mt-1"></div>
                  )}
                </div>

                <div className="select-none">
                  <h2 className="text-3xl font-bold text-yellow-800"><Link to={path}>{title}</Link></h2>
                  <p className="mt-2 max-w-xl text-yellow-900">{description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {visibleSteps.length === steps.length && <Confetti />}
      </div>


      <style>{`
        @keyframes bounceScale {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15%) scale(1.15); }
        }
        .animate-bounceScale {
          animation: bounceScale 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
