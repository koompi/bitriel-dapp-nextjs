'use client';

import React from 'react';

import AccountsTable from '@/components/AccountsTable';
import ExplorerHeader from '@/components/ExplorerHeader';
import { gql, useQuery } from '@apollo/client';
import { Card, CardBody } from '@nextui-org/react';
import { User, Users } from 'lucide-react';

import { columns } from '../../data/accounts';

const GET_ACCOUNTS = gql`
  query Accounts {
    accounts {
      evmAddress
      freeBalance
      id
      totalBalance
      updatedAt
      reservedBalance
    }
  }
`;

function Accounts() {
  const { loading, error, data } = useQuery(GET_ACCOUNTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const accounts = data.accounts;
  console.log('accounts', accounts.length);

  return (
    <div className="px-40 mt-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl">Accounts</p>
        <ExplorerHeader />
      </div>
      <div className="flex flex-row gap-3">
        <Card className="w-full p-4">
          <CardBody className="flex flex-row gap-3">
            {/* <Image width={52} height={52} alt='account-img' src={account.img} /> */}
            <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex justify-center items-center">
              <Users color="#F1B951" size="36px" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Holder</p>
              <p className="text-2xl text-default-500">{accounts.length - 1}</p>
            </div>
          </CardBody>
        </Card>

        <Card className="w-full p-4">
          <CardBody className="flex flex-row gap-3">
            {/* <Image width={52} height={52} alt='account-img' src={account.img} /> */}
            <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex justify-center items-center">
              <User color="#F1B951" size="36px" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Active Holder</p>
              <p className="text-2xl text-default-500">-</p>
            </div>
          </CardBody>
        </Card>
      </div>
      <Card className="mt-4">
        <CardBody>
          <AccountsTable users={accounts} columns={columns} />
        </CardBody>
      </Card>
    </div>
  );
}

export default Accounts;
