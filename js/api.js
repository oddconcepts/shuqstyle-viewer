var API_HOST        = "https://dl-api.oddconcepts.kr";


function api_detection_url(cb, image_url) {
    var use_v1 = window.localStorage.getItem("use_v1");

    if (use_v1 === "true") {
        var ss = shuqstyle({
            apiKey: window.localStorage.getItem("apikey").toString(),
                optimizeRegions: false});

        ss.detect(image_url)
            .then(function (rs) {
                return cb(rs);
            })
            .then(undefined, function (e) {
                return cb(null);
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
        var ss = shuqstyle({
            apiKey: window.localStorage.getItem("apikey").toString(),
            optimizeRegions: false});

        ss.detect(convertToByteArray(base64), extension)
            .then(function (rs) {
                return cb(rs);
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

function api_search(cb, region, search_category, count) {
    var use_v1 = window.localStorage.getItem("use_v1");

    if (use_v1 === "true") {
        var ss = shuqstyle({
            apiKey: window.localStorage.getItem("apikey").toString(),
            searchResultCount: 34});

	if (region.sub_category.code == 0)
	    flex_query = undefined;
	else
            flex_query = { "sub_category": region.sub_category.code }

        ss.search(region, search_category, flex_query)
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
