import { useRef } from 'react';
import Pagination from './Pagination';
import PrintTable from './PrintTable';

export default function Table({ 
  columns,
  headers,  // FOR COMPATIBILITY
  data, 
  className = "",
  hover = true,
  striped = false,
  compact = false,
  // Pagination props
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  loading = false,
  showPagination = true,
  showExport = true,
  title = "Table Data"
}) {
  const tableRef = useRef(null);
  // CONVERT HEADERS ARRAY TO COLUMNS FOR COMPATIBILITY
  const tableColumns = columns || (headers?.map(header => ({
    header,
    key: header === "S/N" ? "s_n" : header.toLowerCase().replace(/[/.]/g, '').replace(/\s+/g, '_')
  }))) || [];

  // TRANSFORM DATA KEYS TO MATCH HEADER FORMAT IF USING THE OLD FORMAT
  const transformedData = !columns && headers ? data.map((row, idx) => {
    const newRow = {};
    headers.forEach(header => {
      if (header === "S/N") {
        newRow["s_n"] = row["s_n"] || idx + 1;
      } else {
        const key = header.toLowerCase().replace(/[/.]/g, '').replace(/\s+/g, '_');
        newRow[key] = row[key] || row[header.toLowerCase()] || row[header] || '';
      }
    });
    return newRow;
  }) : data;
  // Handle empty data
  if (!data || data.length === 0) {
    return (
      <div className={`overflow-x-auto ${className}`}>
        <table className="min-w-full bg-white">
          <thead className="bg-[#F1FCEE]">
            <tr>
              {tableColumns.map((column, index) => (
                <th
                  key={index}
                  className={`
                    ${compact ? 'px-3 py-2' : 'px-6 py-3'}
                    text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                    text-left
                    ${column.width ? column.width : ''}
                  `}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td 
                colSpan={tableColumns.length} 
                className="px-6 py-4 text-center text-sm text-gray-500"
              >
                No data available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table ref={tableRef} className="min-w-full bg-white">
        <thead className="bg-[#F1FCEE]">
          <tr>
            {tableColumns.map((column, index) => (
              <th
                key={index}
                className={`
                  ${compact ? 'px-3 py-2' : 'px-6 py-3'}
                  text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                  text-left
                  ${column.width ? column.width : ''}
                `}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`bg-white divide-y divide-gray-200`}>
          {transformedData.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className={`
                ${hover ? 'hover:bg-[#F1FCEE]' : ''}
                ${striped && rowIndex % 2 === 1 ? 'bg-[#F1FCEE]' : ''}
              `}
            >
              {tableColumns.map((column, colIndex) => (
                <td 
                  key={`${rowIndex}-${colIndex}`} 
                  className={`
                    ${compact ? 'px-3 py-2' : 'px-6 py-4'}
                    whitespace-nowrap 
                    text-sm 
                    text-gray-900
                    text-left
                  `}
                >
                  {column.render 
                    ? column.render(row[column.key], row)
                    : row[column.key]
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {showPagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          loading={loading}
        />
      )}
      {showExport && (
        <PrintTable 
          tableRef={tableRef}
          title={title}
        />
      )}
    </div>
  )
}