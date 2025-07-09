'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChartColumnStacked, House, Settings, Ticket } from 'lucide-react';

// import { NavLink } from 'react-router';

const SidebarElements = [
  {
    label: 'Overview',
    url: '/dashboard',
    icon: <House />,
  },
  {
    label: 'Customer',
    url: '/dashboard/customers',
    icon: <ChartColumnStacked />,
  },
  { label: 'Invoices', url: '/dashboard/invoices', icon: <Ticket /> },
  { label: 'Settings', url: '/dashboard', icon: <Settings /> },
];
const SideBar = () => {
  return (
    <div>
      <ul>
        {SidebarElements.map((link) => (
          <li
            key={link.label}
            className="list-none cursor-pointer font-bold hover:bg-gray-600 hover:text-white ml-3 p-3 text-2xl"
          >
            <div className="flex gap-2 ">
              <Link href={link.url}>
                <label className="">{link.icon}</label>
              </Link>
              <Link href={link.url}>
                <label className="hidden  md:block">
                  {link.label}
                  
                </label>{' '}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
