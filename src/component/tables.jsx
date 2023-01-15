import React, { useEffect, useState } from "react";
import TableValue from "./tableValue";

const DataTables = () => {
  const [datarecords, setDataRecords] = useState([]);
  // const [infoData, setinfoData] = useState([]);
  const [count, setCount] = useState(1);
  const [entry, setEntry] = useState(10);

  useEffect(() => {
    window.ZOHO.CRM.API.getAllRecords({
      Entity: "Leads",
      sort_order: "asc",
      per_page: entry ? entry : 10,
      page: count,
    }).then(function (data) {
      console.log(data);
      setDataRecords(data.data);
    });
  }, [count, entry]);
  // useEffect(() => {
  //   window.ZOHO.CRM.API.getAllRecords({
  //     Entity: "Leads",
  //     sort_order: "asc",
  //     per_page: 100,
  //     page: 1,
  //   }).then(function (data) {
  //     setinfoData(data.info);
  //   });
  // }, []);

  let prev = () => {
    setCount(count - 1);
  };

  let nex = () => {
    setCount(count + 1);
  };

  return (
    <>
      <span className="flex justify-start ml-7">
        <button
          type="button"
          className="text-[10px] text-slate-600 "
          onClick={prev}
        >
          PREVIOUS
        </button>
        <h5 className="mx-2 font">{`PAGE ${count}`}</h5>
        <button
          type="button"
          className="text-[10px]  text-slate-600 "
          onClick={nex}
        >
          NEXT
        </button>
      </span>

      <span className="flex">
        {" "}
        <label for="company" className="text-sm font-medium text-gray-90">
          ENTRY
        </label>
        <input
          type="text"
          id="company"
          className="bg-gray-50 border border-none text-gray-900 text-[10px] rounded-lg focus:ring-blue-500 block w-15s p-0.5"
          placeholder="Flowbite"
          onChange={(e) => setEntry(e.target.value)}
        />
      </span>

      <button className="bg-lime-500 text-[11px]  text-white rounded-[5px] p-2 hover:bg-lime-800">
        create
      </button>
      <div className="container mt-2 p-5 mx-auto">
        <table className="table">
          <thead className="flex p-5">
            <tr className="flex p-5">
              <th scope="col font-sans animate-pulse text-[10px] font-semibold text-center">
                ID
              </th>
              <th scope="col font-sans animate-pulse text-[10px] font-semibold text-center">
                Full Name
              </th>
              <th scope="col font-sans animate-pulse text-[10px] font-semibold text-center">
                Email
              </th>
              <th scope="col font-sans animate-pulse text-[10px] font-semibold text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {datarecords.map((value) => (
              <TableValue key={value.id} {...value} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTables;
