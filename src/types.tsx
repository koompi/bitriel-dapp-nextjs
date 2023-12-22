export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
  bottom?: boolean;
  top?: boolean;
};

export type EvmContractsItem = {
 id:number;
  contract: string;
  name: string;
  evm_version: number;
  transaction: number;
  balance: number;
  verified_time: string;

}