import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading'

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
        <li>
          <Link to="/detail/123">Detail</Link>
        </li>
      </ul>
    </nav>
    <Loading />
    </>
  )
}

export default Home;