'use client';

import React from 'react';

import Image from 'next/image';

import ExplorerHeader from '@/components/ExplorerHeader';
import TransfersTable from '@/components/TransfersTable';
import { Card, CardBody } from '@nextui-org/react';
import { User, Users } from 'lucide-react';

import { columns, users } from '../../data/accounts';

function page() {
  const accounts = [
    {
      id: 1,
      title: 'Holders',
      value: '543254',
      img: <Users color="#F1B951" size="36px" />,
    },
    {
      id: 2,
      title: 'Acive Holders',
      value: '5254',
      img: <User color="#F1B951" size="36px" />,
    },
  ];
  return (
    <div className="px-40 md:px-4 mt-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl">Accounts</p>
        <ExplorerHeader />
      </div>
      <div className="flex flex-row gap-3">
        {accounts.map((account) => (
          <Card className="w-full p-4" key={account.id}>
            <CardBody className="flex flex-row gap-3">
              {/* <Image width={52} height={52} alt='account-img' src={account.img} /> */}
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex justify-center items-center">
                {account.img}
              </div>
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
