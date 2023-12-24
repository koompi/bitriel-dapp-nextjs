'use client';

import React from 'react';

import ExplorerNav from '@/components/ExplorerNav';
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from '@nextui-org/react';
import {
  ArrowRightLeft,
  Blocks,
  CheckCircle2,
  History,
  Users,
} from 'lucide-react';

import './styles.css';

import Link from 'next/link';

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

  const lastestBlocks = [
    { id: 1, block_number: 232525, extrinsics: 12, events: 3, time: 5 },
    { id: 2, block_number: 232525, extrinsics: 12, events: 3, time: 5 },
    { id: 3, block_number: 232525, extrinsics: 12, events: 3, time: 5 },
    { id: 4, block_number: 232525, extrinsics: 12, events: 3, time: 5 },
    { id: 5, block_number: 232525, extrinsics: 12, events: 3, time: 5 },
    { id: 6, block_number: 232525, extrinsics: 12, events: 3, time: 5 },
  ];
  const lastestTransactions = [
    {
      id: 1,
      transaction_number: 232525,
      from: 'modlPotStake',
      to: ' a74BVh....8jJ2KF ',
      value: 0.003,
      time: 5,
    },
    {
      id: 2,
      transaction_number: 232525,
      from: 'modlPotStake',
      to: ' a74BVh....8jJ2KF ',
      value: 0.003,
      time: 5,
    },
    {
      id: 3,
      transaction_number: 232525,
      from: 'modlPotStake',
      to: ' a74BVh....8jJ2KF ',
      value: 0.003,
      time: 5,
    },
    {
      id: 4,
      transaction_number: 232525,
      from: 'modlPotStake',
      to: ' a74BVh....8jJ2KF ',
      value: 0.003,
      time: 5,
    },
    {
      id: 5,
      transaction_number: 232525,
      from: 'modlPotStake',
      to: ' a74BVh....8jJ2KF ',
      value: 0.003,
      time: 5,
    },
    {
      id: 6,
      transaction_number: 232525,
      from: 'modlPotStake',
      to: ' a74BVh....8jJ2KF ',
      value: 0.003,
      time: 5,
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
            <CardHeader className="border-b">Latest Blocks</CardHeader>
            <CardBody>
              <Table
                aria-label="Example empty table"
                removeWrapper
                hideHeader
                bottomContent={
                  <div className="flex items-center justify-center ">
                    <Link href="#">View All Blocks</Link>
                  </div>
                }
                className="pt-0"
                classNames={{ wrapper: 'pt-0' }}
              >
                <TableHeader>
                  <TableColumn>Blocks</TableColumn>
                  <TableColumn>Time</TableColumn>
                </TableHeader>
                <TableBody>
                  {lastestBlocks.map((x) => (
                    <TableRow key={x.id} className=" border-b">
                      <TableCell>
                        <Link href="#" className="text-sel_blue">
                          <User
                            avatarProps={{ radius: 'md', src: '/block.png' }}
                            description={
                              <p>
                                Include
                                <span className="text-blue-500">
                                  {x.extrinsics} Extrinsics {x.events} Events
                                </span>
                              </p>
                            }
                            name={x.block_number}
                          />
                        </Link>
                      </TableCell>
                      <TableCell>
                        <div className="relative flex items-center justify-end gap-2">
                          <p>{x.time} secs ago</p>

                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <CheckCircle2 color="green" size="16px" />
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
          <Card className="w-full">
            <CardHeader className="border-b">Latest Transactions</CardHeader>
            <CardBody>
              <Table
                aria-label="Example empty table"
                removeWrapper
                hideHeader
                bottomContent={
                  <div className="flex items-center justify-center ">
                    <Link href="#">View All Blocks</Link>
                  </div>
                }
                className="pt-0"
                classNames={{ wrapper: 'pt-0' }}
              >
                <TableHeader>
                  <TableColumn>Blocks</TableColumn>
                  <TableColumn>Time</TableColumn>
                </TableHeader>
                <TableBody>
                  {lastestTransactions.map((x) => (
                    <TableRow key={x.id} className=" border-b">
                      <TableCell>
                        <Link href="/explorer/blocks" className="text-sel_blue">
                          <User
                            avatarProps={{
                              radius: 'md',
                              src: '/transaction.png',
                            }}
                            description={
                              <p>
                                From
                                <span className="text-sel_blue ml-2">
                                  <Link href="/explorer/accounts/1">
                                    {x.from}
                                  </Link>
                                  <span className="px-2 text-gray-400">To</span>
                                  <Link href="#">{x.to}</Link>
                                </span>
                              </p>
                            }
                            name={x.transaction_number}
                          />
                        </Link>
                      </TableCell>
                      <TableCell>
                        <div className="relative flex flex-col items-end justify-end gap-2">
                          <p className="text-md">{x.value} SEL</p>
                          <p>{x.time} secs ago</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>
      </div>
    </>
  );
};

export default Explorer;
