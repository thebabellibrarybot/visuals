import * as d3 from 'd3';
import React, {useEffect, useRef} from 'react';


const GeoMap = ( datas ) => {


    // set ref 
    const svgRef = useRef();
    const jsonData = datas.props;
    console.log(jsonData,'json')


    useEffect(() => {

// The svg
var svg = d3.select(svgRef.current),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// Map and projection
var projection = d3.geoMercator()
    .center([2, 47])                // GPS of location to zoom on
    .scale(1020)                       // This is like the zoom
    .translate([ width/2, height/2 ])


// Create data for circles:
var markers = [
  {long: 9.083, lat: 42.149, group: "A", size: 34}, // corsica
  {long: 7.26, lat: 43.71, group: "A", size: 14}, // nice
  {long: 2.349, lat: 48.864, group: "B", size: 87}, // Paris
  {long: -1.397, lat: 43.664, group: "B", size: 41}, // Hossegor
  {long: 3.075, lat: 50.640, group: "C", size: 78}, // Lille
  {long: -3.83, lat: 58, group: "C", size: 12} // Morlaix
];

// Load external data and boot

    // Filter data
    jsonData.features = jsonData.features.filter( function(d){return d.properties.name==="France"} )

    // Create a color scale
    var color = d3.scaleOrdinal()
      .domain(["A", "B", "C" ])
      .range([ "#402D54", "#D18975", "#8FD175"])

    // Add a scale for bubble size
    var size = d3.scaleLinear()
      .domain([1,100])  // What's in the data
      .range([ 4, 50])  // Size in pixel

    // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(jsonData.features)
        .enter()
        .append("path")
          .attr("fill", "#b8b8b8")
          .attr("d", d3.geoPath()
              .projection(projection)
          )
        .style("stroke", "black")
        .style("opacity", .3)

    // create a tooltip
    var Tooltip = d3.select("#my_dataviz")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 1)
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(d) {
      Tooltip.style("opacity", 1)
    }
    var mousemove = function(d) {
      Tooltip
        .html(d.name + "<br>" + "long: " + d.long + "<br>" + "lat: " + d.lat)
    }
    var mouseleave = function(d) {
      Tooltip.style("opacity", 0)
    }

    // Add circles:
    svg
      .selectAll("myCircles")
      .data(markers)
      .enter()
      .append("circle")
        .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
        .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
        .attr("r", function(d){ return size(d.size) })
        .style("fill", function(d){ return color(d.group) })
        .attr("stroke", function(d){ return color(d.group) })
        .attr("stroke-width", 3)
        .attr("fill-opacity", .4)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
    

    }, [jsonData])



    return (
    <div>
        <h1>reresentation of asset via cultural institution: Morgan Library</h1>
        <svg ref={svgRef} width="600" height="400"></svg>
        <p>aft</p>
    </div>
    );
};
export default GeoMap;