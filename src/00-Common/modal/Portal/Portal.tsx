import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type PortalType = {
  children: ReactNode;
};

const Portal: React.FC<PortalType> = ({ children }) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.removeChild(container);
      document.body.style.overflow = '';
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
