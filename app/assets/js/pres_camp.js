// C3 init

var total_don = [
  ['dem_total', 177216.16, 268160.28, 278448.36, 343566.52, 664938.46, 226236.21, 915037.77, 904379.26, 503271.13, 151135.78, 1365323.53, 1277884.83, 280331.48, 1091667.84, 1326593.69, 462460.56, 331216.46, 1032026.31, 47550.41, 385121.61, 75940.97, 10891.27, 682618.27, 69184.27, 576636.83, 32248.26, 22118.66],
  ['rep_total', 20489.79, 40640.0, 177115.0, 85480.0, 44050.0, 96016.74, 189419.99, 17743.0, 179448.23, 9795.0, 40944.52, 252350.47, 34219.18, 62592.52, 214465.52, 62598.02, 30257.38, 233533.13, 3010.0, 61331.0, 25453.28, 209.11, 23860.43, 11512.0, 94074.76, 4900.0, 9420.0],
];

var rep_total_by_cand=[['Duncan Hunter', 50.0], ['Tommy Thompson', 500.0], ['Sam Brownback', 3300.0], ['Tom Tancredo', 5115.0], ['Mike Huckabee', 15518.66], ['Fred Thompson', 24200.0], ['Ron Paul', 155623.86], ['Mitt Romney', 275020.0], ['Rudy Giuliani', 326309.11], ['John McCain', 1219292.44]];

var dem_total_by_cand=[['Mike Gravel', 1765.23], ['Dennis Kucinich', 23957.75], ['Joe Biden', 46925.0], ['Bill Richardson', 87510.0], ['Chris Dodd', 108767.96], ['John Edwards', 490604.89], ['Hillary Clinton', 2742515.2], ['Barack Obama', 10000159.15],['All Republican', 2024929.07]];

var sf_zip = [94102, 94103, 94104, 94105, 94107, 94108, 94109, 94110, 94111, 94112, 94114, 94115, 94116, 94117, 94118, 94121, 94122, 94123, 94124, 94127, 94129, 94130, 94131, 94132, 94133, 94134, 94158];

var my_chart_parameters = {
  "data": {
  	"x": "dem_total",
    "columns": total_don,
    "selection": {
      "enabled": true
    },
    "type":'scatter'
  },
  "legend": {
        show: false
    },
  "axis": {
        x: {
            label: 'Total donations to Democrats',
            tick: {
                fit: false
            }
        },
        y: {
            label: 'Total donations to Republicans'
        }
    },
 "point": {
    "r": 5,
    "focus": {
      "expand": {
        "r": 7,
        "enabled": true
      }
    }
  },
  "grid": {
    "x": {
      "show": false
    },
    "y": {
      "show": false
    }
  },
  "tooltip": {
    "show": true,
    "grouped": false,
    "format": {
    	"title": function (y) { return 'Dem Total $' + y; },
    	      "name": function (name, ratio, id, index) { return "Rep Total"; },
    	      "value": function (value, ratio, id, index) { return "$"+d3.format(',')(value); }
    }
  }
    
  
};


// slides


var slide_0 = function() {

    my_pie_chart = c3.generate({
        bindto: '#chart',
        data: {
            // iris data from R
            columns: [
                ['Republican', 2024929.07],
                ['Democrat', 13502205.18],
            ],
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); },
            "selection": {
                "enabled": true
                }
        },
        color: {
            pattern:['#cc0000','#0000ff']
        },
        pie: {
            label: {
                format: function (value, ratio, id) {
                        var format = d3.format(',')
                    return "$"+format(value);
                threshold: 0.1
                }
            },
        }
    });
  document.getElementById("message").innerHTML = "<p>Donations made to presidential candidates show the political leanings of individual voters. In the liberal enclave of San Francisco, the Democratic presidential candidates were definitely getting more of the loot during the 2008 election season. But is that the whole story? Click Start to explore!</p>Source: NYTimes Campaign Finance API";
 
};

var slide_1 = function(){

my_pie_chart2 = c3.generate({
    data: {
        // iris data from R
        columns: rep_total_by_cand,
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); },
        "selection": {
      		"enabled": true
    		}
    },
    color: {
        pattern:['#ffe5e5', '#ffcccc', '#ffb3b3','#ff9999','#ff8080','#ff6666','#ff4d4d','#cc0000','990000','#660000']
        },
     pie: {
        label: {
            format: function (value, ratio, id) {
                return id;
            },
        threshold : 0.07
        },
    },
    legend: {
    	show: true,
    },
    tooltip: {
  			format: {
    value: function (value, ratio, id, index) { return "$"+d3.format(',')(value); }
  }
}
});

document.getElementById("message").innerHTML = "Among the republicans, McCain was definitely the favorite of SF donors, getting more than half of the Republican donations coming fron the city.";

};

var slide_2 = function(){
		
     
    my_pie_chart2.load({
        columns: dem_total_by_cand,
    });
   
   my_pie_chart2.unload({
        ids: ['Mike Huckabee', 'Ron Paul', 'Mitt Romney', 'Rudy Giuliani', 'Tom Tancredo', 'Duncan 					Hunter', 'Fred Thompson', 'Sam Brownback', 'Tommy Thompson', 'John McCain']
    });
    
    my_pie_chart2.data.colors({
  		"All Republican": '#cc0000',
      'Bill Richardson': '#9999ff',
 			'Dennis Kucinich': '#ccccff',
 			'John Edwards': '#3333ff',
 'Hillary Clinton': '#0000ff',
 'Mike Gravel': '#e5e5ff',
 'Joe Biden': '#b3b3ff',
 'Barack Obama': '#0000b3',
 'Chris Dodd': '#6666ff'
      
		});
  my_pie_chart2.legend.hide(['Duncan Hunter']);
  document.getElementById("message").innerHTML = "But if you add the donations to the Democratic candidates, you can see that San Francisco gave most of its donations to one guy!";

};

var slide_3 = function(){
my_pie_chart2.data.colors({"All Republican": '#E42217',
      'Bill Richardson': '#e5f0ff',
 			'Dennis Kucinich': '#e5f0ff',
 			'John Edwards': '#e5f0ff',
 'Hillary Clinton': '#e5f0ff',
 'Mike Gravel': '#e5f0ff',
 'Joe Biden': '#e5f0ff',
 'Chris Dodd': '#e5f0ff'});

 
 my_pie_chart2.legend.hide(['Bill Richardson','Dennis Kucinich',
 			'John Edwards',
 'Hillary Clinton',
 'Mike Gravel',
 'Joe Biden',
 'Chris Dodd']);
 
 document.getElementById("message").innerHTML = "Yes, Barack you lucky one! The Obama campaign got more money from SF than all the Republicans combined. Look at how big the slice of the pie is! That's over 10 million bucks!"
};

var slide_4 = function() {
	my_scatter = c3.generate(my_chart_parameters);
  document.getElementById("message").innerHTML = "Let's look at total donations from another perspective. Each dot here represents a zipcode in San Francisco. It's x and y coordinates are the total donations made to the Democratic and Republican candidates respectively. Hover your mouse over the data points you can see the exact breakdown of donations.";
 
}

var slide_5= function() {
  document.getElementById("message").innerHTML = "Some zipcodes donated more than the average to the Republicans. ";
  my_scatter.select(['dem_total','rep_total'],[10,16,21,22,24,25],true);
  
  my_scatter.ygrids([{
  value: 74997.37,
  text:"average republican"
  }]);
  
	
 
};

var slide_6= function() {
  document.getElementById("message").innerHTML = "Some zipcodes donated a lot to Democrats. ";
  my_scatter.xgrids([{
  value: 500081.67,
  text:"average democrat"
  }]);
  my_scatter.unselect(['dem_total','rep_total'],[10,16]);
  my_scatter.select(['dem_total','rep_total'],[21,22,24,25,26,23,20],true);
   
};

var slide_7= function() {
  document.getElementById("message").innerHTML = "<p>Some zipcodes donated a lot to candidates from both parties. Rich and very politically active people from both parties must live there.</p>Click Replay to see this again!";
  my_scatter.unselect(['dem_total','rep_total'],[26,23,20]);
  my_scatter.select(['dem_total','rep_total'],[21,22,24,25],true);
};





var slides = [slide_0,slide_1,slide_2,slide_3,slide_4,slide_5,slide_6,slide_7];

// cycle through slides

var current_slide = 0;

var run = function() {
  slides[current_slide]();
  current_slide += 1;

  if (current_slide === 1) {
    document.getElementById("start_btn").innerHTML = "Start";
  } else if (current_slide === slides.length) {
    current_slide = 0;
    document.getElementById("start_btn").innerHTML = "Replay";
  } else {
    document.getElementById("start_btn").innerHTML = "Continue";
  }
};

// button event handler

document.getElementById('start_btn').addEventListener("click", run);

// init

run();
