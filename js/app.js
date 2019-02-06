// events

d3.select('#Limerick')
.on('mouseover', function(){
  d3.select('.tooltip')
  .style('left', '20px')
  .style('top', '20px')
  .style('display', 'block')
  .text('Limerick');
});

// NUTS 1
d3.select('#nuts1').on('click', function(){

  d3.select('#northernwestern')
    .style('display','none');
    d3.select('#southern')
    .style('display','none');
    d3.select('#easternmidland')
    .style('display','none');

    
  d3.select('#Kerry').transition()
    .style('fill', '#00FF00' );

  d3.select('#Carlow').transition()
    .style('fill', '#00FF00' );
  
    d3.select('#DunLaoghaire-Rathdown').transition()
    .style('fill', '#00FF00' );
    d3.select('#DublinCity').transition()
    .style('fill', '#00FF00' );
    d3.select('#SouthDublin').transition()
    .style('fill', '#00FF00' );
    d3.select('#Fingal').transition()
    .style('fill', '#00FF00' );
    d3.select('#Kilkenny').transition()
    .style('fill', '#00FF00' );
    
    
  
    d3.select('#GalwayCity').transition()
    .style('fill', '#00FF00' );

    d3.select('#Kildare').transition()
    .style('fill', '#00FF00' );
  
    d3.select('#Laois').transition()
    .style('fill', '#00FF00' );
    d3.select('#Mayo').transition()
    .style('fill', '#00FF00' );
    d3.select('#Louth').transition()
    .style('fill', '#00FF00' );
    d3.select('#Meath').transition()
    .style('fill', '#00FF00' );
    d3.select('#Offaly').transition()
    .style('fill', '#00FF00' );
    d3.select('#Westmeath').transition()
    .style('fill', '#00FF00' );
    d3.select('#Wexford').transition()
    .style('fill', '#00FF00' );
    d3.select('#Wicklow').transition()
    .style('fill', '#00FF00' );
    d3.select('#GalwayCounty').transition()
    .style('fill', '#00FF00' );
    d3.select('#Clare').transition()
    .style('fill', '#00FF00' );
    d3.select('#CorkCounty').transition()
    .style('fill', '#00FF00' );
    d3.select('#CorkCity').transition()
    .style('fill', '#00FF00' );
    d3.select('#Limerick').transition()
    .style('fill', '#00FF00' );
    d3.select('#Tipperary').transition()
    .style('fill', '#00FF00' );
    d3.select('#Waterford').transition()
    .style('fill', '#00FF00' );
    d3.select('#Leitrim').transition()
    .style('fill', '#00FF00' );
    d3.select('#Roscommon').transition()
    .style('fill', '#00FF00' );
    d3.select('#Sligo').transition()
    .style('fill', '#00FF00' );
    d3.select('#Cavan').transition()
    .style('fill', '#00FF00' );
    d3.select('#Donegal').transition()
    .style('fill', '#00FF00' );
    d3.select('#Monaghan').transition()
    .style('fill', '#00FF00' );
    d3.select('#Longford').transition()
    .style('fill', '#00FF00' );


})

// NUTS 2
d3.select('#nuts2').on('click', function(){
  

// // Creating Svg viewPort
// var svgContainer = d3.select("svg");

// //Add the SVG Text Element to the svgContainer
// var text = svgContainer.selectAll('text')
//             .enter()
//             .append('text');

// //Add SVG Text Element Attributes
// var textLabels = text
//       .attr('x', '100px')
//       .attr('y', '100px')
//       .text('etrretnryhy')
//       .attr('font-size', '20px')
//       .attr('fill', 'red');

    d3.select('#northernwestern')
    .style('display','inline');
    d3.select('#southern')
    .style('display','block');
    d3.select('#easternmidland')
    .style('display','block');
  
    
    
  
    d3.select('#GalwayCity').transition()
    .style('fill', '#B39534' )
    .append;
    d3.select('#Roscommon').transition()
    .style('fill', '#B39534' );
    d3.select('#Mayo').transition()
    .style('fill', '#B39534' );
    d3.select('#GalwayCounty').transition()
    .style('fill', '#B39534' );

    d3.select('#Leitrim').transition()
    .style('fill', '#B39534' );
    d3.select('#Sligo').transition()
    .style('fill', '#B39534' );
    d3.select('#Cavan').transition()
    .style('fill', '#B39534' );
    d3.select('#Donegal').transition()
    .style('fill', '#B39534' );
    d3.select('#Monaghan').transition()
    .style('fill', '#B39534' );


    d3.select('#Limerick').transition()
    .style('fill', '#8B24B7' );
    d3.select('#Tipperary').transition()
    .style('fill', '#8B24B7' );
    d3.select('#Clare').transition()
    .style('fill', '#8B24B7' );

    d3.select('#Waterford').transition()
    .style('fill', '#8B24B7' );
    d3.select('#Wexford').transition()
    .style('fill', '#8B24B7' );
    d3.select('#Carlow').transition()
    .style('fill', '#8B24B7' );
    d3.select('#Kilkenny').transition()
    .style('fill', '#8B24B7' );

    d3.select('#CorkCounty').transition()
    .style('fill', '#8B24B7' );
    d3.select('#CorkCity').transition()
    .style('fill', '#8B24B7' );
    d3.select('#Kerry').transition()
    .style('fill', '#8B24B7' );


    
    d3.select('#Kildare').transition()
    .style('fill', '#0D206E' );
    d3.select('#Louth').transition()
    .style('fill', '#0D206E' );
    d3.select('#Meath').transition()
    .style('fill', '#0D206E' );
    d3.select('#Wicklow').transition()
    .style('fill', '#0D206E' );
    
    d3.select('#Offaly').transition()
    .style('fill', '#0D206E' );
    d3.select('#Westmeath').transition()
    .style('fill', '#0D206E' );
    d3.select('#Laois').transition()
    .style('fill', '#0D206E' );
    d3.select('#Longford').transition()
    .style('fill', '#0D206E' );

      
  
    d3.select('#DunLaoghaire-Rathdown').transition()
    .style('fill', '#0D206E' );
    d3.select('#DublinCity').transition()
    .style('fill', '#0D206E' );
    d3.select('#SouthDublin').transition()
    .style('fill', '#0D206E' );
    d3.select('#Fingal').transition()
    .style('fill', '#0D206E' );


})
// NUTS 3
d3.select('#nuts3').on('click', function(){
  
  
  d3.select('#GalwayCity').transition()
  .style('fill', '#581845' );
  d3.select('#Roscommon').transition()
  .style('fill', '#581845' );
  d3.select('#Mayo').transition()
  .style('fill', '#581845' );
  d3.select('#GalwayCounty').transition()
  .style('fill', '#581845' );

  d3.select('#Leitrim').transition()
  .style('fill', '#FFC300' );
  d3.select('#Sligo').transition()
  .style('fill', '#FFC300' );
  d3.select('#Cavan').transition()
  .style('fill', '#FFC300' );
  d3.select('#Donegal').transition()
  .style('fill', '#FFC300' );
  d3.select('#Monaghan').transition()
  .style('fill', '#FFC300' );


  d3.select('#Limerick').transition()
  .style('fill', '#4D5656' );
  d3.select('#Tipperary').transition()
  .style('fill', '#4D5656' );
  d3.select('#Clare').transition()
  .style('fill', '#4D5656' );

  d3.select('#Waterford').transition()
  .style('fill', '#186A3B' );
  d3.select('#Wexford').transition()
  .style('fill', '#186A3B' );
  d3.select('#Carlow').transition()
  .style('fill', '#186A3B' );
  d3.select('#Kilkenny').transition()
  .style('fill', '#186A3B' );

  d3.select('#CorkCounty').transition()
  .style('fill', '#8B24B7' );
  d3.select('#CorkCity').transition()
  .style('fill', '#8B24B7' );
  d3.select('#Kerry').transition()
  .style('fill', '#8B24B7' );


  
  d3.select('#Kildare').transition()
  .style('fill', '#78281F' );
  d3.select('#Louth').transition()
  .style('fill', '#78281F' );
  d3.select('#Meath').transition()
  .style('fill', '#78281F' );
  d3.select('#Wicklow').transition()
  .style('fill', '#78281F' );
  
  d3.select('#Offaly').transition()
  .style('fill', '#E71212' );
  d3.select('#Westmeath').transition()
  .style('fill', '#E71212' );
  d3.select('#Laois').transition()
  .style('fill', '#E71212' );
  d3.select('#Longford').transition()
  .style('fill', '#E71212' );

    

  d3.select('#DunLaoghaire-Rathdown').transition()
  .style('fill', '#DA12E7' );
  d3.select('#DublinCity').transition()
  .style('fill', '#DA12E7' );
  d3.select('#SouthDublin').transition()
  .style('fill', '#DA12E7' );
  d3.select('#Fingal').transition()
  .style('fill', '#DA12E7' );


})