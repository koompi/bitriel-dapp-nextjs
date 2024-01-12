'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { wallets } from '@/constants';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { ChevronDown, Moon, Search, SearchIcon } from 'lucide-react';

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 py-2 px-4  `,
        {
          'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-white': selectedLayout,
        },
      )}
    >
      <MobileNav />

      <div className=" h-[47px] items-center justify-between px-4 hidden md:flex lg:flex">
        <Input
          type="email"
          className="w-[300px]"
          placeholder="Search"
          labelPlacement="outside"
          variant="bordered"
          startContent={
            <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <div className="flex items-stretch justify-between gap-5 max-md:flex-wrap max-md:justify-center">
          <Button isIconOnly color="primary" variant="faded" aria-label="Moon">
            <Moon />
          </Button>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button
                variant="bordered"
                endContent={<ChevronDown />}
                startContent={
                  <Image
                    src="/sel-logo-blue.png"
                    alt="sel"
                    width={12}
                    height={22}
                  />
                }
              >
                Selendra
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
              <DropdownItem
                key="new"
                startContent={
                  <Image src="/ethereum.png" alt="sel" width={12} height={22} />
                }
              >
                Ethereum
              </DropdownItem>
              <DropdownItem
                key="copy"
                startContent={
                  <Image src="/polkadot.png" alt="sel" width={12} height={22} />
                }
              >
                Polkadot
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Button color="secondary" onClick={onOpen}>
            Connect Wallet
          </Button>
        </div>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <p className="text-2xl font-semibold">Connect Wallet</p>
                  <p>Choose a method to connect</p>
                </ModalHeader>
                <ModalBody>
                  {wallets.map((x) => (
                    <Link
                      href={x.link}
                      key={x.id}
                      className="flex gap-4 bg-slate-200 rounded-lg p-4 items-center"
                    >
                      <Image
                        src={x.img}
                        width={500}
                        height={500}
                        alt="google"
                        className="h-auto w-10"
                      />
                      <div>
                        <p className="font-semibold">{x.title}</p>
                        <p>{x.sub}</p>
                      </div>
                    </Link>
                  ))}
                </ModalBody>
                <ModalFooter>
                  <p>
                    By connecting a wallet, you acknowledge that you have read
                    and understand the Bitriel Protocol Disclaimer.{' '}
                    <span className="text-sel_blue">
                      Read the privacy policy.
                    </span>
                  </p>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

const MobileNav = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex items-center justify-between mr-8 space-x-4  md:hidden ">
      <Link
        href="/"
        className="flex flex-row space-x-3 items-center justify-center md:hidden"
      >
        <Image
          src="/bitriel-logo.png"
          height={500}
          width={500}
          alt="logo"
          className="h-6 w-auto"
        />
      </Link>
      <div className="flex justify-center items-center gap-3">
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top"
          className="py-4"
          size="3xl"
        >
          <ModalContent>
            {() => (
              <ModalBody>
                <Input
                  type="email"
                  className="w-80"
                  placeholder="Search"
                  labelPlacement="outside"
                  variant="bordered"
                  startContent={
                    <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                />
              </ModalBody>
            )}
          </ModalContent>
        </Modal>
        <Button isIconOnly variant="bordered" size="sm" onClick={onOpen}>
          <SearchIcon color="lightgray" size="18px" />
        </Button>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button
              className="px-[0px]"
              size="sm"
              variant="bordered"
              endContent={<ChevronDown color="lightgray" />}
              startContent={
                <Image
                  src="/sel-logo-blue.png"
                  alt="sel"
                  width={12}
                  height={22}
                />
              }
            ></Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
            <DropdownItem
              key="new"
              startContent={
                <Image src="/ethereum.png" alt="sel" width={12} height={22} />
              }
            >
              Ethereum
            </DropdownItem>
            <DropdownItem
              key="copy"
              startContent={
                <Image src="/polkadot.png" alt="sel" width={12} height={22} />
              }
            >
              Polkadot
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
