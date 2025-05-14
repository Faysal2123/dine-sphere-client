import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <div className="bg-slate-400 text-black py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">Stay updated with our latest offers and news.</p>
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 w-80 rounded-l-lg text-black outline-none"
        />
        <button className="bg-red-600 px-6 py-3 rounded-r-lg hover:bg-red-700">
          Subscribe
        </button>
      </div>
    </div>
        </div>
    );
};

export default NewsLetter;