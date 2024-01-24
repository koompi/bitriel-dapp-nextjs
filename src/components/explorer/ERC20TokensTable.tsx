'use client';

import React, { useState } from 'react';

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
import { CheckCircle2 } from 'lucide-react';

import timeAgo from '@/lib/ConvertTime';
import PaginationControls from '../PaginationControls';

type User = {
  eventsCount: number;
  id: string;
  timestamp: string;
  extrinsicsCount: number;
  height: number;
  hash: string;
  validator: string;
};

interface BlocksTableProps {
  users: User[];
  columns: { uid: string; name: string }[]; 
  
}

export default function ERC20TokensTable({
  users,
  columns, 
}: BlocksTableProps) {
  {
    users.map((x, i) => {
      return <p key={i}>{timeAgo(x.timestamp)}</p>;
    });
  }

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    console.log('timess', timeAgo(user.timestamp));
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
          <div className="relative flex text-sel_blue items-center justify-start gap-2">
            <Link href={`/explorer/blocks/${user.id}`}>
              {' '}
              <p>{user.height} </p>
            </Link>
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
              <p>{truncateMiddle(user.validator, 52)}</p>
            </div>
          </Link>
        );
      case 'blockhash':
        return (
          <Link
            href="#"
            className="relative flex items-center justify-start gap-2 text-sel_blue"
          >
            <p>{truncateMiddle(user.hash, 52)}</p>
          </Link>
        );
      default:
        return cellValue;
    }
  }, []);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = users.slice(start, end);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div>
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

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
        <TableBody items={currentData} className="border-b-2">
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
