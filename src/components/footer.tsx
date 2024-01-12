import React from 'react';

import Image from 'next/image';

export default function Footer() {
  return (
    <div className=" bg-zinc-100 px-10 sm:px-40 py-10 ">
      <div className="bg-zinc-300 self-stretch flex shrink-0 h-px flex-col max-md:max-w-full max-md:mt-10 px-40" />
      <div className="self-stretch flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap pt-10 ">
        <div className="flex grow basis-[0%] flex-col items-start">
          <Image
            src="/bitriel-logo-dark.png"
            alt="logo-dark"
            width={500}
            height={500}
            className="h-6 w-auto"
          />
          <div className="text-neutral-500 text-base leading-6 self-stretch mt-6">
            Revolutionize your digital experience with our decentralized app!
          </div>
        </div>
        <div className="flex items-stretch justify-between gap-5 mt-2 max-md:max-w-full max-md:flex-wrap">
          <div className="flex grow basis-[0%] flex-col items-stretch">
            <div className="text-slate-800 text-xl font-bold whitespace-nowrap">
              About Us
            </div>
            <div className="text-neutral-500 text-base whitespace-nowrap mt-8">
              Privacy Policies
            </div>
            <div className="text-neutral-500 text-base whitespace-nowrap mt-4">
              Terms and Conditions
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col items-stretch self-start">
            <div className="text-slate-800 text-xl font-bold whitespace-nowrap">
              Community
            </div>
            {/* <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8874a198491c8791967e06199cf12a3ffaeb444627b103ec5ca423a767872969?apiKey=66a38a07e78a4570af00b17d5b394a09&"
              alt=""
              width={207}
              height={35}
              className="aspect-[5.91] object-contain object-center w-[207px] overflow-hidden self-center mt-7"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
