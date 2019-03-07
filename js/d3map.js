
var drawMap = (categoryName, subCategory, subSubCategory, colorFunction=defaultColorFunction) => {

	var getArrayOfCategory = getArrayOfCategoryByName(categoryName),
		colorArrayBuilder = createColorArrayBuilder(colorFunction),
		d3SvgMap = d3.select("svg#svg2"),
		colorMap =  createColorMap(d3SvgMap),
		hoverTipString = subSubCategory + " " + subCategory.toLowerCase(),
		hoverEffects = addHoverEffects(d3SvgMap)(hoverTipString),
		currentRenderArray = getCurrentRenderArray(C.defaultMainCategory, subCategory, subSubCategory),
		d3SvgPyramid = d3.select("svg#"+C.pyramidSvgId),
		pyramidChart = drawPyramidChart(d3SvgPyramid),
		handler = 	compose(
						currentRenderArray,
						hoverEffects,
						colorArrayBuilder,
						pyramidChart,
						colorMap
					)

		getArrayOfCategory(handler)
}

var createColorMap = d3Svg => countryColorArray => {
	if (!d3Svg) return;
	countryColorArray = countryColorArray || [];

	//clearMap
	d3Svg.selectAll('path').transition()
		.style('fill', 'white');

	countryColorArray.forEach( item => {
		var id = '#' + item.id.replace(/\s/g, ''),
			color = item.color;

		d3Svg.select(id).transition()
			.style('fill', color );
	})

	return countryColorArray
}

var drawPyramidChart = d3Svg => {
	var height = 500,
		width = 160,
		pyramid = d3.pyramid()
					.size([width, height])
					.value(function (d) {
						return d.parameter;
					}),
		line = d3.line().x(function (d, i) {
							return d.x;
						})
						.y(function (d, i) {
							return d.y;
						});

	return (countryColorArray => {
		d3Svg.selectAll("g").remove()

		var g = d3Svg.append("g")
			.selectAll(".pyramid-group")
			.data(pyramid(countryColorArray))
			.enter().append("g")
			.attr("class", "pyramid-group");

		g.append("path")
			.attr("d", function (d) {
				return line(d.coordinates);
			})
			.style("fill", function (d) {
				return d.color;
			});

		g.append("text")
			.text(function (d) {
				return d.id;
			})
			.style("text-anchor", "middle")
			.attr("y", function (d, i) {
				if (d.coordinates.length === 4) {
					return (((d.coordinates[0].y - d.coordinates[1].y) / 2) + d.coordinates[1].y) + 5;
				} else {
					return (d.coordinates[0].y + d.coordinates[1].y) / 2 + 10;
				}
			})
			.attr("x", function (d, i) {
				return width / 2;
			})
		;

		return countryColorArray
	})
}

var createColorArrayBuilder = colorFunction => parameterArray =>  {
	parameterArray = parameterArray || [];
	colorFunction = colorFunction(parameterArray);
	colorFunction = colorFunction || ( () => '#000000');

	var countryColorArray = parameterArray.map(item => {
		var parameter = item[1],
			color = colorFunction(parameter),
			id = item[0],
			result = {id, color, parameter};

		return result;
	})

	return countryColorArray;
}

var createStepColorFunction = arrayLevelAndColor => () => currentNumber  => {
		currentNumber = (currentNumber || 0)*100;
	var levelFinder = createLevelFinder(currentNumber),
		level = arrayLevelAndColor.find(levelFinder),
		color = level.color || "#000000";

	return color;
}
var createLineStepColorFunction = arrayLevelAndColor => paramArray => {
	var newArLvlClr = drawLineStepColorLegend(arrayLevelAndColor)(paramArray);

	return (currentNumber  => {
		currentNumber = (currentNumber || 0);
		currentNumber = currentNumber * 100;
		var levelFinder = createLevelFinder(currentNumber),
			level = newArLvlClr.find(levelFinder),
			color = level.color || "#000000";

		return color;
	})
}

var createLevelFinder = currentNumber => element => {
	return element.level >= currentNumber
}

var drawLineStepColorLegend = arrayLevelAndColor => paramArray => {
	arrayLevelAndColor = arrayLevelAndColor || [];
	paramArray = paramArray || [];

	var legendContainer = d3.select("#mapLegend"),
		numberParamArray = paramArray.map(item => item[1]),
		maxParam = Math.max.apply(Math, numberParamArray)*100,
		minParam = Math.min.apply(Math, numberParamArray)*100,
		difMaxMinP = maxParam - minParam + 0.001,
		resultArray = arrayLevelAndColor.map((item, index, array) => {
				var level = Math.round(minParam + item.level*(difMaxMinP) / 100),
					color = item.color;
				return {level, color}
		}),
		html = createStepColorLegendHtml(resultArray);

	legendContainer.html(html);
	return resultArray
}

var createStepColorLegendHtml = (arrayLevelAndColor=[]) => {
	var html = '',
		level = 0;

	html += '<div class="stepLegendContainer">';
	arrayLevelAndColor.forEach( item => {
		if (item.level <= 0 || level === item.level)
			return;

		var string = level + "-" + item.level + "%";
			level = item.level;

		html += '<div class="color" style="background: ' + item.color + ';" >';
		html += string;
		html += '</div>';
	})
	html += '</div>';

	return html;
}



// subCategory - total, male, ..
// subSubCategory - total, single, ..
var getCurrentRenderArray = (mainCategory, subCategory, subSubCategory) => arrayOfCategory => {
	var resultArray = [],
		mainCategoryArray = [],
		arCatBySubCat = [],
		numbSubCategory = arrayOfCategory[0].indexOf(subCategory);

	arCatBySubCat = arrayOfCategory.map(item =>
		[item[0], item[1], item[numbSubCategory]]
	)
	mainCategoryArray = arCatBySubCat.filter(item =>
		(item[1] === mainCategory)
	)
	resultArray = arCatBySubCat.filter(item =>
		(item[1] === subSubCategory)
	)

	resultArray = resultArray.map((item, index) => {
		var mainCatAr = mainCategoryArray[index] || [],
			mainCatValue = mainCatAr[2] || 1,
			currentValue = item[2] || 0;
		currentValue = Math.round(currentValue/mainCatValue*100)/100;

		return [item[0], currentValue]
	})

	return resultArray
}

var getArrayOfCategoryByName = categoryName => handler => {
	var localStorageCategory = localStorage[categoryName],
		parsed,
		result;
	if (localStorageCategory) {
		parsed = JSON.parse(localStorageCategory)
		result = handler(parsed)
	} else {
		d3.text('data/'+categoryName+'.csv').then(response => {
			parsed = d3.csvParseRows(response)
			result = handler(parsed)
			localStorage[categoryName] = JSON.stringify(parsed)
		})
	}

	return result
}

var addHoverEffects = d3Svg => stringTip => countyParamArray => {
	var tooltipNode = d3.select("#"+C.tooltipContainerId);
	d3Svg = d3.select("svg#svg2")
	countyParamArray .forEach( item => {
		var id = '#' + item[0].replace(/\s/g, ''),
			value = Math.round(item[1]*10000)/100 + "%";

		d3Svg.select(id)
			.on("mousemove", function(d) {
				var thisNode = d3.select(this),
					html = '';

				html += '<span class="title">';
				html += item[0] + "<br>" + stringTip;
				html += '</span>';
				html += '<span class="value">';
				html += value;
				html += '</span>';

				thisNode.attr("fill-opacity", "0.7")
				tooltipNode.html(html)
							.style("top", (d3.event.screenY) + "px")
							.style("left", (d3.event.screenX ) + "px")
							.style("display", "block");


			})
			.on("mouseout", function() {
				var thisNode = d3.select(this);
				thisNode.attr("fill-opacity", "1.0");

				tooltipNode.style("display", "none");
			});
	})

	return countyParamArray;
}

var getSubSubCategoryById = id => {
	var result;
	switch (id) {
		case "single": result = "Single"; break;
		case "married": result = "Married (incl. same sex civil partnership)"; break;
		case "separated": result = "Separated"; break;
		case "divorced": result = "Divorced"; break;
		case "widowed":
		default: result = "Widowed"; break;
	}

	return result
}

var menuClickHandler = () => {
	var event = d3.event,
		node = event.target,
		anode = findParentNodeByClass(node, "exMenuA"),
		anodeID = anode.id,
		inputContainer = anode.lastElementChild,
		inputMale = inputContainer.firstElementChild,
		inputMaleChecked = inputMale.checked,
		inputFemale = inputContainer.children[2],
		inputFemaleChecked = inputFemale.checked,
		categoryName = "C2016PopulationbySexAndMaritalStatus",
		subCategory = inputMaleChecked && inputFemaleChecked ?
			"Total" :
			(inputMaleChecked ?	"Male" :
					(inputFemaleChecked ? "Female" : "Total")
			),
		subSubCategory = getSubSubCategoryById(anodeID);


	drawMap (categoryName, subCategory, subSubCategory)

	event.stopPropagation();
}

//program pattern
const compose = (...fns) => (arg) =>
	fns.reduce((composed, f) => f(composed),arg)

const findParentNodeByClass = (node, className) => {
	if (node.nodeName == "html")
		return

	if (node.classList.contains(className)) {
		return	node
	} else {
		return findParentNodeByClass(node.parentNode, className)
	}
}
//constant
const C = {
	defaultArrayLevCol: [
		{level: 20, color: '#ff0000'},
		{level: 30, color: '#ff4700'},
		{level: 40, color: '#ff9900'},
		{level: 50, color: '#ffcf00'},
		{level: 60, color: '#d8fd00'},
		{level: 70, color: '#a4ff00'},
		{level: 80, color: '#73ff00'},
		{level: 90, color: '#3bff00'},
		{level: 100, color: '#0cfd00'},
	],
	defaultMainCategory: "Total",
	tooltipContainerId: "tooltip-container",
	pyramidSvgId: "pyramidSvg",
}

const defaultColorFunction = createLineStepColorFunction(C.defaultArrayLevCol)

d3.select('#single').on('click', menuClickHandler)
d3.select('#married').on('click', menuClickHandler)
d3.select('#separated').on('click', menuClickHandler)
d3.select('#divorced').on('click', menuClickHandler)
d3.select('#widowed').on('click', menuClickHandler)
drawMap ("C2016PopulationbySexAndMaritalStatus", "Male", "Single")