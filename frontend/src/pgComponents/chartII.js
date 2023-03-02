import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import CheckedPreview from './checkedPreview';

const BarChart = ({ data }) => {

  const svgRef = useRef();
  // set checked items for dropdown
  const [checked, setChecked] = useState(['select']);


  useEffect(() => {

    // handleclick function appends data to checked array
    const handleClick = (d) => {
      setChecked(prevData => [...prevData, { 
        d
        }]);
    };

    // The svg
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // clear old charts when useEffect reRenders
 
    const width = +svg.attr('width');
    const height = +svg.attr('height');
    const margin = { top: 20, right: 20, bottom: 60, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // x axis scales
    const xScale = d3.scaleBand()
      .domain(data.map((d, i) => i))
      .range([margin.left, innerWidth])
      .padding(0.1);

    // y axis scales
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.num)])
      .range([innerHeight, 0]);

    // append dataBars to svg
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(i)) 
      .attr('y', d => yScale(d.num) + margin.top) 
      .attr('width', xScale.bandwidth())
      .attr('height', d => innerHeight - yScale(d.num))
      .attr('fill', '#3498db')

      // mouse functions for bars
      .on('mouseenter', function() {
        d3.select(this).attr('fill', '#82f9ef');
      })
      .on('mouseleave', function() {
        d3.select(this).attr('fill', '#3498db');
      })
      // add text element show value on hover
      .on('mouseover', (event, d) => {
        svg.append('text')
          .attr('class', 'value-text')
          .attr('x', xScale(data.indexOf(d)) + xScale.bandwidth() / 2)
          .attr('y', yScale(d.num) + margin.top - 5)
          .text(`${d.value}: ${d.num}`)
          .attr('text-anchor', 'middle')
          .attr('background-color', '#fff')
          .attr('fill', '#82f9ef');
      })
      .on('mouseout', (event, d) => {
        // select and remove the text element 
        svg.select('.value-text').remove();
      })
      // add to checked data
      .on('click', (event, d) => {
        d3.select(this)
        handleClick(d)
      })
        
    // declare axis's
    const xAxis = d3.axisBottom(xScale)
        .tickFormat(d => data[d].value);

    const yAxis = d3.axisLeft(yScale);

    // add x-axis
    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${innerHeight + margin.top})`) 
      .call(xAxis)
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .attr('text-anchor', 'end')
    

    // add y-axis
    svg.append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);
    
   
  }, [data]);

  return (
    <div>
      <h1>reresentation of asset via cultural institution: Morgan Library</h1>
      <svg ref={svgRef} width="600" height="400"></svg>
      <div className='logger'>
        <CheckedPreview props = {checked.length >= 1 ? checked : 'nada'} className = {checked.length >= 1 ? 'cool' : 'invisisble'}/>
      </div>
    </div>
  );
};

export default BarChart;