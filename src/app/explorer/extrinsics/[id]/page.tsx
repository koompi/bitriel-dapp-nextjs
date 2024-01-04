'use client';

import * as React from 'react';

import Link from 'next/link';

import ExplorerHeader from '@/components/ExplorerHeader';
import { Card, CardBody } from '@nextui-org/react';
import { Copy } from 'lucide-react';

export default function page() {
  return (
    <div className=" px-40">
      <div className="flex items-center justify-between my-6">
        <p className="text-2xl w-80">
          Extrinsics <span className="text-gray-400">#358952502</span>
        </p>
        <ExplorerHeader />
      </div>
      <Card>
        <CardBody>
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
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
                      Block Number
                    </td>
                    <td className=" flex items-center gap-2 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      94593003
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Extrinsics Hash
                    </td>
                    <td className=" flex items-center gap-2 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      0xb28ed315d3272a379a36f4864538998619932ef94e04a37d0a5dd404014a0f29
                      <span>
                        {/* <img src="/copy.png" className="w-4 h-4" /> */}
                        <Copy size="16px" color="gray" />
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
                      Call
                    </td>
                    <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                      <Link
                        href="#"
                        className="px-3 py-2 text-white bg-primary rounded-3xl"
                      >
                        set
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Asset Transfer
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <div>
                        <span>
                          From
                          <span className="text-sel_blue ml-2">
                            0xkiew534o4s
                          </span>{' '}
                        </span>
                        <span className=" ml-4">
                          To
                          <span className="text-sel_blue ml-2">
                            PromoT....idator
                          </span>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Fee
                    </td>
                    <td className="  text-sm text-sel_blue font-light px-6 py-4 whitespace-nowrap">
                      <Link href="#" className="flex items-center gap-2">
                        0.000023535 SEL
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Tip
                    </td>
                    <td className="text-sm text-sel_blue font-light px-6 py-4 whitespace-nowrap">
                      <Link href="#">2525</Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Signer Public key
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      0xb28ed315d3272a379a36f4864538998619932ef94e04a37d0a5dd404014a
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Event
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      71
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Version
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      71
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Result
                    </td>
                    <td className="text-sm text-gray-900 font-light py-4 whitespace-nowrap">
                      <td className=" flex items-center gap-2 text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                        <span>
                          <img src="/check.png" className="w-4 h-4" />
                        </span>
                        Success
                      </td>
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
