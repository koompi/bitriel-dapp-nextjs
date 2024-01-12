'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants';

const SideNav = () => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    // <div className="md:w-60 bg-white h-screen flex-1 justify-between flex-col fixed border-r border-zinc-200 hidden md:flex">
    <div
      className={` ${
        open ? 'md:w-72' : 'w-20 '
      }  h-screen  z-50 duration-300 border-r border-gray-300 sticky top-0 hidden md:block lg:block`}
    >
      <div className="flex flex-col space-y-6 w-full">
        <div className="w-full flex place-items-center place-content-center">
          {open ? (
            <Link
              href="/"
              className="z-0 flex flex-row items-center place-content-center place-items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-16 w-full"
            >
              <Image
                src="/bitriel-logo.png"
                height={52}
                width={150}
                alt="logo"
              />
            </Link>
          ) : (
            <Link
              href="/"
              className="z-0 flex flex-row  space-x-3 place-content-center place-items-center items-center justify-center  border-b border-zinc-200 h-16"
            >
              <Image
                src="/bitriel-logo-no-text.png"
                height={500}
                width={500}
                alt="logo"
                className="h-8 w-8 absolute"
              />
            </Link>
          )}
          <Image
            src="/toggle.png"
            alt="toggle-sidebar"
            width={500}
            height={500}
            className={`  cursor-pointer absolute -right-0 top-5 w-5 border-dark-purple
           border-2 border-r rounded-l-lg z-50 ${
             !open && 'rounded-l-lg rounded-r rotate-180 -mr-5 z-50'
           }`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col md:px-4 space-y-[44vh] h-auto">
          <div className="flex flex-col space-y-2">
            {SIDENAV_ITEMS.filter((item) => item.top).map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className={`flex flex-row  ${
                  !open && 'justify-center'
                } space-x-4 items-center p-2 rounded-lg hover:bg-primary hover:bg-opacity-10 ${
                  item.path === pathname
                    ? 'bg-primary bg-opacity-10 text-primary'
                    : 'text-gray-500'
                }`}
              >
                {item.icon}
                <span
                  className={`${!open && 'hidden'} text-semibold text-md flex ${
                    item.path === pathname
                      ? 'text-primary font-semibold'
                      : 'text-gray-500'
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

          <div className=" flex flex-col space-y-2 bottom-4 ">
            {SIDENAV_ITEMS.filter((item) => item.bottom).map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className={`flex flex-row  ${
                  !open && 'justify-center'
                } space-x-4 items-center p-2 rounded-lg hover:bg-primary hover:bg-opacity-10 ${
                  item.path === pathname
                    ? 'bg-primary bg-opacity-10 text-primary'
                    : 'text-gray-500'
                }`}
              >
                {item.icon}
                <span
                  className={`${!open && 'hidden'} text-semibold text-md flex ${
                    item.path === pathname
                      ? 'text-primary font-semibold'
                      : 'text-gray-500'
                  }`}
                >
                  {item.title}
                </span>
              </Link>
              // <MenuItem key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
