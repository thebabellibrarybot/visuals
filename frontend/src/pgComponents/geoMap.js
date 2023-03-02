import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';
import CheckedPreview from './checkedPreview';

const GeoMap = ({props, marks, hw, startpoint, scale, viewer}) => {

  const svgRef = useRef();
  const tooltipRef = useRef();
  // create data for map:
  const jsonData = props;
  // Create data for circles:
  const markers = marks;
  // get heigh // width // start location from props
  const svgHeight = hw[0];
  const svgWidth = hw[1];
  const startlocation = startpoint;
  const myScale = scale;
  // set checked items for dropdown
  const [checked, setChecked] = useState(['select']);



  // updates with data
  useEffect(() => {

    // handleclick function appends data to checked array
    const handleClick = (d) => {
      setChecked(prevData => [...prevData, { 
        d
        }]);
    };
    // The svg
    const svg = d3.select(svgRef.current)
                  .attr("viewBox", [0, 0, 100, 150]) 
                  .call(d3.zoom().on("zoom", (event) => { 
                    g.attr("transform", event.transform);
                  }));
    const width = +svg.attr("width");
    const height = +svg.attr("height");

    svg.selectAll("*").remove(); // clear old charts for useEffect

    // tooltip
    const tooltip = d3.select(tooltipRef.current)
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background-color", "#262d2f")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px")

    // Map and projection
    const projection = d3.geoMercator()
        .center(startlocation)                
        .scale(myScale)                      
        .translate([ width/2, height/2 ]);

    // Draw the map
    const g = svg.append("g"); 
    g.selectAll("path")
        .data(jsonData.features)
        .enter()
        .append("path")
        .attr("fill", "#1f2229")
        .attr("d", d3.geoPath()
            .projection(projection)
        )
        .style("stroke", "#3f7688")
        .style("opacity", .9);
    
    // Add circles:
    g.selectAll("circle")
        .data(markers)
        .enter()
        .append("circle")
        .attr("cx", function(d){ return projection([d.longitude, d.latitude])[0] })
        .attr("cy", function(d){ return projection([d.longitude, d.latitude])[1] })
        .attr("r", 5)
        .style("fill", "69b3a2")
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 1)
        .attr("fill-opacity", .4)

        // mouse functions on map circles
        .on('mouseenter', function() {
          d3.select(this).attr('fill', 'red');
        })
        .on('mouseleave', function() {
          d3.select(this).attr('fill', '#3498db');
        })
        .on('mouseover', function(event, d) {
          // add text element show value on hover
          d3.select(this)
          tooltip.html(`<h1>Addy: ${d.street}, ${d.citi}</h1><h2>counts: ${d.counts_locations},<br/>price sqft ${d.price_sqft}</h2>`)
            .style("visibility", "visible")
            .style("top", (event.pageY-10)+"px")
            .style("left",(event.pageX+10)+"px");
        })
        .on('mouseout', (event, d) => {
          // select and remove the text element
          d3.select(this) 
          tooltip.style("visibility", "hidden");
        })
        // add to checked data
        .on('click', (event, d) => {
          d3.select(this)
          handleClick(d)
        })
    
  }, [jsonData, markers, startlocation]);

  return (
    <div className='geo-svg'>
      <svg ref={svgRef} width={svgWidth} height={svgHeight}></svg>
      <div ref={tooltipRef}></div>
      <div className='logger'>
        {viewer ? <CheckedPreview props = {checked.length >= 1 ? checked : 'nada'} className = {checked.length >= 1 ? 'cool' : 'invisisble'}/> : null}
      </div>
    </div>
  );
};

export default GeoMap;