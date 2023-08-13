const body = document.getElementsByTagName("BODY")[0];
const footer = document.getElementById("footer");

let chartName = ""

const saveChart = document.querySelector("#save-chart");
saveChart.addEventListener("click",e => {
    if (chartName!==""){
        let chart = document.getElementById(chartName);
        body.innerHTML = ''
        body.style = "display:flex;height:100%;justify-content:center;align-items:center"
        body.appendChild(chart);
    };
});

const currentChart = (a) => {
    chartName = a;
}
