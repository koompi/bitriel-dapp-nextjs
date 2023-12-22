import React from 'react';

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { ChevronDown, Search } from 'lucide-react';

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
      { item: 'Contracts', link: '/explorer/evm/contracts' },
      { item: 'ERC-20 Tokens', link: '/explorer/evm/erc20' },
      { item: 'ERC-721 Tokens', link: '/explorer/evm/erc721' },
    ],
  },
  {
    id: 3,
    name: 'WASM',
    dropdown: [
      { item: 'Transactions', link: '/explorer/wasm/transactions' },
      { item: 'Contracts', link: '/explorer/wasm/contracts' },
      { item: 'ERC-20 Tokens', link: '/explorer/wasm/erc20' },
      { item: 'ERC-721 Tokens', link: '/explorer/wasm/erc721' },
    ],
  },
];
function ExplorerNav() {
  return (
    <section>
      <div className="bg-image h-64 w-full flex items-center flex-col">
        <Navbar
          className="bg-transparent w-full px-40 mx-0 flex justify-end"
          isBlurred={false}
          classNames={{
            wrapper: ' px-0',
          }}
        >
          <div></div>
          <NavbarContent className="hidden sm:flex " justify="center">
            <NavbarItem>
              <Link className="text-white" href="#">
                Home
              </Link>
            </NavbarItem>
            {explorer_nav_items.map((data) => (
              <NavbarItem key={data.id}>
                <Link className="text-white" href="#">
                  <Dropdown placement="bottom-start">
                    <DropdownTrigger>
                      <Button className="capitalize bg-transparent border-none text-medium text-white">
                        {data.name}
                        <span>
                          <ChevronDown />
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
        <h1 className="text-white text-4xl font-bold mt-4">
          Selendra Blockchain Explorer
        </h1>

        <Input
          type="text"
          placeholder="Search by Address / Txn Hash / Block / Token / Ens"
          labelPlacement="outside"
          size="lg"
          radius="md"
          className="mt-8 px-80"
          classNames={{
            input: [''],
            // innerWrapper: ["px-0"],
            inputWrapper: ['px-0'],
          }}
          startContent={
            <>
              <Dropdown placement="bottom-start">
                <DropdownTrigger>
                  <Button className="capitalize pl-6  bg-transparent border-r-2">
                    Filter
                    <span>
                      <ChevronDown />
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
                  <DropdownItem key="text">Addresses</DropdownItem>
                  <DropdownItem key="number">Tokens</DropdownItem>
                  <DropdownItem key="date">Name Tags</DropdownItem>
                  <DropdownItem key="single_date">Label</DropdownItem>
                  <DropdownItem key="iteration">Website</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          }
          endContent={
            // <div>
            <Button
              isIconOnly
              color="primary"
              aria-label="Like"
              className="mr-1"
            >
              {/* <HeartIcon /> */}
              <Search />
            </Button>
            // </div>
          }
        />
      </div>
    </section>
  );
}

export default ExplorerNav;
