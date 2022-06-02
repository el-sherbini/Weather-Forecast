import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";

const TestChart = () => {
  // const svgRef = useRef();

  // const data = [
  //   { name: "John", score: 80 },
  //   { name: "Simon", score: 76 },
  //   { name: "Samantha", score: 90 },
  //   { name: "Patrick", score: 82 },
  //   { name: "Mary", score: 90 },
  //   { name: "Christina", score: 75 },
  //   { name: "Michael", score: 86 },
  // ];

  // const width = 900;
  // const height = 450;
  // const margin = { top: 50, bottom: 50, left: 50, right: 50 };

  // const svg = d3
  //   .select(svgRef.current)
  //   .attr("width", width - margin.left - margin.right)
  //   .attr("height", height - margin.top - margin.bottom)
  //   .attr("viewBox", [0, 0, width, height]);

  // const x = d3
  //   .scaleBand()
  //   .domain(d3.range(data.length))
  //   .range([margin.left, width - margin.right])
  //   .padding(0.1);

  // const y = d3
  //   .scaleLinear()
  //   .domain([0, 100])
  //   .range([height - margin.bottom, margin.top]);

  // svg
  //   .append("g")
  //   .attr("fill", "royalblue")
  //   .selectAll("rect")
  //   .data(data.sort((a, b) => d3.descending(a.score, b.score)))
  //   .join("rect")
  //   .attr("x", (d, i) => x(i))
  //   .attr("y", (d) => y(d.score))
  //   .attr("title", (d) => d.score)
  //   .attr("class", "rect")
  //   .attr("height", (d) => y(0) - y(d.score))
  //   .attr("width", x.bandwidth());

  // function yAxis(g) {
  //   g.attr("transform", `translate(${margin.left}, 0)`)
  //     .call(d3.axisLeft(y).ticks(null, data.format))
  //     .attr("font-size", "20px");
  // }

  // function xAxis(g) {
  //   g.attr("transform", `translate(0,${height - margin.bottom})`)
  //     .call(d3.axisBottom(x).tickFormat((i) => data[i].name))
  //     .attr("font-size", "20px");
  // }

  // svg.append("g").call(xAxis);
  // svg.append("g").call(yAxis);
  // svg.node();

  // console.log(chartData);
  // // const [data] = useState([25, 50, 35, 15, 94, 10]);
  // const svgRef = useRef();

  // useEffect(() => {
  //   // Setting up svg
  //   const width = 1000;
  //   const height = 400;
  //   // const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  //   const svg = d3
  //     .select(svgRef.current)
  //     .attr("width", width)
  //     .attr("height", height)
  //     // .style("background", "#d9d9d9")
  //     .style("border", "1px solid black")
  //     .style("margin", "100px")
  //     .style("overflow", "visible");
  //   // Setting up scaling
  //   const xScale = d3.scaleLinear().domain([0, 50]).range([0, width]);
  //   const yScale = d3
  //     .scaleLinear()
  //     .domain([0, d3.max(chartData.tempC) + d3.max(chartData.tempC) * 0.1])
  //     .range([height, 0]);
  //   const generateScaledLine = d3
  //     .line()
  //     .x((d, i) => xScale(i))
  //     .y(yScale)
  //     .curve(d3.curveCardinal);
  //   // Setting the axes
  //   const xAxis = d3
  //     .axisBottom(xScale)
  //     .ticks(chartData.length)
  //     .tickFormat((d) => d + 1);
  //   const yAxis = d3.axisLeft(yScale).ticks(5);
  //   svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);
  //   svg.append("g").call(yAxis);
  //   // Setting up the line
  //   svg
  //     .append("path")
  //     .attr("d", generateScaledLine(chartData))
  //     .attr("stroke", "black")
  //     .attr("stroke-width", 2)
  //     .attr("fill", "none");
  // }, [chartData]);

  return <div>{/* <svg ref={svgRef}> </svg> */}</div>;
};

export default TestChart;
