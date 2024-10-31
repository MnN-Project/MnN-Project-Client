import React from 'react';

const NextTable = ({ columns, renderRow, data }) => {
  return (
    <table className="w-full">
      <thead className="h-12">
        <tr className="text-left text-dark-gray text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <React.Fragment key={i}>{renderRow(item, i)}</React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default NextTable;
