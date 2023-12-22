'use client';

import React from 'react';

import ExplorerNav from '@/components/ExplorerNav';
import { Card, CardBody } from '@nextui-org/react';
import {
  ActivityIcon,
  ArrowRightLeft,
  Blocks,
  Group,
  History,
  Users,
} from 'lucide-react';

import './styles.css';

import BlocksTable from '@/components/BlocksTable';

import { columns, users } from '../../components/data';

const Explorer = () => {
  const data1 = [
    {
      id: 1,
      title: 'Finalized Blocks',
      value: '952502',
      icon: <Blocks size={30} color="#F1B951" />,
    },
    {
      id: 2,
      title: 'Transactions',
      value: '952502',
      icon: <ArrowRightLeft color="#F1B951" size={30} />,
    },
    {
      id: 3,
      title: 'Holders',
      value: '952502',
      icon: <Users color="#F1B951" size={30} />,
    },
    {
      id: 4,
      title: 'Signed Extrinsics',
      value: '952502',
      icon: <History color="#F1B951" size={30} />,
    },
  ];
  return (
    <>
      <ExplorerNav />
      <div className="px-40 ">
        <section className="mt-6 flex gap-4">
          {data1.map((data) => {
            return (
              <Card className="w-full" key={data.id}>
                <CardBody className="flex gap-4 flex-row items-center p-6">
                  {/* <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            /> */}
                  {data.icon}
                  <div className="flex flex-col">
                    <p className="text-small text-default-500">{data.title}</p>
                    <p className="text-2xl ">{data.value}</p>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </section>
        <section className="mt-6 flex gap-4">
          <Card className="w-full">
            {/* <CardHeader className="pb-0">Blocks</CardHeader> */}
            <CardBody>
              <BlocksTable users={users} columns={columns} />
            </CardBody>
          </Card>
          <Card className="w-full">
            {/* <CardHeader className="pb-0">Transactions</CardHeader> */}
            <CardBody>
              <BlocksTable users={users} columns={columns} />
            </CardBody>
          </Card>
        </section>
      </div>
    </>
  );
};

export default Explorer;
