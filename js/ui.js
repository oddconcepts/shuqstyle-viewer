$(document).ready(function() {
    $("input[type=text]").keypress(function(e) {
        if (e.keyCode == 13) {
            if ($('#input_apikey').is(':focus') && $('#input_apikey').val() != '') {
                window.localStorage.setItem("apikey", $("input_apikey").val());
                set_version();
                show_api_key_scrollin();
            }
            else if ($("#input_url").val() != '') {
                view_demo($("#input_url").val());
            }
        }
    });

    $('#input_version').keypress(function(e) {
        if (e.keyCode == 13) {
            if ($('#input_version').is(':focus') && $('#input_apikey').val() != '') {
                window.localStorage.setItem("apikey", $("input_apikey").val());
                set_version();
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
    var use_v1 = window.localStorage.getItem("use_v1");
    if (document.getElementById('input_version') !== null) {
        if (use_v1 !== null)
            document.getElementById("input_version").checked = use_v1 === "true";
        else
            set_version()
    }
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
        set_version();
        setting.css('margin-top', '-50px');
    }
    else
        setting.css('margin-top', '0px');
}

function set_version() {
    if (document.getElementById('input_version').checked)
        window.localStorage.setItem("use_v1", true);
    else
        window.localStorage.setItem("use_v1", false);
}
