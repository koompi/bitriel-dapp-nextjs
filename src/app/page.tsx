'use client';

import Image from 'next/image';

import { gql, useQuery } from '@apollo/client';
import { Button, Card } from '@nextui-org/react';

const GET_ACCOUNTS = gql`
  query getBlocks {
    blocks(limit: 10) {
      hash

      eventsCount
      id
      parentHash
      specVersion
      timestamp
      validator
      extrinsicsCount
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_ACCOUNTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log('accounts', data);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center w-[400px]  md:w-[500px] lg:w-[900px] mt-20">
        <p className=" text-4xl lg:text-8xl md:text-5xl  font-semibold  text-center mt-20">
          Explore the <span className="text-primary">decentralized</span> world!
        </p>
        <p className="lg:text-3xl px-4 md:text-lg md:w-[500px] lg:w-[900px] text-center mt-4 text-gray-500">
          Join Bitriel Dapp to interact with over 10000 Web3 users, gain access
          to gated community, win prizes.
        </p>
        <div className="mt-10 sm:mt-16 gap-2">
          <Button color="primary" size="lg" className="font-semibold mr-4">
            Connect Wallet
          </Button>
          <Button size="lg" variant="bordered" className="font-semibold">
            Buy SEL Token
          </Button>
        </div>
      </div>
      <Card className="mx-10 md:mx-20 py-10 mt-40">
        <div className="flex flex-col text-center lg:text-left lg:flex-row justify-between px-6 sm:px-20 gap-4">
          <div>
            <p className="text-2xl md:text-2xl lg:text-4xl font-semibold">
              Selendra Explorer
            </p>
            <p className="text-lg sm:text-2xl mt-2">
              Revolutionize your digital experience <br />
              with our decentralized
            </p>
            <Button
              color="primary"
              size="md"
              variant="bordered"
              className="mt-4 sm:mt-8 font-semibold"
            >
              Explore Now
            </Button>
          </div>
          <Image src="/test.png" width={656} height={40} alt="explorer" />
        </div>
      </Card>
    </div>
  );
}
