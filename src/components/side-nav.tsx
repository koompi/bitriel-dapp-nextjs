'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';

// import { Icon } from '@iconify/react';

const SideNav = () => {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 justify-between flex-col fixed border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-16 w-full"
        >
          {/* <img src="/bitriel-logo.png" className="h-7 w-auto " /> */}
          <Image src="/bitriel-logo.png" height={52} width={150} alt="logo" />
        </Link>

        <div className="flex flex-col md:px-4 space-y-[44vh] h-auto">
          <div className="flex flex-col space-y-2">
            {SIDENAV_ITEMS.filter((item) => item.top).map((item, idx) => (
              <MenuItem key={idx} item={item} />
            ))}
          </div>

          <div className=" flex flex-col space-y-2 bottom-4 ">
            {SIDENAV_ITEMS.filter((item) => item.bottom).map((item, idx) => (
              <MenuItem key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          {/* <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? 'bg-yellow-500' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className=" text-md  flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button> */}

          {/* {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )} */}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-primary hover:bg-opacity-10 ${
            item.path === pathname
              ? 'bg-primary bg-opacity-10 text-primary'
              : 'text-gray-500'
          }`}
        >
          {item.icon}
          <span
            className={`"text-semibold text-md flex" ${
              item.path === pathname
                ? 'text-primary font-semibold'
                : 'text-gray-500'
            }`}
          >
            {item.title}
          </span>
        </Link>
      )}
    </div>
  );
};
