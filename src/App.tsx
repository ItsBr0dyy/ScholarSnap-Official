import React from 'react';
import Header from './components/Header';
import App from './App';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to ScholarSnap!</h1>
        <p>This is the frontend-only version, ready for Vercel deployment.</p>
      </main>
    </div>
  );
};

export default App;
