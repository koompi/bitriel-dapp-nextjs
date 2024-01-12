'use client';

import React, { useEffect } from 'react';

import BlocksTable from '@/components/BlocksTable';
import ExplorerHeader from '@/components/ExplorerHeader';
import { gql, useQuery } from '@apollo/client';
import { Card, CardBody } from '@nextui-org/react';

import { columns } from '../../data/blocks';

const GET_LATEST_BLOCKS = gql`
  query GetLatestBlocks {
    blocks(limit: 10, orderBy: timestamp_DESC) {
      eventsCount
      id
      timestamp
      extrinsicsCount
      height
      hash
      validator
    }
  }
`;

function Page() {
  const { loading, error, data, refetch } = useQuery(GET_LATEST_BLOCKS);
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [refetch]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log('blocks', data.blocks);

  return (
    <div className="px-4 sm:px-20 lg:px-40 mt-4">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl">Blocks</p>
        <ExplorerHeader />
      </div>
      <Card>
        <CardBody>
          <BlocksTable users={data.blocks} columns={columns} />
        </CardBody>
      </Card>
    </div>
  );
}

export default Page;
