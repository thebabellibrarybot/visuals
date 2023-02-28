import { geoPath, select, geoMercator } from 'd3';
import React, {useEffect, useRef} from 'react';


const GeoMap = ( data ) => {


    // set ref 
    const svgRef = useRef();
    const jsonData = data.props;


    useEffect(() => {

        // declare svg obj
        const svg = select(svgRef.current);
        
        const width = +svg.attr('width');
        const height = +svg.attr('height');

        // Map and projection
        var projection = geoMercator()
            .center([4, 47])              
            .scale(1020)                       
            .translate([ width/2, height/2 ])
        // Create data for circles:
        var markers = [
            {long: 9.083, lat: 42.149, name: "Corsica"}, // corsica
            {long: 7.26, lat: 43.71, name: "Nice"}, // nice
            {long: 2.349, lat: 48.864, name: "Paris"}, // Paris
            {long: -1.397, lat: 43.664, name: "Hossegor"}, // Hossegor
            {long: 3.075, lat: 50.640, name: "Lille"}, // Lille
            {long: -3.83, lat: 58, name: "Morlaix"}, // Morlaix
        ];
        
        // Load external data and boot

        // Filter data

        // Draw the map
        svg.append("g")
            .selectAll("path")
            .data(jsonData.features)
            .enter()
            .append("path")
            .attr("fill", "#b8b8b8")
            .attr("d", geoPath()
                .projection(projection)
            )
            .style("stroke", "black")
            .style("opacity", .3)

        // create a tooltip
        var Tooltip = select("#my_dataviz")
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
            .html(jsonData.features.name + "<br>" + "long: " + jsonData.features.long + "<br>" + "lat: " + jsonData.features.lat)
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
            .attr("r", 14)
            .attr("class", "circle")
            .style("fill", "69b3a2")
            .attr("stroke", "#69b3a2")
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
    </div>
    );
};


export default GeoMap;