import React from 'react';
import './SideNav.css';

export const CategoryLabel = ({ children, collapsed, ...restProps }) => {
  const domProps = R.omit(['dispatch'], restProps);

  return (
    !collapsed && (
      <div {...domProps} className="vs-category-label">
        {children}
      </div>
    )
  );
};
