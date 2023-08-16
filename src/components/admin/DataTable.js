import { useSortBy, useTable, useGlobalFilter } from "react-table";

export default function DataTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    rows,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;
  return (
    <div className="mt-5 bg-white px-2">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th
                  key={index}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-3 px-1 md:px- text-left font-semibold bg-yellow-200  uppercase tracking-wider"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <td key={i} {...cell.getCellProps()} className="py-4">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="flex items-center justify-end p-3">
      <input
        type="search"
        className="p-2 bg-gray-300 text-black rounded-md focus:outline-none"
        value={filter || ""}
        placeholder="Search"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
