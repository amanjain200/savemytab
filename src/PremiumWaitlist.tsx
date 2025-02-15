import { useState } from "react";
import "./App.css";

const PremiumWaitlist = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e : any) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simple API call placeholder
    fetch("http://smt-backend.azurewebsites.net/api/waitlist/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          setMessage("Thank you for joining the waitlist!");
          setEmail("");
        } else {
          setMessage("Something went wrong. Please try again later.");
        }
      })
      .catch(() => {
        setMessage("Unable to join the waitlist. Please try again later.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6 ">
          <img
            src="public\smt1281.png"
            alt="SaveMyTabs Logo"
            className="w-32 h-32"
          />
        </div>
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Premium Features Coming Soon
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Join the waitlist and be the first to know when premium features are live!
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Save and organize up to 1000 of your favorite links effortlessly.</li>
          <li>Add personalized notes to each link for better context and organization.</li>
          <li>Get timely reminders to revisit important sites with our "Notify Me" feature.</li>
          <li>And much more to enhance your productivity and browsing experience!</li>
        </ul>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-4 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg px-4 py-2 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
          >
            Join Waitlist
          </button>
        </form>
        {message && (
          <p className="text-center text-sm text-red-500 mt-4">{message}</p>
        )}

        <div className="mt-8 text-center">
          <button
            className="text-sm bg-yellow-400 text-black py-2 px-4 rounded-lg shadow hover:bg-yellow-300 transition-all duration-300"
            onClick={() => window.open("https://forms.gle/Dwu84nYSYacCtTcp7", "_blank")}
          >
            Rate us 5★ in Chrome Store
          </button>
        </div>

        <div className="mt-4 text-center">
          <button
            className="text-sm bg-green-400 text-white py-2 px-4 rounded-lg shadow hover:bg-green-300 transition-all duration-300"
            onClick={() => window.open("https://forms.gle/Dwu84nYSYacCtTcp7", "_blank")}
          >
            Give Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumWaitlist;
