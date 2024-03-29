'use client';

import React from 'react';

import Link from 'next/link';

import ConvertBigNumber from '@/lib/ConvertBigNumber';
import timeAgo from '@/lib/ConvertTime';
import truncateMiddle from '@/lib/TruncateMiddle';
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
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// import { columns, users } from './data';

type User = {
  id: string;
  blockNumber: number;
  from: { evmAddress: string };
  to: { evmAddress: string };
  timestamp: string;
  amount: number;
  success: boolean;
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
              <p>{truncateMiddle(user.from.evmAddress, 20)}</p>
            </Link>

            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <ArrowRight color="green" size="16px" />
            </span>
          </div>
        );
      case 'to':
        return (
          <Link href="" className="text-sel_blue">
            <p>{truncateMiddle(user.to.evmAddress, 20)}</p>
          </Link>
        );

      case 'block':
        return (
          <Link href="/explorer/blocks/1" className="text-sel_blue">
            <p>{user.blockNumber}</p>
          </Link>
        );
      case 'time':
        return (
          <Link href="/explorer/accounts/1" className="flex items-center gap-2">
            <p>{timeAgo(user.timestamp)}</p>
          </Link>
        );
      case 'value':
        return (
          <div className="flex items-center gap-2">
            <p>{ConvertBigNumber(user.amount)}</p>
          </div>
        );
      case 'eid':
        return (
          <Link
            href={`/explorer/transfers/${user.id}`}
            className="text-sel_blue flex items-center gap-2"
          >
            <p>{truncateMiddle(user.id, 50)}</p>
          </Link>
        );

      case 'result':
        return (
          <div className="relative flex items-center justify-start gap-2">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              {user.success ? <CheckCircle2 color="green" size="16px" /> : '-'}
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
