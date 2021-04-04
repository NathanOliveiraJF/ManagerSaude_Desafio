import React from "react";
import Menu from './menubar';

function Layout({children}) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}

export default Layout;