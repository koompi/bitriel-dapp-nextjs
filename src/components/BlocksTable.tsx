'use client';

import React from 'react';

import Link from 'next/link';

import {
  ChipProps,
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

// import { columns, users } from './data';

type User = {
  id: string;
  name: string;
  email: string;
  validator: string;
  status: boolean;
  age: string;
  events: string;
  blockhash: string;
  extrinsics: string;
};

const statusColorMap: Record<string, ChipProps['color']> = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
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
      // case 'name':
      //   return (
      //     <Link href="#" className="text-sel_blue">
      //       <User
      //         avatarProps={{ radius: 'md', src: '/block.png' }}
      //         description={
      //           <p>
      //             Include <span className="text-blue-500">{user.email}</span>
      //           </p>
      //         }
      //         name={cellValue}
      //       />
      //     </Link>
      //   );

      case 'actions':
        return (
          <div className="relative flex items-center justify-end gap-2">
            <p>5 secs ago</p>

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
            <p>{user.age} secs ago </p>
          </div>
        );
      case 'extrinsics':
        return (
          <div className="relative flex items-center justify-start gap-2 text-sel_blue">
            <Link href="#">{user.extrinsics}</Link>
          </div>
        );
      case 'events':
        return (
          <div className="relative flex items-center justify-start gap-2 text-sel_blue">
            <p>{user.events}</p>
          </div>
        );
      case 'validators':
        return (
          <Link href="#">
            <div className="relative flex flex-row items-center justify-start gap-2 text-sel_blue">
              <img src="/profile.png" className="w-6 h-6" />
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
            <p>{user.blockhash}</p>
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
