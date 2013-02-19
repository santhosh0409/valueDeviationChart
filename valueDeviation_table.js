d3.json('data.json', function(data){

var boxWidth = 50, x = 10, y = 30, margin = 1, width = data.length * boxWidth + margin, values = singleDimenArr(data);
    
var color = d3.scale.linear() 
      .domain([d3.min(values), d3.median(values), d3.max(values)])
      .range(["red", "yellow", "green"]);

var svg = d3.select('#viz')
      .append('svg')
      .attr('width', width)
      .attr('height', width);
            
var rect = svg.selectAll('rect')
      .data(values)
     .enter().append('rect')
      .attr('x', function(d, i){ return (i%data.length) * boxWidth; })
      .attr('y', function(d, i){ return Math.floor(i/data.length) * boxWidth ;})
      .attr('width', boxWidth)
      .attr('height', boxWidth)
      .style('fill', function(d){ return color(d); });
      
    svg.selectAll('text') 
      .data(values)
     .enter().append('text')
      .attr('x', function(d, i){ return (i%data.length) * boxWidth + x; })
      .attr('y', function(d, i){ return Math.floor(i/data.length) * boxWidth + y; })
      .text(function(d, i){ return d; });
    
function singleDimenArr(d){ 
  return d.reduce(function(a,b){
    return a.concat(b);
  });
}
});