"use client";
import { IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4, IMAGE_5, VIEW } from "@/public";
import Image from "next/image";
import * as React from "react";
import { useTable } from "react-table";
import { motion } from "framer-motion";

const TableData = [
  {
    name: "Marcus Bergson",
    profile_img: IMAGE_1,
    date: "",
    amount: "$80,000",
    status: "Paid",
    invoice: "view",
  },
  {
    name: "Jaydon Vaccaro",
    profile_img: IMAGE_2,
    date: "",
    amount: "$150,000",
    status: "Paid",
    invoice: "view",
  },
  {
    name: "Corey Schleifer",
    profile_img: IMAGE_3,
    date: "",
    amount: "$100,000",
    status: "Refund",
    invoice: "view",
  },
  {
    name: "Cooper Press",
    profile_img: IMAGE_4,
    date: "",
    amount: "$80,000",
    status: "Paid",
    invoice: "view",
  },
  {
    name: "Cooper Press",
    profile_img: IMAGE_5,
    date: "",
    amount: "$78,000",
    status: "Refund",
    invoice: "view",
  },
];
const TableComponent = () => {
  const [details, setDetails] = React.useState(null);
  const data = React.useMemo(() => TableData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",

        accessor: (row) => (
          <div className="flex items-center gap-3">
            <div>
              <Image src={row.profile_img} width={30} height={30} alt="image" />
            </div>
            <span>{row.name}</span>
          </div>
        ),
      },
      {
        Header: "Date",
        accessor: () => (
          <div>
            <span className="text-sm text-text_dark_gray">{`${new Date().toLocaleString(
              "default",
              {
                month: "short",
              }
            )} ${new Date().getDate()}, ${new Date().getFullYear()}`}</span>
          </div>
        ),
      },
      {
        Header: "Amount",
        accessor: (row) => (
          <div>
            <span className="text-[#0D062D] font-medium dark:text-white">
              {row.amount}
            </span>
          </div>
        ),
      },
      {
        Header: "Status",
        accessor: (row) => {
          return (
            <div>
              <span
                className={`${
                  row.status === "Paid"
                    ? "text-text_green"
                    : row.status === "Refund"
                    ? "text-text_error"
                    : ""
                }`}
              >
                {row.status}
              </span>
            </div>
          );
        },
      },
      {
        Header: "Invoice",
        accessor: (row) => (
          <div className="flex gap-3 items-center cursor-pointer">
            <div>
              <Image src={VIEW} width={17} height={17} alt="view icon" />
            </div>
            <span>{row.invoice}</span>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 2 }}
      className="bg-white w-[802px] h-[380px] mt-4 rounded-3xl border border-border_color px-4 pt-5 pb-2 overflow-y-scroll dark:bg-slate-950 dark:border-none"
    >
      <div>
        <div className="flex justify-between">
          <span className="font-semibold text-text_black dark:text-white">
            Last Orders
          </span>
          <span className="text-text_green font-medium">See all</span>
        </div>
        <table {...getTableProps()} className="w-full mt-4">
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i) => (
                  <th
                    key={i}
                    {...column.getHeaderProps()}
                    className="text-text_dark_gray font-thin text-left pb-5 pr-5"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="text-left">
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr key={i} {...row.getRowProps}>
                  {row.cells.map((cell) => (
                    <td
                      key={i}
                      {...cell.getCellProps()}
                      className=" py-3 border-t pr-5"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TableComponent;
