import React from 'react';

function LayoutWrapper({ children }:{
    children: React.ReactNode;
  }) {
  return (
    <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      {children}
    </div>
  );
}

export default LayoutWrapper;