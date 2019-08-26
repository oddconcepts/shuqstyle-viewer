$(document).ready(function() {
    $("input[type=text]").keypress(function(e) {
        if (e.keyCode == 13) {
            if ($('#input_apikey').is(':focus') && $('#input_apikey').val() != '') {
                window.localStorage.setItem("apikey", $("input_apikey").val());
                show_api_key_scrollin();
            }
            else if ($("#input_url").val() != '') {
                view_demo($("#input_url").val());
            }
        }
    });

    //init apikey
    var apiKey = window.localStorage.getItem("apikey");

    if (apiKey != null)
        $('#input_apikey').val(apiKey);

    //init version
    set_version();
});

function view_demo(url) {
    if (window.localStorage.getItem("apikey") == null) {
        alert('No API Key has been configured. Use the configuration dialog to set an API key.')
        return
    }

    var image_url = url;
    location.href = "./view.html?type=url&url=" + encodeURIComponent(image_url);
}

function show_api_key_scrollin() {
    var setting = $('#setting-div');
    if (setting.css('margin-top') === "0px") {
        window.localStorage.setItem("apikey", $('#input_apikey').val());
        setting.css('margin-top', '-182px');
    }
    else
        setting.css('margin-top', '0px');
}

function set_version() {
    window.localStorage.setItem("api_version", "v1");
}
