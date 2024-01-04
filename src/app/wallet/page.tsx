import React from 'react';

import Image from 'next/image';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  User,
} from '@nextui-org/react';
import { Copy, Wallet2 } from 'lucide-react';

const Wallet = () => {
  return (
    <div className="px-40 mt-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl">My Wallet</p>
      </div>
      <Card className="p-4 flex flex-row justify-between">
        <div className="flex flex-col justify-between mt-4 ml-4">
          <div className="flex items-end  gap-2">
            <User
              className="text-3xl"
              classNames={{ name: 'text-2xl', description: 'text-lg' }}
              name="_batman"
              description="0x49930...2e80575"
              avatarProps={{
                src: '/profile.png',
                size: 'lg',
              }}
            />
            <Copy size="16px" color="gray" className="mb-2" />
          </div>
          <Button
            variant="bordered"
            startContent={
              <Image
                src="/metamask-logo.png"
                alt="metamask-logo"
                width={24}
                height={24}
              />
            }
            className="w-40"
          >
            Metamask
          </Button>
        </div>
        <div className="flex gap-3">
          <div className="h-40 w-72 flex flex-col rounded-lg p-4 justify-between bg-primary text-white">
            <p>Total Balance</p>
            <p className="text-2xl">$0.0</p>
          </div>
          <div className="h-40 w-72 flex flex-col rounded-lg p-4 justify-between bg-secondary text-white">
            <p>Total Balance</p>
            <p className="text-2xl">$0.0</p>
          </div>
        </div>
      </Card>
      <div className="mt-4 flex gap-4">
        <Card className="px-8 py-6 h-40 w-full flex justify-between">
          <p>Asset on Selendra</p>

          <div className="flex items-center justify-between">
            <User
              className="text-3xl"
              classNames={{ name: 'text-2xl', description: 'text-lg' }}
              name="0"
              description="SEL"
              avatarProps={{
                src: '/sel-asset.png',
                size: 'lg',
              }}
            />
            <Button
              color="primary"
              startContent={
                // <Image
                //   src="/wallet.png"
                //   alt="metamask-logo"
                //   width={24}
                //   height={24}
                // />
                <Wallet2 />
              }
            >
              Buy SEL
            </Button>
          </div>
        </Card>
        <Card className="px-8 py-6 h-40 w-full flex justify-between">
          <p>Total Claimable Reward</p>

          <div className="flex items-center justify-between">
            <p className="text-2xl">$0.00</p>
            <Button color="secondary">Claim All</Button>
          </div>
        </Card>
      </div>
      <Card className="mt-4 h-80 p-4">
        <CardHeader>My NFTs</CardHeader>
        <Divider />
        <CardBody></CardBody>
      </Card>
    </div>
    // <div className="flex flex-col px-5 mx-40">
    //   <div className="text-slate-800 text-2xl font-semibold whitespace-nowrap self-start">
    //     My Wallet
    //   </div>
    //   <div className="shadow-sm bg-white self-stretch w-full mt-7 pl-10 pr-5 py-5 rounded-3xl max-md:max-w-full max-md:pl-5">
    //     <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    //       <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
    //         <div className="flex flex-col items-stretch my-auto max-md:mt-10">
    //           <div className="flex items-stretch justify-between gap-2.5">
    //             <div className="text-white text-2xl whitespace-nowrap aspect-square justify-center items-stretch px-4 py-4 rounded-[50%]">
    //               T
    //             </div>
    //             <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
    //               <div className="text-neutral-500 text-xl font-medium whitespace-nowrap">
    //                 _batman
    //               </div>
    //               <div className="flex items-center justify-between gap-2.5 px-px">
    //                 <div className="text-zinc-400 text-xl grow whitespace-nowrap my-auto">
    //                   0x49930...2e80575
    //                 </div>
    //                 <img
    //                   loading="lazy"
    //                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3e8f106c-069c-45bc-bb4d-a433356184a9?apiKey=66a38a07e78a4570af00b17d5b394a09&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8f106c-069c-45bc-bb4d-a433356184a9?apiKey=66a38a07e78a4570af00b17d5b394a09&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8f106c-069c-45bc-bb4d-a433356184a9?apiKey=66a38a07e78a4570af00b17d5b394a09&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8f106c-069c-45bc-bb4d-a433356184a9?apiKey=66a38a07e78a4570af00b17d5b394a09&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8f106c-069c-45bc-bb4d-a433356184a9?apiKey=66a38a07e78a4570af00b17d5b394a09&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8f106c-069c-45bc-bb4d-a433356184a9?apiKey=66a38a07e78a4570af00b17d5b394a09&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8f106c-069c-45bc-bb4d-a433356184a9?apiKey=66a38a07e78a4570af00b17d5b394a09&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8f106c-069c-45bc-bb4d-a433356184a9?apiKey=66a38a07e78a4570af00b17d5b394a09&"
    //                   className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]"
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex items-stretch gap-1.5 ml-3.5 mt-16 self-start max-md:ml-2.5 max-md:mt-10">
    //             <img
    //               loading="lazy"
    //               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8bd572d79077ec48bd4c51d3958cadbde2ac6b26b2a4580f16a683a620e20df5?apiKey=66a38a07e78a4570af00b17d5b394a09&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd572d79077ec48bd4c51d3958cadbde2ac6b26b2a4580f16a683a620e20df5?apiKey=66a38a07e78a4570af00b17d5b394a09&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd572d79077ec48bd4c51d3958cadbde2ac6b26b2a4580f16a683a620e20df5?apiKey=66a38a07e78a4570af00b17d5b394a09&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd572d79077ec48bd4c51d3958cadbde2ac6b26b2a4580f16a683a620e20df5?apiKey=66a38a07e78a4570af00b17d5b394a09&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd572d79077ec48bd4c51d3958cadbde2ac6b26b2a4580f16a683a620e20df5?apiKey=66a38a07e78a4570af00b17d5b394a09&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd572d79077ec48bd4c51d3958cadbde2ac6b26b2a4580f16a683a620e20df5?apiKey=66a38a07e78a4570af00b17d5b394a09&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd572d79077ec48bd4c51d3958cadbde2ac6b26b2a4580f16a683a620e20df5?apiKey=66a38a07e78a4570af00b17d5b394a09&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd572d79077ec48bd4c51d3958cadbde2ac6b26b2a4580f16a683a620e20df5?apiKey=66a38a07e78a4570af00b17d5b394a09&"
    //               className="aspect-square object-contain object-center w-[37px] overflow-hidden shrink-0 max-w-full"
    //             />
    //             <div className="text-zinc-400 text-base self-center grow whitespace-nowrap my-auto">
    //               MetaMask
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-stretch w-[65%] ml-5 max-md:w-full max-md:ml-0">
    //         <div className="px-0.5 max-md:max-w-full max-md:mt-10">
    //           <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    //             <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
    //               <div className="bg-amber-500 flex grow flex-col w-full pl-7 pr-20 pt-6 pb-11 rounded-2xl items-start max-md:mt-5 max-md:px-5">
    //                 <div className="text-slate-800 text-sm whitespace-nowrap">
    //                   Total Balance
    //                 </div>
    //                 <div className="text-slate-800 text-xl font-semibold whitespace-nowrap mt-16 max-md:mt-10">
    //                   $0.0
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
    //               <div className="bg-secondary flex grow flex-col w-full pl-6 pr-20 pt-6 pb-11 rounded-2xl items-start max-md:mt-5 max-md:px-5">
    //                 <div className="text-white text-sm whitespace-nowrap">
    //                   Staked
    //                 </div>
    //                 <div className="text-white text-xl font-semibold whitespace-nowrap mt-16 max-md:mt-10">
    //                   $0.0
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="self-stretch w-full mt-8 max-md:max-w-full">
    //     <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    //       <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
    //         <div className="shadow-sm bg-white flex grow flex-col items-stretch w-full pl-8 pr-6 py-5 rounded-3xl max-md:max-w-full max-md:mt-6 max-md:px-5">
    //           <div className="text-neutral-500 text-xl font-medium whitespace-nowrap max-md:max-w-full">
    //             Asset on Selendra
    //           </div>
    //           <div className="flex w-full justify-between gap-5 mt-14 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
    //             <div className="flex items-stretch gap-4">
    //               <img
    //                 loading="lazy"
    //                 srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a6538f027b3b6e888fb52be72311637f4b4b6458bfbaac181657d26c7f6ced63?apiKey=66a38a07e78a4570af00b17d5b394a09&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6538f027b3b6e888fb52be72311637f4b4b6458bfbaac181657d26c7f6ced63?apiKey=66a38a07e78a4570af00b17d5b394a09&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6538f027b3b6e888fb52be72311637f4b4b6458bfbaac181657d26c7f6ced63?apiKey=66a38a07e78a4570af00b17d5b394a09&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6538f027b3b6e888fb52be72311637f4b4b6458bfbaac181657d26c7f6ced63?apiKey=66a38a07e78a4570af00b17d5b394a09&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6538f027b3b6e888fb52be72311637f4b4b6458bfbaac181657d26c7f6ced63?apiKey=66a38a07e78a4570af00b17d5b394a09&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6538f027b3b6e888fb52be72311637f4b4b6458bfbaac181657d26c7f6ced63?apiKey=66a38a07e78a4570af00b17d5b394a09&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6538f027b3b6e888fb52be72311637f4b4b6458bfbaac181657d26c7f6ced63?apiKey=66a38a07e78a4570af00b17d5b394a09&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6538f027b3b6e888fb52be72311637f4b4b6458bfbaac181657d26c7f6ced63?apiKey=66a38a07e78a4570af00b17d5b394a09&"
    //                 className="aspect-square object-contain object-center w-[65px] overflow-hidden shrink-0 max-w-full"
    //               />
    //               <div className="self-center flex basis-[0%] flex-col items-stretch my-auto">
    //                 <div className="text-slate-800 text-2xl font-medium whitespace-nowrap">
    //                   0
    //                 </div>
    //                 <div className="text-neutral-500 text-base font-medium whitespace-nowrap mt-3.5">
    //                   SEL
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="bg-amber-500 flex items-stretch gap-3 mt-14 px-9 py-2.5 rounded-xl self-end max-md:mt-10 max-md:px-5">
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d367c2b9a519276dffee3de9616259962229727d5058a9da3af292cc5caea99?apiKey=66a38a07e78a4570af00b17d5b394a09&"
    //                 className="aspect-[1.14] object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
    //               />
    //               <div className="text-slate-800 text-lg grow whitespace-nowrap mt-1 self-start">
    //                 Buy SEL
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
    //         <div className="shadow-sm bg-white flex grow flex-col items-stretch w-full pl-10 pr-4 pt-7 pb-3.5 rounded-3xl max-md:max-w-full max-md:mt-5 max-md:pl-5">
    //           <div className="text-neutral-500 text-xl font-medium whitespace-nowrap max-md:max-w-full">
    //             Total Claimable Reward
    //           </div>
    //           <div className="flex justify-between gap-5 mt-24 pr-2 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
    //             <div className="text-slate-800 text-xl font-medium grow whitespace-nowrap mt-2">
    //               $0.00
    //             </div>
    //             <div className="text-white text-lg w-fit whitespace-nowrap bg-secondary self-stretch grow justify-center items-stretch pl-14 pr-12 py-3.5 rounded-xl max-md:px-5">
    //               Claim All
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="shadow-sm bg-white self-stretch flex w-full flex-col mt-10 pl-8 pr-20 pt-5 pb-12 rounded-3xl items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
    //     <div className="text-neutral-500 text-xl font-medium whitespace-nowrap max-md:max-w-full">
    //       My NFTs
    //     </div>
    //     <img
    //       loading="lazy"
    //       src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b6a3a739c9b24649f92a50cba4a59c4e3e18b4be72b80c57c4e887aa2739ced?apiKey=66a38a07e78a4570af00b17d5b394a09&"
    //       className="aspect-square object-contain object-center w-[63px] overflow-hidden self-center max-w-full mt-28 mb-10 max-md:my-10"
    //     />
    //   </div>
    // </div>
  );
};

export default Wallet;
