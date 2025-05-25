import React from 'react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg max-w-md text-center mb-6">
        Your message has been successfully sent. I will get back to you shortly.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-md hover:from-primary/80 hover:to-accent/80 transition"
      >
        Back to Home
      </a>
    </div>
  );
};

export default ThankYou;
