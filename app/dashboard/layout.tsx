import React from 'react';
import SideBar from '../components/SideBar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
    <div className='flex flex-row  gap-1 '>
      <div className='bg-blue-400 basis-1/5 md:basis-1/4 h-screen'>
        {' '}
        <SideBar />
      </div>
      <div className='bg-emerald-400 basis-4/5'>{children}</div>
    </div>
  );
	
};

export default DashboardLayout;
