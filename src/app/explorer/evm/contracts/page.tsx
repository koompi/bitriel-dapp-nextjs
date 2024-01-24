'use client';

import React from 'react';

import Image from 'next/image';

import ExplorerHeader from '@/components/ExplorerHeader';
import ExplorerTable from '@/components/ExplorerTable';
import { gql, useQuery } from '@apollo/client';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import { columns } from '../../../data/evm_contracts';

const GET_EVM_CONTRACTS = gql`
  query evmContracts {
    evmContracts {
      account
      id
      extrinsicHash
      timestamp
      type
    }
  }
`;

function EvmContracts() {
  const accounts = [
    {
      id: 1,
      title: 'Contract',
      value: '12',
      img: '/smart-contract-icon.png',
    },
    {
      id: 2,
      title: 'Verified Contracts',
      value: null,
      img: '/verified-contract-icon.png',
    },
    {
      id: 3,
      title: 'ERC-20 Tokens',
      value: null,
      img: '/verified-contract-icon.png',
    },
    {
      id: 1,
      title: 'EVM Transactions',
      value: null,
      img: '/verified-contract-icon.png',
    },
    {
      id: 2,
      title: 'EVM Accounts',
      value: null,
      img: '/verified-contract-icon.png',
    },
    {
      id: 3,
      title: 'ERC-721 Tokens',
      value: null,
      img: '/verified-contract-icon.png',
    },
  ];

  const { loading, error, data } = useQuery(GET_EVM_CONTRACTS);
  if (error) return <p>Error :(</p>;
  if (loading) return <p>Loading...</p>;
  // const contracts = data.evmContracts;

  accounts[0].value = data.evmContracts.length;
  return (
    <div className="px-40 mt-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-xl w-80">EVM Contracts</p>
        <ExplorerHeader />
      </div>
      <div className="flex flex-wrap justify-between gap-3">
        {accounts.map((account) => (
          <Card className="w-[32%] p-2" key={account.id}>
            <CardBody className="flex flex-row gap-3">
              <Image
                width={52}
                height={52}
                src={account.img}
                alt="account-img"
              />
              <div className="flex flex-col">
                <p className="text-sm  text-default-500">{account.title}</p>
                <p className="text-lg">
                  {account.value !== null && account.value !== undefined ? (
                    <span>{account.value}</span>
                  ) : (
                    <span>00</span>
                  )}
                </p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <Card className="mt-4">
        <CardBody>
          <Tabs aria-label="Options" variant="underlined" color="primary">
            <Tab key="contracts" title="Contracts">
              <ExplorerTable users={data.evmContracts} columns={columns} />
            </Tab>
            <Tab key="verified" title="Verified Contracts">
              {/* <ExplorerTable users={users} columns={columns} /> */}
              <h2>No contracts</h2>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

export default EvmContracts;
