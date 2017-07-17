$(document).ready(function() {
    $("input[type=text]").keypress(function(e) {
        if (e.keyCode == 13) {
            if ($('#input_apikey').is(':focus') && $('#input_apikey').val() != '') {
                return $('#input_apikey').blur()
            }
            else if ($("#input_url").val() != '') {
                view_demo($("#input_url").val());
            }
        }
    });

    $('#input_apikey').blur(function(e) {
        window.localStorage.setItem("apikey", e.target.value);
        $('#api-key-scrollin').css('margin-top', '-50px');
    })

    var scroller = new FTScroller(document.querySelector('body'), {
        bouncing: false,
        scrollbars: false
    });

    var apiKey = window.localStorage.getItem("apikey");

    if (apiKey != null)
        $('#input_apikey').val(apiKey);
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
    $('#api-key-scrollin').css('margin-top', '0px');
}