// import { EvmContractsItem } from '@/types';

const columns = [
  // {name: "Extrinsic ID", uid: "eid"},
  { name: 'Block', uid: 'name' },
  { name: 'Status', uid: 'blocksstatus' },
  { name: 'Age', uid: 'age' },
  { name: 'Extrinsics', uid: 'extrinsics' },
  { name: 'Events', uid: 'events' },
  { name: 'Validators', uid: 'validators' },
  { name: 'Block Hash', uid: 'blockhash' },
];

const users = [
  {
    id: 1,
    contract: 'lslsl',
    name: '99259350',
    evm_version: 3,
    transaction: 3,
    balance: 3233,
    verified_time: 'ii35',
  },
  
];

export { columns, users };
