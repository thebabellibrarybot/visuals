import * as d3 from 'd3';
import React, {useEffect, useRef} from 'react';


const GeoMap = ( datas ) => {


  // set ref 
  const svgRef = useRef();
  // create data for map:
  const jsonData = datas.props;

  // Create data for circles:
  const markers = datas.marks;



    useEffect(() => {

    // The svg
    var svg = d3.select(svgRef.current)
    const width = +svg.attr("width")
    const height = +svg.attr("height")

    // Map and projection
    var projection = d3.geoMercator()
        .center([-115.972754, 33.27214])                // GPS of location to zoom on
        .scale(2040)                       // This is like the zoom
        .translate([ width/2, height/2 ])


    // Create a color scale
    var color = d3.scaleOrdinal()
      .domain(["A", "B", "C" ])
      .range([ "#402D54", "#D18975", "#8FD175"])

    // Add a scale for bubble size
    var size = d3.scaleLinear()
      .domain([1, 100])  // What's in the data
      .range([ 30, 50])  // Size in pixel

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
        .style("opacity", .9)
    
    // Add circles:
    svg
      .selectAll("myCircles")
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
          svg.append('text')
            .attr('class', 'text')
            .attr("x", "200px")
            .attr("y", "30px")
            .text(`location: ${d.name}`)
            .attr('text-anchor', 'middle');
        })
        .on('mouseout', (event, d) => {
          // select and remove the text element
          d3.select(this) 
          console.log('this should have removed it', d)
          svg.select('.text').remove();
        })
    

    }, [jsonData, markers])



    return (
    <div>
        <h1>reresentation of asset via cultural institution: Morgan Library</h1>
        <svg ref={svgRef} width="600" height="400"></svg>
    </div>
    );
};
export default GeoMap;