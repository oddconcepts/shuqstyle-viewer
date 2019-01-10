function api_detection_url(cb, image_url) {
    var use_v1 = window.localStorage.getItem("use_v1");

    if (use_v1 === "true") {
        ss.detect(image_url)
            .then(function (rs) {
                return cb(rs, ss.regionArgMax(rs));
            })
            .then(undefined, function (e) {
                return cb(e.toString());
            })
    }
    else {
        var url = API_HOST + "/v0/detect?url=" + encodeURIComponent(image_url);

        $.ajax({
            url: url,
            type: "get",
            dataType: "json",
            async: true,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("ApiKey", window.localStorage.getItem("apikey"));
            },
            success: function (data) {
                return cb(data);
            },
            error: function (data) {
                return cb(null);
            }
        });
    }
}

function api_detection_file(cb, base64, extension) {
    var use_v1 = window.localStorage.getItem("use_v1");
    base64 = base64.replace("data:" + extension + ";base64,", "");

    if (use_v1 === "true") {
        ss.detect(convertToByteArray(base64), extension)
            .then(function (rs) {
                return cb(rs, ss.regionArgMax(rs));
            })
            .then(undefined, function (e) {
                return cb(null);
            })
    }
    else {
        var url = API_HOST + "/v0/detect?fileid=" + CryptoJS.MD5(base64).toString();

        var formData = new FormData();
        var file = uri_to_blob(base64, "image/" + extension);
        formData.append("file", file);

        $.ajax({
            url: url,
            type: "post",
            data: formData,
            enctype: "multipart/form-data",
            processData: false,
            contentType: false,
            dataType: "json",
            async: true,
            beforeSend : function(xhr){
                xhr.setRequestHeader("ApiKey", window.localStorage.getItem("apikey"));
            },
            success: function (data) {
                return cb(data);
            },
            error: function (data) {
                return cb(null);
            }
        });
    }
}

function api_search(cb, region, search_category, flex_query, flex_mode, count) {
    var use_v1 = window.localStorage.getItem("use_v1");

    if (use_v1 === "true") {
        ss.config({'searchResultCount': count});
        ss.search(region, search_category, flex_query, flex_mode)
            .then(function (data) {
                return cb(data);
            })
            .then(undefined, function (e) {
                return cb(null);
            })
    }
    else {
        var url = API_HOST + "/v0/search/" + region.id +
            "?category=" + search_category +
            '&count=' + count;

        $.ajax({
            url: url,
            type: "get",
            dataType: "json",
            async: true,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("ApiKey", window.localStorage.getItem("apikey"));
            },
            success: function (data) {
                return cb(data);
            },
            error: function (data) {
                return cb(null);
            }
        });
    }
}

function api_analyze(cb, image_url, detection_results) {
    var use_v1 = window.localStorage.getItem("use_v1");

    if (use_v1 === "true") {
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