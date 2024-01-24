'use client';

import React, { useEffect } from 'react';

import ExplorerHeader from '@/components/ExplorerHeader';
import ExtrinsicsTable from '@/components/ExtrinsicsTable';
import { gql, useQuery } from '@apollo/client';
import { Card, CardBody } from '@nextui-org/react';

import { columns } from '../../data/extrinsics';

const GET_LATEST_EXTRINSICS = gql`
  query MyQuery {
    extrinsics(limit: 10) {
      id
      extrinsicHash
      timestamp
      success
      fee
      block {
        height
        id
      }
    }
  }
`;

function Extrinsics() {
  const { loading, error, data, refetch } = useQuery(GET_LATEST_EXTRINSICS);

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [refetch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log('extrinsics', data.extrinsics);

  return (
    <div className="px-40 mt-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl">Extrinsics</p>
        <ExplorerHeader />
      </div>
      <Card>
        <CardBody>
          <ExtrinsicsTable users={data.extrinsics} columns={columns} />
        </CardBody>
      </Card>
    </div>
  );
}

export default Extrinsics;
