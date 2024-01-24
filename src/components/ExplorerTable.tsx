'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

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

type User = {
  id: string;
  contract: string;
  name: string;
  extrinsicHash: string;
  verified_time: string;
  account: string;
};
interface BlocksTableProps {
  users: User[];
  columns: { uid: string; name: string }[];
}

export default function ExplorerTable({ users, type, columns }: BlocksTableProps) {
  const renderCell = React.useCallback(
    (user: User, columnKey: React.Key) => {
      console.log('usersss', users);
      const cellValue = user[columnKey as keyof User];

      switch (columnKey) {
        case 'contract':
          return (
            <div className="relative flex items-center flex-row text-sel_blue  gap-2">
              <Link href={`/explorer/evm/contracts/${user.id}`}>
                <Image
                  src="/smart-contracts.png"
                  alt="smart-contract"
                  width={20}
                  height={20}
                  className="w-4 h-auto"
                />
                <p>{truncateMiddle(user.account, 20)}</p>
              </Link>
            </div>
          );

        case 'name':
          return (
            <div className="relative flex items-center  gap-2">
              <p>Unknown</p>
            </div>
          );

        case 'verified_time':
          return (
            <div className="relative flex items-center justify-start gap-2">
              <p>Unknown </p>
            </div>
          );
        case 'extrinsichash':
          return (
            <div className="relative flex items-center justify-start gap-2">
              <p>{truncateMiddle(user.extrinsicHash, 30)} </p>
            </div>
          );

        default:
          return cellValue;
      }
    },
    [users],
  );

  return (
    <div>
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
              {(columnKey) => {
                return <TableCell>{renderCell(item, columnKey)}</TableCell>;
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
