import React from 'react';
import { FaRegEye, FaRegEdit } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const Table = ({ columns, data, viewPath, editPath, onDelete }) => (
  <div className="w-full rounded-md p-4 bg-white">
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead className="text-xs uppercase text-dark bg-light-gray rounded-md">
          <tr>
            {columns.map((item, i) => (
              <th key={i + 1} className={`px-2 py-3 capitalize ${item.className}`}>
                {item.Title}
              </th>
            ))}
            <th className="px-2 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-light-gray bg-white hover:bg-light-gray"
              >
                {Object.entries(row)
                  .filter(([key]) => key !== 'id' && key !== 'slug') // Exclude 'id' and 'slug' from rendering
                  .map(([key, value], i) => (
                    <td
                      key={i + 1}
                      className={'px-2 py-4 items-center capitalize border-b border-gray '}
                    >
                      <span
                        className={`${row.Invoice ? (value === 'unpaid' ? 'p-1 rounded-sm bg-danger text-white' : value === 'paid' ? 'text-white bg-light-green rounded-sm p-1' : '') : ''}`}
                      >
                        {value}
                      </span>
                    </td>
                  ))}
                <td className="px-2 py-4 flex items-center gap-2">
                  <Link to={`${viewPath}/${row.slug || row.Invoice}`} title="View">
                    <FaRegEye className="text-md text-dark-gray" />
                  </Link>
                  {!row.Invoice ? (
                    <>
                      <Link to={`${editPath}/${row.slug}`} title="Edit">
                        <FaRegEdit className="text-md text-dark-gray" />
                      </Link>

                      <button onClick={() => onDelete(row)} title="Delete">
                        <FaRegTrashCan className="text-md text-danger/35" />
                      </button>
                    </>
                  ) : null}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-4 text-gray-500">
                No items found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

// Define prop types for Table component
Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      className: PropTypes.string
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  viewPath: PropTypes.string.isRequired,
  editPath: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Table;
