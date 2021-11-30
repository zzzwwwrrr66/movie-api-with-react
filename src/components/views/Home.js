import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <h2>Home!!!!!!!!</h2>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Home;