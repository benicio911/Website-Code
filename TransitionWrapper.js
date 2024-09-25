// TransitionWrapper.js
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TransitionWrapper = ({ children, location }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <div className="page">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionWrapper;