'use client';

import React from 'react';

import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';

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
import { ChevronDown, Moon, Search } from 'lucide-react';

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 py-2 px-6`,
        {
          'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-white': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
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
                  <div className="flex gap-2 bg-slate-200 rounded-lg p-4">
                    <Image
                      src="/google-logo.png"
                      width={52}
                      height={52}
                      alt="google"
                    />
                    <div>
                      <p className="font-semibold">Connect with Google</p>
                      <p>Wallet linked to your google account.</p>
                    </div>
                  </div>
                  <div className="flex gap-2 bg-slate-200 rounded-lg p-4">
                    <Image
                      src="/bitriel-logo-no-text.png"
                      width={52}
                      height={52}
                      // style={{ width: 'auto', height: '20px' }}
                      alt="metamask"
                    />
                    <div>
                      <p className="font-semibold">Bitriel Wallet</p>
                      <p>Using a browser extension.</p>
                    </div>
                  </div>
                  <div className="flex gap-2 bg-slate-200 rounded-lg p-4">
                    <Image
                      src="/metamask.png"
                      width={52}
                      height={52}
                      alt="metamask"
                    />
                    <div>
                      <p className="font-semibold">Metamask Wallet</p>
                      <p>Using a browser extension.</p>
                    </div>
                  </div>
                  <div className="flex gap-2 bg-slate-200 rounded-lg p-4">
                    <Image
                      src="/walletconnect.png"
                      width={52}
                      height={22}
                      alt="metamask"
                    />
                    <div>
                      <p className="font-semibold">WalletConnect</p>
                      <p>Using a browser extension.</p>
                    </div>
                  </div>
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

export default Header;
