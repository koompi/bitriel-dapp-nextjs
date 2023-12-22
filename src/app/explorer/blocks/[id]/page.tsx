'use client';

import * as React from 'react';

import Link from 'next/link';

import ExplorerHeader from '@/components/ExplorerHeader';
import { Card, CardBody } from '@nextui-org/react';

export default function page() {
  return (
    <div className=" px-40">
      <div className="flex items-center justify-between my-6">
        <p className="text-2xl w-80">
          Blocks <span className="text-gray-400">#358952502</span>
        </p>
        <ExplorerHeader />
      </div>
      <Card>
        <CardBody>
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                {/* <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      First
                    </th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Timestamp
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      2023-11-20 07:40:42 (+UTC)
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Block Time
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      12 min ago
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Status
                    </td>
                    <td className=" flex items-center gap-2 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <span>
                        <img src="/check.png" className="w-4 h-4" />
                      </span>
                      Finalized
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Hash
                    </td>
                    <td className=" flex items-center gap-2 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      0xb28ed315d3272a379a36f4864538998619932ef94e04a37d0a5dd404014a0f29
                      <span>
                        <img src="/copy.png" className="w-4 h-4" />
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Parent Hash
                    </td>
                    <td className="text-sm text-sel_blue font-light px-6 py-4 whitespace-nowrap">
                      <Link href="#">
                        {' '}
                        0xb28ed315d3272a379a36f4864538998619932ef94e04a37d0a5dd404014a
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Extrinsics
                    </td>
                    <td className="text-sm text-sel_blue font-light px-6 py-4 whitespace-nowrap">
                      <Link href="#">23252</Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Extrinsics Count
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      23
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Validator
                    </td>
                    <td className="  text-sm text-sel_blue font-light px-6 py-4 whitespace-nowrap">
                      <Link href="#" className="flex items-center gap-2">
                        <span>
                          <img src="/profile.png" className="w-6 h-6" />
                        </span>
                        <span>
                          0xb28ed315d3272a379a36f4864538998619932ef94e04a37d0a5dd40
                        </span>
                        <span>
                          <img src="/copy.png" className="w-4 h-4" />
                        </span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Events
                    </td>
                    <td className="text-sm text-sel_blue font-light px-6 py-4 whitespace-nowrap">
                      <Link href="#">2525</Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Event Count
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      2
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Specs Version
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      71
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
