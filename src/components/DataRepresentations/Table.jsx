/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import * as d3 from "d3";

const Table = ({ cityHistoryWeather }) => {
  const tableHeaders = ["Date", "Max Temp (°C)", "Min Temp (°C)"];

  useEffect(() => {
    if (cityHistoryWeather)
      DrawTable(cityHistoryWeather, ["date", "maxtempC", "mintempC"]);
  }, [cityHistoryWeather]);

  const DrawTable = (data, columns) => {
    d3.selectAll("table").remove();
    let table = d3
      .select("#tableContainer")
      .append("table")
      .attr(
        "class",
        "w-full overflow-hidden rounded-xl p-10 text-center mb-10"
      );
    let thead = table
      .append("thead")
      .attr("class", "bg-[#515ec5] text-sm text-slate-300");
    let tbody = table.append("tbody").attr("class", "bg-slate-200");
    let rows = tbody.selectAll("tr").data(data).enter().append("tr");

    thead
      .append("tr")
      .selectAll("th")
      .data(tableHeaders)
      .enter()
      .append("th")
      .text((column) => {
        return column;
      });

    thead.selectAll("th").attr("class", "p-2");

    rows
      .selectAll("td")
      .data((row) => {
        return columns.map((column) => {
          return { column: column, value: row[column] };
        });
      })
      .enter()
      .append("td")
      .text((d) => {
        return d.value;
      });

    rows
      .selectAll("td")
      .attr(
        "class",
        "border-y border-white p-1 text-sm dark:bg-slate-800 dark:border-slate-900"
      );

    return table;
  };

  return (
    <div>
      <h1 className="mb-4 text-center font-bold sm:text-2xl">
        City temperature last 7 days
      </h1>
      <div id="tableContainer"></div>
    </div>
  );
};

export default Table;
