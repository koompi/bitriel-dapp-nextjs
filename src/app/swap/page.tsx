'use client';

import React from 'react';

import { Table, TableBody, TableColumn, TableHeader } from '@nextui-org/react';

// import { ChevronDown, Table } from 'lucide-react';

export default function Swap() {
  return (
    <Table aria-label="Example empty table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody emptyContent={'No rows to display.'}>{[]}</TableBody>
    </Table>
  );
}
