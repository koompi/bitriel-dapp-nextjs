'use client';

import React from 'react';

import BlocksTable from '@/components/BlocksTable';
import ExplorerHeader from '@/components/ExplorerHeader';
import { Card, CardBody } from '@nextui-org/react';

import { columns,
   users } from '../../data/blocks';

function page() {
  return (
    <div className="px-40 mt-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl">Blocks</p>
        <ExplorerHeader />
      </div>
      <Card>
        <CardBody>
          <BlocksTable users={users} columns={columns} />
        </CardBody>
      </Card>
    </div>
  );
}

export default page;
