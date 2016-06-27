import React from 'react';
import { Link } from 'react-router';

const Root = ({children, location, ...props}) => {
  const { pathname } = location;
  const className = pathname.slice(1).indexOf("demo") !== -1 ? 'navigation--demo' : '';
  return (
    <div className="main">
      <ul className={`navigation ${className}`}>
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
          </ul>
         </li>
         <li>
          <Link to={`${BASE_HREF}final`}>Final</Link>
         </li>
      </ul>
      {children}
    </div>
  )
};

export default Root;

