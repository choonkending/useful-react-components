import React from 'react';
import { Link } from 'react-router';

const Root = ({children}) => (
  <div className="main">
    <ul>
      <li><Link to={`${BASE_HREF}button`}>Button</Link></li>
      <li><Link to={`${BASE_HREF}graph`}>Graph</Link></li>
      <li>
        <ul>
          <li>
            <Link to={`${BASE_HREF}graph/simple`}>Simple</Link>
          </li>
          <li>
            <Link to={`${BASE_HREF}graph/zoom`}>Zoom</Link>
          </li>
          <li>
            <Link to={`${BASE_HREF}graph/arrow`}>Arrow</Link>
          </li>
          <li>
            <Link to={`${BASE_HREF}graph/final`}>Final</Link>
          </li>
        </ul>
       </li>
    </ul>
    {children}
  </div>
);

export default Root;

