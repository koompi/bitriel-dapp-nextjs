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
    <div className=" px-6 sm:px-20 lg:px-40 mt-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl">My Wallet</p>
      </div>
      <Card className="p-4 flex flex-col gap-4 md:flex-row justify-between">
        <div className="flex flex-col justify-between mt-4 ml-4 gap-4">
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
        <div className="flex flex-col md:flex-row gap-3">
          <div className="h-40 w-full md:w-72 flex flex-col rounded-lg p-4 justify-between bg-primary text-white">
            <p>Total Balance</p>
            <p className="text-2xl">$0.0</p>
          </div>
          <div className="h-40 w-full md:w-72 flex flex-col rounded-lg p-4 justify-between bg-secondary text-white">
            <p>Total Balance</p>
            <p className="text-2xl">$0.0</p>
          </div>
        </div>
      </Card>
      <div className="mt-4 flex flex-col md:flex-row gap-4">
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
  );
};

export default Wallet;
