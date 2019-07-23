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
        ss.config({'languages': ['en']});
        ss.analyze(image_url)
            .then(function (data) {
                cb(data, detection_results);
            })
            .then(undefined, function (e) {
                return cb(null, detection_results);
            });
    }
}

function api_recommend(cb, region, search_category, count) {
    if (window.localStorage.getItem("api_version") === "v1") {
        var url = API_HOST + "/v1/recommend/stylist/" + region.id +
            "?category=" + search_category +
            '&count=' + count;
        var apikey = window.localStorage.getItem("apikey")
        var re_apikey = /^[A-Za-z0-9]{4}[a-f0-9]{56}$/g;
        var is_apikey = apikey.match(re_apikey) ? 1 : 0;

        $.ajax({
            url: url,
            type: "get",
            dataType: "json",
            async: true,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(is_apikey ? "ApiKey" : "bucketname", window.localStorage.getItem("apikey"));
            },
            success: function (data) {
                return cb(data.list);
            },
            error: function (data) {
                return cb(null);
            }
        });
    }
}
