'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from '@nextui-org/react';
import { CheckCircle2 } from 'lucide-react';

import timeAgo from '../lib/ConvertTime';

// import { columns, users } from './data';

type User = {
  eventsCount: number;
  id: string;
  timestamp: string;
  extrinsicsCount: number;
  height: number;
  hash: string;
  validator: string;
};

// type User = (typeof users)[0];

interface BlocksTableProps {
  users: User[];
  columns: { uid: string; name: string }[]; // Add columns prop
}

export default function BlocksTable({ users, columns }: BlocksTableProps) {
  console.log(users);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case 'actions':
        return (
          <div className="relative flex items-center justify-end gap-2">
            <p>{timeAgo(user.timestamp)}</p>

            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <CheckCircle2 color="green" size="16px" />
            </span>
          </div>
        );

      case 'status':
        return (
          <div className="relative flex items-center justify-end gap-2">
            <p>5 secs ago</p>

            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <CheckCircle2 color="green" size="16px" />
            </span>
          </div>
        );
      case 'blocksstatus':
        return (
          <div className="relative flex items-center justify-start gap-2">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <CheckCircle2 color="green" size="16px" />
            </span>
          </div>
        );

      case 'age':
        return (
          <div className="relative flex items-center justify-start gap-2">
            <p>{timeAgo(user.timestamp)} </p>
          </div>
        );
      case 'name':
        return (
          <div className="relative flex items-center justify-start gap-2">
            <p>{user.height} </p>
          </div>
        );
      case 'extrinsics':
        return (
          <div className="relative flex items-center justify-start gap-2 text-sel_blue">
            <Link href="#">{user.extrinsicsCount}</Link>
          </div>
        );
      case 'events':
        return (
          <div className="relative flex items-center justify-start gap-2 text-sel_blue">
            <p>{user.eventsCount}</p>
          </div>
        );
      case 'validators':
        return (
          <Link href="#">
            <div className="relative flex flex-row items-center justify-start gap-2 text-sel_blue">
              <Image
                src="/profile.png"
                alt="validator-pf"
                width={500}
                height={500}
                className="w-6 h-6"
              />
              <p>{user.validator}</p>
            </div>
          </Link>
        );
      case 'blockhash':
        return (
          <Link
            href="#"
            className="relative flex items-center justify-start gap-2 text-sel_blue"
          >
            <p>{user.hash}</p>
          </Link>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      aria-label="Example table with custom cells"
      className="pt-0"
      removeWrapper
      bottomContent={
        <div className="flex justify-end">
          <Pagination total={10} color="primary" size="sm" />
        </div>
      }
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'end' : 'start'}
            className="text-md"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users} className="border-b-2">
        {(item) => (
          <TableRow key={item.id} className=" border-b">
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
