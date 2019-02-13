function api_detection_url(cb, image_url) {
    if (window.localStorage.getItem("api_version") === "v1") {
        ss.detect(image_url)
            .then(function (rs) {
                return cb(rs, ss.regionArgMax(rs));
            })
            .then(undefined, function (e) {
                return cb(e.toString());
            })
    }
}

function api_detection_file(cb, base64, extension) {
    base64 = base64.replace("data:" + extension + ";base64,", "");

    if (window.localStorage.getItem("api_version") === "v1") {
        ss.detect(convertToByteArray(base64), extension)
            .then(function (rs) {
                return cb(rs, ss.regionArgMax(rs));
            })
            .then(undefined, function (e) {
                return cb(null);
            })
    }
}

function api_search(cb, region, search_category, flex_query, flex_mode, count) {
    if (window.localStorage.getItem("api_version") === "v1") {
        ss.config({'searchResultCount': count});
        ss.search(region, search_category, flex_query, flex_mode)
            .then(function (data) {
                return cb(data);
            })
            .then(undefined, function (e) {
                return cb(null);
            })
    }
}

function api_analyze(cb, image_url, detection_results) {
    if (window.localStorage.getItem("api_version") === "v1") {
        var url = API_HOST + "/v1/analyze?url=" + encodeURIComponent(image_url);

        $.ajax({
            url: url,
            type: "get",
            dataType: "json",
            async: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("ApiKey", window.localStorage.getItem("apikey"));
            },
            success: function (data) {
                return cb(data, detection_results);
            },
            error: function (data) {
                return cb(null);
            }
        });
    }
}