import React from 'react';

export default function Footer() {
  return (
    <div className=" bg-zinc-100  px-40 py-10 ">
      <div className="bg-zinc-300 self-stretch flex shrink-0 h-px flex-col max-md:max-w-full max-md:mt-10 px-40" />
      <div className="self-stretch flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap pt-10 ">
        <div className="flex grow basis-[0%] flex-col items-start">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/58fa0020061787b1ac15f448bd1ed8e51be443e9da5f6f9d4b60499ef54ac192?apiKey=66a38a07e78a4570af00b17d5b394a09&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/58fa0020061787b1ac15f448bd1ed8e51be443e9da5f6f9d4b60499ef54ac192?apiKey=66a38a07e78a4570af00b17d5b394a09&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/58fa0020061787b1ac15f448bd1ed8e51be443e9da5f6f9d4b60499ef54ac192?apiKey=66a38a07e78a4570af00b17d5b394a09&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/58fa0020061787b1ac15f448bd1ed8e51be443e9da5f6f9d4b60499ef54ac192?apiKey=66a38a07e78a4570af00b17d5b394a09&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/58fa0020061787b1ac15f448bd1ed8e51be443e9da5f6f9d4b60499ef54ac192?apiKey=66a38a07e78a4570af00b17d5b394a09&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/58fa0020061787b1ac15f448bd1ed8e51be443e9da5f6f9d4b60499ef54ac192?apiKey=66a38a07e78a4570af00b17d5b394a09&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/58fa0020061787b1ac15f448bd1ed8e51be443e9da5f6f9d4b60499ef54ac192?apiKey=66a38a07e78a4570af00b17d5b394a09&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/58fa0020061787b1ac15f448bd1ed8e51be443e9da5f6f9d4b60499ef54ac192?apiKey=66a38a07e78a4570af00b17d5b394a09&"
            className="aspect-[4.92] object-contain object-center w-32 overflow-hidden max-w-full"
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
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8874a198491c8791967e06199cf12a3ffaeb444627b103ec5ca423a767872969?apiKey=66a38a07e78a4570af00b17d5b394a09&"
              className="aspect-[5.91] object-contain object-center w-[207px] overflow-hidden self-center mt-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
