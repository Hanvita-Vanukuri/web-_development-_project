const months = [
    "Jan","Feb","Mar","Apr","May","Jun"
];

const salesData = [1200,1900,3000,2500,4200,3800];

const colors = [
    "#ff6384",
    "#36a2eb",
    "#ffce56",
    "#4bc0c0",
    "#9966ff",
    "#ff9f40"
];


// BAR CHART
new Chart(document.getElementById("barChart"),{

    type:"bar",

    data:{
        labels:months,

        datasets:[{
            label:"Monthly Sales",
            data:salesData,
            backgroundColor:colors
        }]
    },

    options:{
        responsive:true
    }
});


// LINE CHART
new Chart(document.getElementById("lineChart"),{

    type:"line",

    data:{
        labels:months,

        datasets:[{
            label:"Revenue Growth",
            data:[1000,1500,2200,2800,3500,5000],
            borderColor:"#0984e3",
            backgroundColor:"rgba(9,132,227,0.2)",
            fill:true,
            tension:0.4
        }]
    },

    options:{
        responsive:true
    }
});


// PIE CHART
new Chart(document.getElementById("pieChart"),{

    type:"pie",

    data:{
        labels:[
            "Electronics",
            "Fashion",
            "Food",
            "Sports",
            "Others"
        ],

        datasets:[{
            data:[35,25,20,10,10],
            backgroundColor:[
                "#ff6384",
                "#36a2eb",
                "#ffce56",
                "#4bc0c0",
                "#9966ff"
            ]
        }]
    },

    options:{
        responsive:true
    }
});


// DOUGHNUT CHART
new Chart(document.getElementById("doughnutChart"),{

    type:"doughnut",

    data:{
        labels:[
            "Online Sales",
            "Store Sales"
        ],

        datasets:[{
            data:[70,30],
            backgroundColor:[
                "#00b894",
                "#fdcb6e"
            ]
        }]
    },

    options:{
        responsive:true
    }
});


// RADAR CHART
new Chart(document.getElementById("radarChart"),{

    type:"radar",

    data:{
        labels:[
            "Marketing",
            "Sales",
            "Development",
            "Customer Support",
            "Finance",
            "HR"
        ],

        datasets:[{
            label:"Department Performance",
            data:[85,95,80,75,70,65],

            backgroundColor:"rgba(108,92,231,0.2)",

            borderColor:"#6c5ce7",

            pointBackgroundColor:"#6c5ce7"
        }]
    },

    options:{
        responsive:true,
        scales:{
            r:{
                beginAtZero:true,
                max:100
            }
        }
    }
});