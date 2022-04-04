import React from 'react';

const MainPageLayout = ({ children }: any) => {
  return <div style={{ display: 'flex', flexDirection: 'column', padding: 30 }}>{children}</div>;
};

export default MainPageLayout;
