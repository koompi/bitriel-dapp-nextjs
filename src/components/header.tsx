'use client';

import React from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 py-2 px-6`,
        {
          'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-white': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        {/* <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
            <span className="font-bold text-xl flex ">Logo</span>
          </Link>
        </div> */}

        <div className="border bg-white bg-opacity-0 flex items-stretch gap-2 pl-4 pr-20 py-1 rounded-[10px] border-solid border-zinc-300 w-80 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <img
            loading="lazy"
            srcSet="/nav-search.png"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
          <input
            className="bg-transparent appearance-none border-none text-md w-full py-1 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            style={{ border: 'none !important' }}
            placeholder="Search"
          />
        </div>

        <div className="flex items-stretch justify-between gap-5 max-md:flex-wrap max-md:justify-center">
          <div className="border bg-white bg-opacity-0 flex items-stretch gap-2 px-2 py-2 rounded-xl border-solid border-zinc-300 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <img
              loading="lazy"
              src="/dark-mode.png"
              className="aspect-square object-contain object-center w-[20px] overflow-hidden shrink-0 max-w-full cursor-pointer "
            />
          </div>

          <div className="border bg-white bg-opacity-0 flex items-stretch gap-2 pl-4 pr-4 py-1 rounded-xl border-solid border-zinc-300 max-md:max-w-full max-md:flex-wrap max-md:pr-5 cursor-pointer">
            <div className="flex items-stretch justify-between gap-px">
              <img
                loading="lazy"
                srcSet="/sel-logo-blue.png"
                className="aspect-[0.67] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-500 text-md ml-2 font-medium self-center grow whitespace-nowrap my-auto">
                Selendra
              </div>
            </div>

            <img
              loading="lazy"
              srcSet="/arrow-down.png"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full mt-2 self-start"
            />
          </div>

          <div className="text-white text-md font-medium shadow-sm bg-secondary grow justify-center items-stretch px-4 py-2 rounded-xl w-fit cursor-pointer">
            Connect Wallet
          </div>
        </div>

        {/* <div className="hidden md:block">
          <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
            <span className="font-semibold text-sm">HQ</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
