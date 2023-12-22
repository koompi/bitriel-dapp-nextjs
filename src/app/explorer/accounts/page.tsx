'use client';

import React from 'react';

import ExplorerHeader from '@/components/ExplorerHeader';
import TransfersTable from '@/components/TransfersTable';
import { Card, CardBody } from '@nextui-org/react';

import { columns, users } from '../../data/accounts';
import Image from 'next/image';


function page() {
  const accounts = [
    { id:1, title: 'Holders', value: '543254', img: '/holder.png' },
    { id: 2, title: 'Acive Holders', value: '5254', img: '/active-holder.png' },
  ];
  return (
    <div className="px-40 mt-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl">Accounts</p>
        <ExplorerHeader /> 
      </div>
      <div className="flex flex-row gap-3">
        {accounts.map((account) => (
          <Card className="w-full p-4" key={account.id}>
            <CardBody className="flex flex-row gap-3">
              <Image width={52} height={52} alt='account-img' src={account.img} />
              <div className="flex flex-col">
                <p className="text-sm">{account.title}</p>
                <p className="text-2xl text-default-500">{account.value}</p>
              </div>
            </CardBody>
          </Card>
        ))}
        
      </div>
      <Card className="mt-4">
        <CardBody>
          <TransfersTable users={users} columns={columns} />
        </CardBody>
      </Card>
    </div>
  );
}

export default page;
