// // PaginationControls.tsx
// 'use client';

// import { FC } from 'react';

// import { useRouter, useSearchParams } from 'next/navigation';

// interface PaginationControlsProps {
//   hasNextPage: boolean;
//   hasPrevPage: boolean;
// }

// const PaginationControls: FC<PaginationControlsProps> = ({
//   hasNextPage,
//   hasPrevPage,
// }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const page = searchParams.get('page') ?? '1';
//   const per_page = searchParams.get('per_page') ?? '5';

//   return (
//     <div className="flex gap-2">
//       <button
//         className="bg-blue-500 text-white p-1"
//         disabled={!hasPrevPage}
//         onClick={() => {
//           router.push(
//             `/messsages/?page=${Number(page) - 1}&per_page=${per_page}`,
//           );
//         }}
//       >
//         prev page
//       </button>

//       <div>
//         {page} / {Math.ceil(10 / Number(per_page))}
//       </div>

//       <button
//         className="bg-blue-500 text-white p-1"
//         disabled={!hasNextPage}
//         onClick={() => {
//           router.push(
//             `/messsages/?page=${Number(page) + 1}&per_page=${per_page}`,
//           );
//         }}
//       >
//         next page
//       </button>
//     </div>
//   );
// };

// export default PaginationControls;

'use client';

// PaginationControls.tsx
import React from 'react';

import { useRouter } from 'next/navigation';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (newPage: number) => {
    // if (newPage >= 1 && newPage <= totalPages) {
    if (newPage >= 1) {
      onPageChange(newPage);
    }
  };

  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push(`?page=${currentPage - 1}&pageSize=20`);
          handlePageChange(currentPage - 1);
        }}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        {' '}
        Page {currentPage} of {totalPages}{' '}
      </span>
      <button
        onClick={() => {
          router.push(`?page=${currentPage + 1}&pageSize=20`);
          handlePageChange(currentPage + 1);
        }}
        // disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
