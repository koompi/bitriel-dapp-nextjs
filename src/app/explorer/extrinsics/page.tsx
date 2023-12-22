'use client';

import React from 'react';

import ExplorerHeader from '@/components/ExplorerHeader';
import { Card, CardBody } from '@nextui-org/react';

import { columns, users } from '../../data/extrinsics';
import ExtrinsicsTable from '@/components/ExtrinsicsTable';

function page() {
  return (
    <div className="px-40 mt-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl">Extrinsics</p>
        <ExplorerHeader />
      </div>
      <Card>
        <CardBody>
          <ExtrinsicsTable users={users} columns={columns} />
        </CardBody>
      </Card>
    </div>
  );
}

export default page;
