import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import Button from './Button';

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  loading = false,
}) {
  const [goToPage, setGoToPage] = useState('');

  const handleGoToPage = (e) => {
    e.preventDefault();
    const page = parseInt(goToPage);
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      setGoToPage('');
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        {/* MOBILE */}
        <Button
          text="Previous"
          icon={ChevronLeft}
          disabled={currentPage === 1 || loading}
          onClick={() => onPageChange(currentPage - 1)}
          bgColor="bg-white"
          textColor="text-gray-700"
          hoverBgColor="hover:bg-gray-50"
          border="border-gray-300"
          size="sm"
        />
        <Button
          text="Next"
          icon={ChevronRight}
          disabled={currentPage === totalPages || loading}
          onClick={() => onPageChange(currentPage + 1)}
          bgColor="bg-white"
          textColor="text-gray-700"
          hoverBgColor="hover:bg-gray-50"
          border="border-gray-300"
          size="sm"
        />
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage}</span> of{' '}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          {/* GOTO PAGE FORM */}
          <form onSubmit={handleGoToPage} className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">Go to:</span>
            <input
              type="number"
              min="1"
              max={totalPages}
              value={goToPage}
              onChange={(e) => setGoToPage(e.target.value)}
              className="w-16 rounded-md border border-gray-300 px-2 py-1 text-sm"
              placeholder="Page"
            />
            <Button
              text="Go"
              type="submit"
              disabled={!goToPage || loading}
              bgColor="bg-white"
              textColor="text-gray-700"
              hoverBgColor="hover:bg-gray-50"
              border="border-gray-300"
              size="sm"
            />
          </form>

          {/* NAVIGATION BUTTONS */}
          <div className="flex items-center space-x-2">
            <Button
              icon={ChevronsLeft}
              disabled={currentPage === 1 || loading}
              onClick={() => onPageChange(1)}
              bgColor="bg-white"
              textColor="text-gray-700"
              hoverBgColor="hover:bg-gray-50"
              border="border-gray-300"
              size="sm"
              className="px-2"
            />
            <Button
              icon={ChevronLeft}
              disabled={currentPage === 1 || loading}
              onClick={() => onPageChange(currentPage - 1)}
              bgColor="bg-white"
              textColor="text-gray-700"
              hoverBgColor="hover:bg-gray-50"
              border="border-gray-300"
              size="sm"
              className="px-2"
            />
            <Button
              icon={ChevronRight}
              disabled={currentPage === totalPages || loading}
              onClick={() => onPageChange(currentPage + 1)}
              bgColor="bg-white"
              textColor="text-gray-700"
              hoverBgColor="hover:bg-gray-50"
              border="border-gray-300"
              size="sm"
              className="px-2"
            />
            <Button
              icon={ChevronsRight}
              disabled={currentPage === totalPages || loading}
              onClick={() => onPageChange(totalPages)}
              bgColor="bg-white"
              textColor="text-gray-700"
              hoverBgColor="hover:bg-gray-50"
              border="border-gray-300"
              size="sm"
              className="px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}