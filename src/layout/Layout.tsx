import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import MenuList from '../components/MenuList/MenuList';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-5 h-screen w-screen">
      <MenuList />
      <div className="col-span-4 p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;