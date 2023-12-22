import React from 'react';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { ChevronDown } from 'lucide-react';

export default function Swap() {
  return (
    <></>
    // <Navbar>
    //   <NavbarBrand>
    //     <p className="font-bold text-inherit">ACME</p>
    //   </NavbarBrand>
    //   <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //     <Dropdown>
    //       <NavbarItem>
    //         <DropdownTrigger>
    //           <Button
    //             disableRipple
    //             className="p-0 bg-transparent data-[hover=true]:bg-transparent"
    //             endContent={<ChevronDown />}
    //             radius="sm"
    //             variant="light"
    //           >
    //             Features
    //           </Button>
    //         </DropdownTrigger>
    //       </NavbarItem>
    //       <DropdownMenu
    //         aria-label="ACME features"
    //         className="w-[340px]"
    //         itemClasses={{
    //           base: 'gap-4',
    //         }}
    //       >
    //         <DropdownItem
    //           key="autoscaling"
    //           description="ACME scales apps to meet user demand, automagically, based on load."
    //         >
    //           Autoscaling
    //         </DropdownItem>
    //         <DropdownItem
    //           key="usage_metrics"
    //           description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
    //         >
    //           Usage Metrics
    //         </DropdownItem>
    //       </DropdownMenu>
    //     </Dropdown>
    //     <NavbarItem isActive>
    //       <Link href="#" aria-current="page">
    //         Customers
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Integrations
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarContent justify="end">
    //     <NavbarItem className="hidden lg:flex">
    //       <Link href="#">Login</Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Button as={Link} color="primary" href="#" variant="flat">
    //         Sign Up
    //       </Button>
    //     </NavbarItem>
    //   </NavbarContent>
    // </Navbar>
  );
}
