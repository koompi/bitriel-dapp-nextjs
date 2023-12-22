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
  age: string;
  events: string;
  blockhash: string;
  from: string;
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

export default function ExtrinsicsTable({ users, columns }: BlocksTableProps) {
  console.log(users);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case 'from':
        return (
          <div className="relative flex items-center justify-between py-2 gap-2">
            <p>{user.from}</p>

            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <ArrowRight color="green" size="16px" />
            </span>
          </div>
        );

      case 'result':
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

      default:
        return cellValue;
    }
  }, []);

  // const [page, setPage] = React.useState(1);
  // const rowsPerPage = 4;

  // const pages = Math.ceil(users.length / rowsPerPage);

  // const items = React.useMemo(() => {
  //   const start = (page - 1) * rowsPerPage;
  //   const end = start + rowsPerPage;

  //   return users.slice(start, end);
  // }, [page, users]);

  return (
    <Table
      aria-label="Example table with custom cells"
      className="pt-0"
      removeWrapper
      bottomContent={<div>Pagination</div>}
      // bottomContent={
      //   <div className="flex w-full justify-end">
      //     <Pagination
      //       isCompact
      //       showControls
      //       showShadow
      //       color="secondary"
      //       page={page}
      //       total={pages}
      //       onChange={(page) => setPage(page)}
      //     />
      //   </div>
      // }
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
              <TableCell className="text-sel_blue">
                <Link href="/explorer/extrinsics/1">{renderCell(item, columnKey)}</Link>
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
