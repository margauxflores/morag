'use client';

import React from 'react';
import {
  ChartBarSquareIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  {
    name: 'Researchers',
    href: '/researchers',
    icon: UsersIcon,
  },
  { name: 'General', href: '/general', icon: ChartBarSquareIcon },
  {
    name: 'Onboard Safety',
    href: '/onboard-safety',
    icon: ChartBarSquareIcon,
  },
  {
    name: 'Onboard Equipment',
    href: '/onboard-equipment',
    icon: ChartBarSquareIcon,
  },
  {
    name: 'Onboard Research Support',
    href: '/onboard-research-support',
    icon: ChartBarSquareIcon,
  },
  {
    name: 'Onboard Network',
    href: '/onboard-network',
    icon: ChartBarSquareIcon,
  },
];

export const Sidebar: React.FC = ({}) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                        )}
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  </Link>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
