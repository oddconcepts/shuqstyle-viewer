var API_HOST = "https://api.pxl.ai";
var ss = shuqstyle({
    apiBase: API_HOST,
    apiKey: window.localStorage.getItem("apikey").toString(),
    optimizeRegions: false
});


$(document).ready(function() {
    if (window.localStorage.getItem("local")  === "true") {
        API_HOST = "http://0.0.0.0:5000";
        ss.config({'apiBase': API_HOST, 'local': true})
    }
});
