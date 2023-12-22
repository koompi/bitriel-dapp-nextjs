'use client';

import React from 'react';

import ExplorerAccount from '@/components/ExplorerAccount';
import ExplorerHeader from '@/components/ExplorerHeader';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import { columns, users } from '../../../../data/evm_contracts';
import ExplorerTable from '@/components/ExplorerTable';

const data = {
  name: 'Reserved Balance',
  addr: '0xb28ed315d3272a998619932ef94e04a37d0a5dd404014a0f29',
  totalbalance: 32253,
  freebalance: 52523,
  reservedbalance: 340306,
};

function page() {
  return (
    <div className="px-40 mt-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-xl w-80">Contract Details </p>
        <ExplorerHeader />
      </div>
      <ExplorerAccount data={data} />

      <Card className="mt-4">
        <CardBody>
          <Tabs aria-label="Options" variant="underlined" color="primary">
            <Tab key="evm" title="EVM Transactions">
            <ExplorerTable users={users} columns={columns}  />
            </Tab>
            <Tab key="wasm" title="WASM Transaction">
            <ExplorerTable users={users} columns={columns}  />
            </Tab>
            <Tab key="erc20" title="ERC-20 Transfers(32)">
            <ExplorerTable users={users} columns={columns}  />
            </Tab>
            <Tab key="erc721" title="ERC-721 Transfers(32)">
            <ExplorerTable users={users} columns={columns}  />
            </Tab>
            <Tab key="contract" title="Contract">
            <ExplorerTable users={users} columns={columns}  />
            </Tab>
          </Tabs>
          {/* <TransfersTable users={users} columns={columns} /> */}
        </CardBody>
      </Card>
    </div>
  );
}

export default page;
