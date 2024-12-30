import React from "react";

function Bos() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">My React Website</h1>
          <nav>
            <a href="#" className="text-white px-4 hover:underline">
              Home
            </a>
            <a href="#" className="text-white px-4 hover:underline">
              About
            </a>
            <a href="#" className="text-white px-4 hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-1 mt-10 px-4">
        <div className="flex flex-col items-center">
          {/* Image */}
          <img
            src="https://via.placeholder.com/300"
            alt="Placeholder"
            className="rounded-lg shadow-md mb-6"
          />

          {/* Text */}
          <div className="text-left">
            <h2 className="text-xl font-bold mb-4">About This Image</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              volutpat orci nec velit tincidunt, id sodales purus vulputate.
            </p>
            <p>
              Praesent suscipit dolor in lacus vehicula, vel volutpat nisl
              gravida. Aliquam erat volutpat. Integer id eros sit amet nisl
              gravida feugiat.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container  mx-auto text-center">
          <p>&copy; 2024 My React Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Bos;
