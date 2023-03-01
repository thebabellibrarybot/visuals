import * as d3 from 'd3';
import React, {useEffect, useRef} from 'react';

const GeoMap = ({props, marks}) => {
  // set ref 
  const svgRef = useRef();
  // create data for map:
  const jsonData = props;
  // Create data for circles:
  const markers = marks;
  // tooltip ref
  const tooltipRef = useRef();

  // updates with data
  useEffect(() => {
    // The svg
    const svg = d3.select(svgRef.current)
                  .attr("viewBox", [0, 0, 600, 400]) // set viewBox to enable zooming and panning
                  .call(d3.zoom().on("zoom", (event) => { // create zoom behavior and apply it to svg
                    g.attr("transform", event.transform);
                  }));
    const width = +svg.attr("width");
    const height = +svg.attr("height");

    // Remove existing child elements of the SVG
    svg.selectAll("*").remove();

    // tooltip
    const tooltip = d3.select(tooltipRef.current)
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px")

    // Map and projection
    const projection = d3.geoMercator()
        .center([-115.972754, 33.27214])                
        .scale(2040)                      
        .translate([ width/2, height/2 ]);

    // Draw the map
    const g = svg.append("g"); // create a new <g> element to hold the map and circles
    g.selectAll("path")
        .data(jsonData.features)
        .enter()
        .append("path")
        .attr("fill", "#b8b8b8")
        .attr("d", d3.geoPath()
            .projection(projection)
        )
        .style("stroke", "black")
        .style("opacity", .9);
    
    // Add circles:
    g.selectAll("circle")
        .data(markers)
        .enter()
        .append("circle")
        .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
        .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
        .attr("r", 5)
        .style("fill", "69b3a2")
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 1)
        .attr("fill-opacity", .4)

        // mouse functions on map circles
        .on('mouseenter', function() {
          console.log('hovering')
          d3.select(this).attr('fill', 'red');
        })
        .on('mouseleave', function() {
          d3.select(this).attr('fill', '#3498db');
        })
        .on('mouseover', function(event, d) {
          // add text element show value on hover
          d3.select(this)
          tooltip.html(`<h1>${d.name}</h1><h2>Longitude: ${d.long}</h2>`)
            .style("visibility", "visible")
            .style("top", (event.pageY-10)+"px")
            .style("left",(event.pageX+10)+"px");
        })
        .on('mouseout', (event, d) => {
          // select and remove the text element
          d3.select(this) 
          console.log('this should have removed it', d)
          tooltip.style("visibility", "hidden");
        })
    
  }, [jsonData, markers]);

  return (
    <div>
      <svg ref={svgRef} width="600" height="400"></svg>
      <div ref={tooltipRef}></div>
    </div>
  );
};

export default GeoMap;
