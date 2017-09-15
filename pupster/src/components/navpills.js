import React from 'react';

const Navpills = () =>

<ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" href="/">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/discover">Discover</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/search">Search</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>

export default Navpills;
