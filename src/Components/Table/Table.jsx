import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import jsPDF from "jspdf";
import Calendar from "react-calendar";
import "jspdf-autotable";
import "react-calendar/dist/Calendar.css";

const Table = () => {
  const [report, setReport] = useState(false);
  const [frequency, setFrequency] = useState(false);
  const [timeFrame, setTimeFrame] = useState(false);
  const [data, setData] = useState([]);
  const showReport = () => {
    setReport(!report);
  };
  const showFrequency = () => {
    setFrequency(!frequency);
  };
  const showTimeFrame = () => {
    setTimeFrame(!timeFrame);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/");
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const [reportGen, setReportGen] = useState(true);
  const generateReport = () => {
    setReportGen(false);
  };
  const prepareCSVContent = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Plate,Make,VIN,Model,Type,Date,Miles Driven\n";
    data.forEach((item) => {
      csvContent += `${item.plate},${item.make},${item.VIN},${item.model},${
        item.type
      },${new Date(item.date).toLocaleDateString()},${item.milesDriven}\n`;
    });
    return encodeURI(csvContent);
  };

  const handleDownloadCSV = () => {
    const csvContent = prepareCSVContent();
    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    const columns = [
      "License Plate",
      "Make",
      "VIN",
      "Model",
      "Type",
      "Date",
      "Miles Driven",
    ];
    const rows = data.map((item) => [
      item.plate,
      item.make,
      item.VIN,
      item.model,
      item.type,
      new Date(item.date).toLocaleDateString(),
      item.milesDriven,
    ]);

    doc.autoTable({ head: [columns], body: rows });

    doc.save("table_content.pdf");
  };
  const catMenu = useRef(null);
  const catMenu2 = useRef(null);
  const catMenu3 = useRef(null);
  const closeOpenMenus = (e) => {
    if (report && !catMenu.current?.contains(e.target)) {
      setReport(false);
    }
    if (frequency && !catMenu2.current?.contains(e.target)) {
      setFrequency(false);
    }
    if (timeFrame && !catMenu3.current?.contains(e.target)) {
      setTimeFrame(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);

  return (
    <div className="bg-black w-full h-full p-4 relative">
      <div
        className="w-full flex items-center border-t border-b  border-white justify-between"
        style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <div className="flex items-center text-white gap-4  justify-between w-[55%]">
          <p
            className="flex items-center border-r border-white justify-between gap-2 border-box p-2 flex-1"
            style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
          >
            Report{" "}
            <span>
              <IoIosArrowDown
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => showReport()}
              />
            </span>
            {report && (
              <div
                className="bg-black p-2 absolute flex  flex-col gap-4 w-[20%]"
                ref={catMenu}
                style={{ top: "8%", left: "1%" }}
              >
                <p
                  className="text-white font-sans border-white border-b hover:bg-gray-600 cursor-pointer"
                  style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  Total Miles Driven{" "}
                </p>
                <p
                  className="text-white font-sans border-white border-b hover:bg-gray-600 cursor-pointer"
                  style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  Energy Consumption{" "}
                </p>
                <p
                  className="text-white font-sans border-white border-b hover:bg-gray-600 cursor-pointer"
                  style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  Cost Analysis{" "}
                </p>
              </div>
            )}
          </p>

          <p
            className="flex items-center  border-r border-white justify-between p-2 gap-2 flex-1"
            style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
          >
            Frequency{" "}
            <span>
              <IoIosArrowDown
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => showFrequency()}
              />
            </span>
            {frequency && (
              <div
                ref={catMenu2}
                className="bg-black p-2  absolute flex flex-col gap-4 w-[20%]"
                style={{ top: "8%", left: "18%" }}
              >
                <p
                  className="text-white font-sans border-white border-b hover:bg-gray-600 cursor-pointer"
                  style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  Daily
                </p>
                <p
                  className="text-white font-sans border-white border-b hover:bg-gray-600 cursor-pointer"
                  style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  Weekly
                </p>
                <p
                  className="text-white font-sans border-white border-b hover:bg-gray-600 cursor-pointer"
                  style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  Monthly
                </p>
                <p
                  className="text-white font-sans border-white border-b hover:bg-gray-600 cursor-pointer"
                  style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  Yearly
                </p>
              </div>
            )}
          </p>
          <p
            className="flex items-center justify-between border-r border-white p-2 text-nowrap gap-2 flex-1"
            style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
          >
            Time Frame{" "}
            <span>
              <IoIosArrowDown
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => showTimeFrame()}
              />
            </span>
            {timeFrame && (
              <div
                ref={catMenu3}
                className="bg-black p-2  absolute flex flex-col gap-2 w-[25%]"
                style={{ top: "8%", left: "36%" }}
              >
                <div className="flex">
                  <section className="flex flex-col">
                    <p className="text-white font-bold text-lg flex bg-black justify-center items-center">
                      From
                    </p>
                    <Calendar className="bg-black  w-full max-w-[500px]" />
                  </section>
                  <section className="flex flex-col">
                    <p className="text-white font-bold text-lg flex bg-black justify-center items-center">
                      To
                    </p>
                    <Calendar className="bg-black  w-full max-w-[500px]" />
                  </section>
                </div>
              </div>
            )}
          </p>
        </div>
        <div className="flex items-center text-white">
          {reportGen ? (
            <button
              className="flex items-center gap-2 bg-blue-800 py-1 px-3 rounded-lg"
              onClick={() => generateReport()}
            >
              <span>
                <IoDocumentTextOutline />
              </span>
              Generate Report{" "}
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                className="flex items-center gap-2 font-sans border-white border hover:bg-blue-600 text-white py-1 px-3 rounded-lg"
                onClick={handleDownloadCSV}
              >
                Download CSV
              </button>

              <button
                className="flex items-center gap-2 hover:bg-blue-600 font-sans border border-white text-white py-1 px-3 rounded-lg"
                onClick={downloadPDF}
              >
                Download PDF
              </button>
            </div>
          )}
        </div>
      </div>
      {!reportGen && (
        <div className="pt-6">
          <table className="w-full text-white">
            <thead className=" p-3" style={{ background: "rgb(28,28,38)" }}>
              <tr>
                <th className="text-left p-2">License Plate</th>
                <th className="text-left p-2">Make</th>
                <th className="text-left p-2">VIN</th>
                <th className="text-left p-2">Model</th>
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Date</th>
                <th className="text-left p-2">Miles Driven</th>
              </tr>
            </thead>
            <tbody className="p-3">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="text-left p-2">{item.plate}</td>
                  <td className="text-left p-2">{item.make}</td>
                  <td className="text-left p-2">{item.VIN}</td>
                  <td className="text-left p-2">{item.model}</td>
                  <td className="text-left p-2">{item.type}</td>
                  <td className="text-left p-2">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="text-left p-2">{item.milesDriven}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
