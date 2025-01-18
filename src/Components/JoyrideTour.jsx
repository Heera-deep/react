import React, { useState } from 'react';
import Joyride from 'react-joyride';

const EnhancedJoyrideTour = () => {
  const [run, setRun] = useState(false); // Control tour state
  const steps = [
    {
      target: '.step-header',
      content: 'This is the header, where you can find the logo and main navigation links.',
    },
    {
      target: '.step-sidebar',
      content: 'This is the sidebar. Use it to navigate through different sections of the app.',
    },
    {
      target: '.step-content',
      content: 'Here is the main content area where your application features are displayed.',
    },
    {
      target: '.step-action-button',
      content: 'This is a key action button. Click it to perform important tasks.',
    },
    {
      target: '.step-search-bar',
      content: 'Use the search bar to quickly find what you’re looking for.',
    },
    {
      target: '.step-user-profile',
      content: 'Click here to view or edit your profile information.',
    },
    {
      target: '.step-footer',
      content: 'Finally, this is the footer, where you can find links to additional resources and contact information.',
    },
  ];

  return (
    <div>
      {/* Start Button */}
      <button className="btn btn-primary my-3" onClick={() => setRun(true)}>
        Start Full Tour
      </button>

      {/* Joyride Tour */}
      <Joyride
        steps={steps}
        run={run}
        continuous={true}
        showSkipButton={true}
        showProgress={true}
        styles={{
          options: {
            zIndex: 1000,
            arrowColor: '#e3f2fd', // Light blue
            backgroundColor: '#1e88e5', // Blue
            textColor: '#fff',
          },
        }}
      />

      {/* Application Content */}
      <div className="container mt-5">
        {/* Header */}
        <header className="step-header">
          <h1>Application Header</h1>
          <nav>
            <a href="#home" className="me-3">Home</a>
            <a href="#about">About</a>
          </nav>
        </header>

        {/* Sidebar */}
        <aside className="step-sidebar mt-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
          <h3>Sidebar</h3>
          <ul>
            <li>Dashboard</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="step-content mt-3">
          <h2>Main Content Area</h2>
          <p>This is where the core features of your application are displayed.</p>
        </section>

        {/* Search Bar */}
        <div className="step-search-bar mt-3">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
          />
        </div>

        {/* Action Button */}
        <div className="step-action-button mt-3">
          <button className="btn btn-success">Perform Action</button>
        </div>

        {/* User Profile */}
        <div className="step-user-profile mt-3">
          <img
            src="https://via.placeholder.com/50"
            alt="User Profile"
            className="rounded-circle"
          />
          <p className="mt-2">User Name</p>
        </div>

        {/* Footer */}
        <footer className="step-footer mt-5">
          <p>&copy; 2024 Your Application. All rights reserved.</p>
          <a href="#contact">Contact Us</a>
        </footer>
      </div>
    </div>
  );
};

export default EnhancedJoyrideTour;
