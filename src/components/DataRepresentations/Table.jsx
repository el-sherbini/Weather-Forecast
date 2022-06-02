import React, { useEffect } from "react";
import * as d3 from "d3";
import { useDispatch, useSelector } from "react-redux";
import { getCityHistoryWeather } from "../../store/weatherSlice";

const Table = () => {
  const { cityHistoryWeather, city, country } = useSelector(
    (state) => state.weather
  );

  const dispatch = useDispatch();

  const today = new Date().toISOString().slice(0, 10);
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 6);

  const tableHeaders = ["Date", "Max Temp (°C)", "Min Temp (°C)"];

  useEffect(() => {
    if (city) {
      dispatch(
        getCityHistoryWeather({
          city: city ? city : country,
          startDate: lastWeek.toISOString().slice(0, 10),
          endDate: today,
        })
      );
    }

    console.log(cityHistoryWeather, city, country);
    if (cityHistoryWeather)
      DrawTable(cityHistoryWeather, ["date", "maxtempC", "mintempC"]);
  }, [city]);

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
      .attr("class", "bg-[#515ec5] text-sm text-white");
    let tbody = table.append("tbody").attr("class", "bg-gray-200");
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

    rows.selectAll("td").attr("class", "border-y border-white p-1 text-sm");

    return table;
  };

  return <div id="tableContainer"></div>;
};

export default Table;
