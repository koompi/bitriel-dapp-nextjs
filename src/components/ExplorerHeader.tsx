import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,

  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { ChevronDown, } from 'lucide-react';

import './style.css';

const explorer_nav_items = [
  {
    id: 1,
    name: 'Blockchain',

    dropdown: [
      { item: 'Blocks', link: '/explorer/blocks' },
      { item: 'Extrinsics', link: '/explorer/extrinsics' },
      { item: 'Transfers', link: '/explorer/transfers' },
      { item: 'Events', link: '#' },
      { item: 'Account', link: '/explorer/accounts' },
    ],
  },
  {
    id: 2,
    name: 'EVM',
    dropdown: [
      { item: 'Transactions', link: '/explorer/evm/transactions' },
      { item: 'Contracts',  link: '/explorer/evm/contracts' },
      { item: 'ERC-20 Tokens', link: '/explorer/evm/erc20' },
      { item: 'ERC-721 Tokens', link: '/explorer/evm/erc721' },
    ],
  },
  {
    id: 3,
    name: 'WASM',
    dropdown: [
      { item: 'Transactions', link: '#' },
      { item: 'Contracts', link: '#' },
      { item: 'ERC-20 Tokens', link: '#' },
      { item: 'ERC-721 Tokens', link: '#' },
    ],
  },
];

function ExplorerHeader() {
  return (
    <>
      <Navbar
        className="bg-transparent w-full px-0 mx-0 flex justify-end "
        isBlurred={false}
        classNames={{
          wrapper: ' px-0',
        }}
      >
        <div></div>
        <NavbarContent className="hidden sm:flex " justify="center">
          <NavbarItem>
            <Link className="text-gray-600" href="#">
              Home
            </Link>
          </NavbarItem>
          {explorer_nav_items.map((data) => (
            <NavbarItem key={data.id}>
              <Link className="text-gray-600" href="#">
                <Dropdown placement="bottom-start">
                  <DropdownTrigger>
                    <Button className="capitalize bg-transparent border-none text-medium text-gray-600">
                      {data.name}
                      <span>
                        <ChevronDown size={14}/>
                      </span>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    // selectionMode="single"
                    // selectedKeys={selectedKeys}
                    // onSelectionChange={setSelectedKeys}
                  >
                    {data.dropdown.map((x) => (
                      <DropdownItem key="text">
                        <Link href={x.link} className="text-gray-500">
                          {x.item}
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default ExplorerHeader;
