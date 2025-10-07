import { useRef, useEffect } from 'react';
import { Printer } from 'lucide-react';
import Button from './Button';

export default function PrintTable({ tableRef, title = "Table Data" }) {
  useEffect(() => {
    // PRINT STYLES TO DOCUMENTS HEAD
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        body * {
          visibility: hidden;
        }
        #print-section,
        #print-section * {
          visibility: visible;
        }
        #print-section {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        .print-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          gap: 1rem;
        }
        .print-header img {
          height: 60px;
          width: auto;
        }
        .print-header h1 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 600;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1rem;
        }
        th, td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }
        th {
          background-color: #F1FCEE !important;
          color: #374151;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        tr:nth-child(even) {
          background-color: #f9fafb;
        }
        @page {
          size: landscape;
          margin: 2cm;
        }
        .no-print,
        .no-print * {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handlePrint = () => {
    // CREATE PRINT HEADER WITH LOGO AND TITLE
    const printHeader = document.createElement('div');
    printHeader.className = 'print-header';
    
    // ADD LOGO
    const logo = document.createElement('img');
    logo.src = '/public/edcLogo.svg';
    logo.alt = 'EDC Logo';
    printHeader.appendChild(logo);
    
    // ADD TITLE
    const printTitle = document.createElement('h1');
    printTitle.textContent = title;
    printHeader.appendChild(printTitle);
    
    // INSERT HEADER BEFORE TABLE
    if (tableRef.current) {
      tableRef.current.parentNode.insertBefore(printHeader, tableRef.current);
    }

    // ADD ID FOR PRINT STYLING
    const originalId = tableRef.current.parentNode.id;
    tableRef.current.parentNode.id = 'print-section';

    // PRINT
    window.print();

    // CLEANUP - REMOVE HEADER AND RESET ID
    if (tableRef.current) {
      tableRef.current.parentNode.removeChild(printHeader);
      tableRef.current.parentNode.id = originalId;
    }
  };

  return (
    <div className="mt-4 flex justify-end px-6 pb-4 no-print">
      <Button
        text="Export"
        icon={Printer}
        onClick={handlePrint}
        bgColor="bg-[#7AC52D]"
        hoverBgColor="hover:bg-white"
        textColor="text-[#182700]"
        border="border-[#7AC52D]"
        rounded="rounded-full"
        size="md"
        iconPosition="right"
      />
    </div>
  );
}