import React from "react";

const TableValue = (value) => {
  return (
    <>
      <tr className="text-neutral-400 text-center">
        <th scope="row" className="mx-auto  tracking-wide ">
          {value.id}
        </th>
        <td
          className={`${
            value.Email
              ? "mx-auto  tracking-wide text-lime-500 "
              : "mx-auto  tracking-wide text-orange-500 "
          }`}
        >
          {value.Full_Name}
        </td>
        <td className="mx-auto  tracking-wide ">{value.Email}</td>
        <td className="flex  tracking-wide">
          <div class="space-x-6  mx-auto ">
            <button
              type="button"
              className="font-sans bg-teal-700 hover:bg-teal-800 p-1 rounded-md text-yellow-100 text-[8px] antialiased md:subpixel-antialiased..."
            >
              VIEW
            </button>
            <button
              type="button"
              className="font-sans bg-lime-700 hover:bg-Lime-800 p-1 rounded-md text-yellow-100 text-[8px] antialiased md:subpixel-antialiased..."
            >
              EDIT
            </button>
            <button
              type="button"
              className="font-sans bg-rose-200 hover:bg-rose-800 p-1 rounded-md text-yellow-100 text-[8px] antialiased md:subpixel-antialiased..."
            >
              DELETE
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableValue;
