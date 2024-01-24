// page.tsx

import PaginationControls from '@/components/PaginationControls';

const data = [
  'entry 1',
  'entry 2',
  'entry 3',
  'entry 4',
  'entry 5',
  'entry 6',
  'entry 7',
  'entry 8',
  'entry 9',
  'entry 10',
];

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '5';

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const entries = data.slice(start, end);

  return (
    <div className="flex flex-col gap-2 items-center">
      {entries.map((entry) => (
        <p key={entry}>{entry}</p>
      ))}

      <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
      />
    </div>
  );
}

// 'use client';

// // YourPageComponent.tsx
// import React, { useState } from 'react';

// import PaginationControls from '../../components/PaginationControls';

// const YourPageComponent: React.FC = () => {
//   const data = [
//     'entry 1',
//     'entry 2',
//     'entry 3',
//     'entry 4',
//     'entry 5',
//     'entry 6',
//     'entry 7',
//     'entry 8',
//     'entry 9',
//     'entry 10',

//   ];

//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const [currentPage, setCurrentPage] = useState(1);

//   const start = (currentPage - 1) * itemsPerPage;
//   const end = start + itemsPerPage;
//   const currentData = data.slice(start, end);

//   const handlePageChange = (newPage: number) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div>
//       <h1>Your Data</h1>
//       <ul>
//         {currentData.map((entry, index) => (
//           <li key={index}>{entry}</li>
//         ))}
//       </ul>
//       <PaginationControls
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default YourPageComponent;
