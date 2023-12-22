'use client';

import React from 'react';

import Link from 'next/link';

import {
  Avatar,
  Chip,
  ChipProps,
  getKeyValue,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from '@nextui-org/react';
import { ArrowRight, CheckCircle2, Columns } from 'lucide-react';

// import { columns, users } from './data';

type User = {
  id: string;
  name: string;
  email: string;
  validator: string;
  status: boolean;
  eid: string;
  events: string;
  blockhash: string;
  from: string;
  to: string;
  extrinsics: string;
  account: string;
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

export default function TransfersTable({ users, columns }: BlocksTableProps) {
  console.log(users);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case 'from':
        return (
          <div className="relative flex items-center justify-between py-2 gap-2">
            <Link href="" className="text-sel_blue">
              {' '}
              <p>{user.from}</p>
            </Link>

            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <ArrowRight color="green" size="16px" />
            </span>
          </div>
        );
      case 'to':
        return (
          <Link href="" className="text-sel_blue">
            <p>{user.to}</p>
          </Link>
        );
      case 'eid':
        return (
          <Link href="/explorer/extrinsics/1" className="text-sel_blue">
            <p>{user.eid}</p>
          </Link>
        );
      case 'name':
        return (
          <Link href="/explorer/blocks/1" className="text-sel_blue">
            <p>{user.name}</p>
          </Link>
        );
      case 'account':
        return (
          <Link
            href="/explorer/accounts/1"
            className="text-sel_blue flex items-center gap-2"
          >
            <img src="/profile.png" className="w-4 h-4" />
            <p>{user.account}</p>
          </Link>
        );

      case 'result':
        return (
          <div className="relative flex items-center justify-start gap-2">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <CheckCircle2 color="green" size="16px" />
            </span>
          </div>
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
