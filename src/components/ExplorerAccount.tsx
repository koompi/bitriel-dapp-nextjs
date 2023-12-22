'use client';

import React from 'react';
import { Card, CardBody,   Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button,
 } from '@nextui-org/react';
 import { ChevronDown,  } from 'lucide-react';

 interface MyComponentProps {
    data: {
      name: string;
      addr: string;
      totalbalance: number,
      freebalance: number,
      reservedbalance: number,
    };
  }

function ExplorerAccount({data}: MyComponentProps): React.ReactElement {
  return ( 
      <div className="flex flex-row gap-3">
          <Card className="w-full p-4">
            <CardBody className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-2">
                <img className="h-12 w-12" src="/profile.png" />
                <p className="text-lg">{data.name}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="text-md overflow-hidden">
                  <span className="font-semibold mr-2">
                  Address:
                  </span>
                 {data.addr}
                </p>
                <img src="/copy.png" className="w-4 h-4" />
              </div>
              <div className="flex flex-row gap-3">
                <img src='/account-qr.png' className='w-6 h-6'/>
                <img src='/account-id.png' className='w-6 h-6'/>
                <img src='/account-key.png' className='w-6 h-6'/>
              </div>
            </CardBody>   
          </Card>

          <Card className="w-full p-4">
            <CardBody className="flex flex-col gap-3">
              <div className='flex flex-row justify-between'>
              <div className="flex flex-col ">
               <p className='text-gray-400'> Total Balance</p>
                <p className="text-lg">{data.totalbalance} SEL</p>
              </div>
              <div className="flex flex-col ">
               <p className='text-gray-400'>Free Balance</p>
                <p className="text-lg">{data.freebalance} SEL</p>
              </div>
              <div className="flex flex-col ">
               <p className='text-gray-400'>Reserved Balance</p>
                <p className="text-lg">{data.reservedbalance} SEL</p>
              </div>
              </div>
              <div className='mt-6'>
              <p>Token Holding</p>
              <div className='flex flex-row justify-cente gap-2 mt-2'>
              <Dropdown placement="bottom-start" >
                <DropdownTrigger>
                  <Button className="capitalize pl-6  bg-transparent border-2 w-full flex justify-between">
                    30 ETH
                    <ChevronDown />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  // selectionMode="single"
                  // selectedKeys={selectedKeys}
                  // onSelectionChange={setSelectedKeys}
                >
                  <DropdownItem key="text">Addresses</DropdownItem>
                  <DropdownItem key="number">Tokens</DropdownItem>
                  <DropdownItem key="date">Name Tags</DropdownItem>
                  <DropdownItem key="single_date">Label</DropdownItem>
                  <DropdownItem key="iteration">Website</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <img src='/wallet.png' className="h-10 w-auto"/>
              </div>
              </div>
            </CardBody>
          </Card>
      </div>
  );
}

export default ExplorerAccount;
