import React from 'react';
import Link from 'next/link';
import { Settings } from 'lucide-react';

const SidebarElements = [
  {
    label: 'Overview',
    url: '/dashboard',
  },
  { label: 'Customer', url: '/dashboard/customers' },
	{ label: 'Invoices', url: '/dashboard/invoices' },
	{label:"Settings",url:"/dashboard", icon:<Settings/>}
];
const SideBar = () => {
  return (
    <div>
      <ul>
        {SidebarElements.map((link) => (
          <li key={link.label} className="list-none text-2xl">
            <Link href={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
