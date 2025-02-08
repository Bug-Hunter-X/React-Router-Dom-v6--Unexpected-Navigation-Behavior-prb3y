// Correcting Path Typos and Using useParams Correctly
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

function User({ match }) {
  let { userId } = useParams();
  return (
    <div>
      <h3>User ID: {userId}</h3>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users/:userId" element={<User />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;