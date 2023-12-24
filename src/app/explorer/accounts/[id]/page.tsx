'use client';

import React from 'react';

import ExplorerAccount from '@/components/ExplorerAccount';
import ExplorerHeader from '@/components/ExplorerHeader';
import ExtrinsicsTable from '@/components/ExtrinsicsTable';
import TransfersTable from '@/components/TransfersTable';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import { columns, users } from '../../../data/extrinsics';

const data = {
  name: '_batman',
  addr: '0xb28ed315d3272a998619932ef94e04a37d0a5dd404014a0f29',
  totalbalance: 32253,
  freebalance: 52523,
  reservedbalance: 340306,
};

function page() {
  return (
    <div className="px-40 mt-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-lg w-80">Accounts: 0xb28ed3..... 014a0f29 </p>
        <ExplorerHeader />
      </div>
      <ExplorerAccount data={data} />

      <Card className="mt-4">
        <CardBody>
          <Tabs aria-label="Options" variant="underlined" color="primary">
            <Tab key="photos" title="Extrinsics(6)">
              <TransfersTable users={users} columns={columns} />
            </Tab>
            <Tab key="music" title="Transfers">
              <TransfersTable users={users} columns={columns} />
            </Tab>
            <Tab key="videos" title="WASM Transactions">
              <TransfersTable users={users} columns={columns} />
            </Tab>
          </Tabs>
          {/* <TransfersTable users={users} columns={columns} /> */}
        </CardBody>
      </Card>
    </div>
  );
}

export default page;
