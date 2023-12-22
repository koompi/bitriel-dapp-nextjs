'use client';

import React from 'react';

import ExplorerHeader from '@/components/ExplorerHeader';
import { Card, CardBody } from '@nextui-org/react';

import { columns, users } from '../../data/transfers';
import TransfersTable from '@/components/TransfersTable';

function page() {
  return (
    <div className="px-40 mt-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl">Transactions</p>
        <ExplorerHeader />
      </div>
      <Card>
        <CardBody>
          <TransfersTable users={users} columns={columns} />
        </CardBody>
      </Card>
    </div>
  );
}

export default page;
