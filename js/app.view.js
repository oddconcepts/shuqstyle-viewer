var GENDER_MASK = 1610612736;
var DATA_MASK = 536870911;
var M_BIT = 1073741824;
var F_BIT = 536870912;
var DRESSES = 1;
var PANTS = 2;
var SHORTS = 4;
var SKIRTS = 8;
var TOPS = 16;
var OUTERS = 32;
var UNDERWEAR_TOP = 64;
var UNDERWEAR_BOTTOM = 128;
var UNDERWEAR_ONEPIECE = 256;
var SWIMSUITS_TOP = 512;
var SWIMSUITS_BOTTOM = 1024;
var SWIMSUITS_ONEPIECE = 2048;
var TOTEBAGS = 4096;
var SHOULDER_CROSSBAGS = 8192;
var BACKPACKS = 16384;
var BUMBAGS = 32768;
var CLUTCHBAGS = 65536;
var POUCHBAGS = 131072;
var BRIEFCASES = 262144;
var SPORTS_BAGS = 524288;
var SUITCASES = 1048576;
var BOOTS = 2097152;
var HEELS_PUMPS = 4194304;
var LOAFERS = 8388608;
var SANDALS = 16777216;
var SNEAKERS = 33554432;
var SPORTS_SHOES = 67108864;

var SUB_CATEGORY_NAME = {
    1: 'DRESSES',
    2: 'PANTS',
    4: 'SHORTS',
    8: 'SKIRTS',
    16: 'TOPS',
    32: 'OUTERS',
    232: 'CARDIGAN',
    233: 'JUMPER',
    234: 'COAT',
    235: 'JACKET',
    236: 'VEST',
    237: 'TSHIRT',
    238: 'SWEATSHIRTS',
    239: 'HOODIES',
    240: 'KNIT',
    241: 'BLOUSE',
    242: 'SHIRT',
    243: 'BUSTIERS',
    249: 'LONG PANTS',
    250: 'CAPRI PANTS',
    251: 'SHORT PANTS',
    252: 'LONG SKIRTS',
    253: 'MIDI SKIRTS',
    254: 'MINI SKIRTS',
    261: 'DRESSES',
    262: 'JUMPSUITS',
    268: 'BOOTIES',
    269: 'ANKLE BOOTS',
    270: 'WALKERS',
    271: 'LONG BOOTS',
    272: 'HALF BOOTS',
    273: 'RAIN BOOTS',
    274: 'BOOTS',
    275: 'PUMPS',
    276: 'STILETTO HEELS',
    277: 'WEDGE HEELS',
    278: 'TOE OPEN HEELS',
    279: 'SLING BACK SHOES',
    280: 'MARY JANE SHOES/STRAP HEELS',
    281: 'FLAT SHOES',
    282: 'LOAFERS',
    283: 'BLOAFERS',
    284: 'OXFORD SHOES',
    285: 'FLAT SANDALS',
    286: 'PLATFORM SANDALS',
    287: 'WEDGE SANDALS',
    288: 'GLADIATOR SANDALS',
    289: 'STRAP SANDALS',
    290: 'SLIPPERS',
    291: 'FLIP FLOPS',
    292: 'MULES',
    293: 'HIGHTOP SHOES',
    294: 'SNEAKERS',
    295: 'SLIP ON SHOES',
    296: 'DRESS SHOES',
    297: 'BOAT SHOES',
    298: 'SANDALS',
    299: 'TRACKING SHOES'
};

var BLACK = 1;
var GRAY = 2;
var SILVER = 3;
var WHITE = 4;
var BROWN = 5;
var OLIVE = 6;
var NAVY = 7;
var ORANGE = 8;
var YELLOW = 9;
var GOLD = 10;
var GREENYELLOW = 11;
var GREEN = 12;
var SKYBLUE = 13;
var BLUE = 14;
var DARKMAGENTA = 15;
var PURPLE = 16;
var PINK = 17;
var RED = 18;

var CATEGORY_NAME = {
    1: "dresses",
    2: "pants",
    4: "shorts",
    8: "skirts",
    16: "tops",
    32: "outers",
    64: "underwear tops",
    128: "underwear bottoms",
    256: "underwear onepiece",
    512: "swimsuits tops",
    1024: "swimsuits bottoms",
    2048: "swimsuits onepiece",
    4096: "tote bags",
    8192: "shoulder/cross bags",
    16384: "backpacks",
    32768: "bum bags",
    65536: "clutch bags",
    131072: "pouch bags",
    262144: "briefcases",
    524288: "sports bags",
    1048576: "suitcases",
    2097152: "boots",
    4194304: "heels/pumps",
    8388608: "loafers",
    16777216: "sandals",
    33554432: "sneakers",
    67108864: "sports shoes"
};

var CATEGORY = {
    "caids": [TOPS, PANTS, SHORTS, OUTERS, SKIRTS, DRESSES],
    1073741824: [
        TOPS,
        PANTS,
        SHORTS,
        OUTERS
    ],
    536870912: [
        TOPS,
        PANTS,
        SHORTS,
        SKIRTS,
        DRESSES,
        OUTERS
    ],
    1610612736: [
        TOPS,
        PANTS,
        SHORTS,
        OUTERS
    ]
};

var SUB_CATEGORY = {
    1: [],
    2: [249, 250],
    4: [],
    8: [252, 253, 254],
    16: [237, 238, 239, 240, 241, 242, 243],
    32: [232, 233, 234, 235, 236],
    64: [244, 245, 246],
    128: [255, 256, 257],
    256: [264],
    512: [247, 248],
    1024: [258, 259, 260],
    2048: [265, 266, 267],
    4096: [],
    8192: [],
    16384: [],
    32768: [],
    65536: [],
    131072: [],
    262144: [],
    524288: [],
    1048576: [],
    2097152: [268, 269, 270, 271, 272, 273, 274],
    4194304: [275, 276, 277, 278, 279, 280],
    8388608: [281, 282, 283, 284, 296, 297],
    16777216: [285, 286, 287, 288, 289, 290, 291, 292, 298],
    33554432: [293, 294, 295, 299]
};

var SHOES = {
    "caids": [BOOTS, LOAFERS, SANDALS, SNEAKERS, HEELS_PUMPS, SPORTS_SHOES],
    1073741824: [
        BOOTS,
        LOAFERS,
        SANDALS,
        SNEAKERS
    ],
    536870912: [
        BOOTS,
        HEELS_PUMPS,
        LOAFERS,
        SANDALS,
        SNEAKERS
    ],
    1610612736: [
        BOOTS,
        SANDALS,
        SNEAKERS,
        SPORTS_SHOES
    ]
};

var BAGS = {
    "caids": [SHOULDER_CROSSBAGS, BRIEFCASES, TOTEBAGS, CLUTCHBAGS, POUCHBAGS, BACKPACKS,
    SUITCASES, BUMBAGS, SPORTS_BAGS],
    1073741824: [
        SHOULDER_CROSSBAGS,
        BRIEFCASES
    ],
    536870912: [
        TOTEBAGS,
        SHOULDER_CROSSBAGS,
        CLUTCHBAGS,
        POUCHBAGS,
        BACKPACKS
    ],
    1610612736: [
        TOTEBAGS,
        SHOULDER_CROSSBAGS,
        CLUTCHBAGS,
        BACKPACKS,
        SUITCASES,
        BUMBAGS,
        SPORTS_BAGS
    ]
};

//var DL_PROXY = 'https://dl-img.oddconcepts.kr/';
var DL_PROXY = '';

var current_image_url;
var current_image_size = {"width": 0, "height": 0};
var current_category_code = 0;
var current_category_ids = [];
var detection_results_elems = [];
var cropper;
var classification_map = {};
var re_search = false;


$(document).ready(function() {
    var uri = new URI(location.href);
    var params = uri.search(true);
    var type = params["type"];
    var apikey = params["apikey"];

    var image_url = undefined;

    if (apikey !== undefined)
        window.localStorage.setItem("apikey", apikey);

    if (type === undefined) {
        error_and_go_home("Type does not exist.");
        return;
    } else if (type === "url") {
        image_url = params["url"];
        if (image_url.substr(0, 7) === 'http://')
            image_url = DL_PROXY + image_url;
        if ("cc" in params)
            current_category_code = parseInt(params["cc"]);
    } else if (type === "file") {
        image_url = localStorage.getItem("base64");
        var image_extension = localStorage.getItem("extension");
    } else {
        error_and_go_home("Unknown type");
        return;
    }

    if (image_url === undefined)
        error_and_go_home("Image url does not exist.");

    current_image_url = image_url;

    var convert_region_format = function (regions) {
        var rs = JSON.parse(JSON.stringify(regions));
        sortable = [];

        for (cate_code in rs) {
            for (r_idx in rs[cate_code]) {
                var region = rs[cate_code][r_idx];

                var d = (region.details !== undefined);
                var f = (parseInt(cate_code)&SKIRTS !== 0 || parseInt(cate_code)&DRESSES !== 0);

                region.colors = [];
                region.gender = {
                    'code': d? get_gender(region.details.sex.label): f? F_BIT: GENDER_MASK,
                    'score': d? region.details.sex.probability: f? 1: 0.5
                };
                region.sub_category = [];
                if (d) {
                    for (var i = 0; i < region.details.cate_b.length; i++) {
                        region.sub_category.push(
                            {
                                'code': region.details.cate_b[i].label,
                                'score': region.details.cate_b[i].probability
                            })
                    }
                }
                region.category = {'code': parseInt(cate_code), 'score': region.score};

                if (d)   delete region['details'];
                delete region['x1'];
                delete region['x2'];
                delete region['y1'];
                delete region['y2'];

                sortable.push(region);
            }
        }
        sortable.sort(function (a, b) {
            return b.score - a.score;
        });
        return sortable;
    };

    var detection_cb = function (results) {
        if (results == null) {
            alert("API request failed. This is most likely due to an invalid API key.");
            location.href = "/";
        }
        hide_loader_modal();

        if (window.localStorage.getItem('use_v1') === "false")
            results = convert_region_format(results.list);

        var activated_region = undefined;
        re_search = false;

        if (results.length > 0) {
            for (var r in results) {
                var cc = parseInt(results[r].category.code);

                if (activated_region === undefined) {
                    activated_region = (current_category_code === 0) ?
                        results[0] : (cc === (current_category_code & DATA_MASK)) ? results[r] : undefined;
                }
            }
            if (activated_region === undefined) activated_region = results[0];

            var category_code = activated_region.category.code;
            var region_id = activated_region.id;
            var details = {
                'gender': activated_region.gender,
                'colors': activated_region.colors,
                'sub_category': (Array.isArray(activated_region.sub_category)) ?
                    activated_region.sub_category : [activated_region.sub_category]
            };

            classification_map[category_code + '_' + region_id] = details;
            show_detection_results(results);

            if (category_code !== 0 && (region_id !== null || region_id !== undefined)) {
                if (current_category_code > 0)
                    activated_region.gender.code = current_category_code & GENDER_MASK;
                else
                    current_category_code = activated_region.gender.code | get_category(category_code);

                select_gender(activated_region);
                select_detection_results(activated_region);

                re_search = true;
            }

            if (classification_map[category_code + '_' + region_id] !== null) {
                window.setTimeout(function () {
                    show_classification_results(details);
                }, 50);
            }
        }
        init_cropper(image_url, activated_region);
    };

    show_loader_modal();

    if (type === "url")
        api_detection_url(detection_cb, image_url);
    else if (type === "file")
        api_detection_file(detection_cb, image_url, image_extension);
});

function error_and_go_home(msg) {
    alert(msg);
    location.replace("/");
}

function get_gender(gender_code) {
    if (typeof(gender_code) === "string") {
        if (gender_code === "female" || gender_code === "Female")
            return F_BIT;
        if (gender_code === "male" || gender_code === "Male")
            return M_BIT;
        if (gender_code === "unisex" || gender_code === "Both")
            return F_BIT | M_BIT;
        return 0;
    }
    if (typeof(gender_code) === "number") {
        if ((gender_code&GENDER_MASK) === F_BIT)
            return "Female";
        if ((gender_code&GENDER_MASK) === M_BIT)
            return "Male";
        return "Both";
    }
}

function get_category(category_code) {
    return category_code & DATA_MASK;
}

function unmask_category(category_code) {
    var cates = Object.keys(CATEGORY_NAME);
    var cate_list = [];

    for (cc in cates) {
        if (category_code & cc !== 0) cate_list.push(cc);
    }
    return cate_list;
}

function show_detection_results(results) {
    document.getElementById("results_detection").style.display = "block";

    var contents = "";
    var progress_list = [];
    var idx_list = {};

    for (idx in results) {
        var region = JSON.parse(JSON.stringify(results[idx]));
        var category_id = region.category.code;
        var region_id = region.id;

        var v = 1;
        if (idx_list[region.category.code] === undefined) {
            idx_list[region.category.code] = 1;
        }
        else {
            idx_list[region.category.code] += 1;
            v = idx_list[region.category.code];
        }

        var classification_map_id = category_id + "_" + region_id;
        classification_map[classification_map_id] = {
            'gender': region.gender,
            'colors': region.colors,
            'sub_category': (Array.isArray(region.sub_category))?
                region.sub_category : [region.sub_category]
        };

        var elem_id = "detection_" + category_id + "_" + region_id;
        elem_id = elem_id.replace(/,/gi, "_");

        detection_results_elems.push(elem_id);

        var progress_id = "detectioin_progress_" + category_id + "_" + region_id;
        progress_id = progress_id.replace(/,/gi, "_");
        progress_list.push({"id": progress_id, "score": region.score});

        var r_json = JSON.stringify(region);
        contents += "<div class='item' id='" + elem_id + "'>" +
            "<a href='javascript:change_cropper(" + r_json + ")'>" +
            CATEGORY_NAME[category_id] + " #" + v + "</a>" + "<div id='" + progress_id + "'></div>" +
            "</div>";

    }

    document.getElementById("detection_list").innerHTML = contents;

    for (var i=0; i<progress_list.length; i++) {
        var id = "#" + progress_list[i].id;
        var score = progress_list[i].score;
        $(id).goalProgress({
            goalAmount: 100,
            currentAmount: 100*score,
            text: score.toFixed(2)
        });
    }
}

function show_classification_results(details) {
    if (details.length < 0)
        return;

    document.getElementById("results_classification").style.display = "block";

    //print gender chart
    var gender_labels = (details.gender.code === F_BIT)? ['female', 'male']:['male', 'female'];
    var gender_data = [details.gender.score, 1-details.gender.score];
    show_chart(document.getElementById("classification_chart_sex"),
               gender_labels, gender_data);

    // print cloth chart
    var sub_cate_labels = [];
    var sub_cate_data = [];
    for (var i=0; i<details.sub_category.length; i++) {
        var label = details.sub_category[i].code;
        if (typeof (label) === "number")
            sub_cate_labels.push(SUB_CATEGORY_NAME[details.sub_category[i].code].toLowerCase());
        else
            sub_cate_labels.push(details.sub_category[i].code);
        sub_cate_data.push(details.sub_category[i].score);
    }
    show_chart(document.getElementById("classification_chart_cloth"),
               sub_cate_labels, sub_cate_data);
}

function show_chart(ctx, labels, data) {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

function init_cropper(url, region) {
    document.getElementById("thumbnail_view").src = url;

    cropper = $("#thumbnail_view").cropper({
        guides: false,
        highlight: false,
        zoomable: false,
        checkCrossOrigin: false,
        viewMode: 2,
        crop: function (e) {},
        built: function() {
            var image_size_cb = function (width, height) {
                current_image_size.width = width;
                current_image_size.height = height;

                change_cropper(region);
            };

            get_image_size_from_url(image_size_cb, url);
        }
    });

    cropper.cropper("disable");
}

function change_cropper(region) {
    region = JSON.parse(JSON.stringify(region));

    var image_view = document.getElementById("image_view");
    var display_width = image_view.clientWidth;
    var display_height = image_view.clientHeight;

/*
    var resize_size = 500;
    var resize_width = current_image_size.width;
    var resize_height = current_image_size.height;

    if (current_image_size.width > current_image_size.height) {
        if (current_image_size.width > resize_size) {
            resize_width = resize_size;
            resize_height = (resize_size*current_image_size.height)/current_image_size.width;
        }
    } else {
        if (current_image_size.height > resize_size) {
            resize_height = resize_size;
            resize_width = (resize_size*current_image_size.width)/current_image_size.height;
        }
    }

    var ox1 = region.x1*(current_image_size.width/resize_width);
    var oy1 = region.y1*(current_image_size.height/resize_height);
    var ox2 = region.x2*(current_image_size.width/resize_width);
    var oy2 = region.y2*(current_image_size.height/resize_height);

    var display_left = ox1*(display_width/current_image_size.width);
    var display_top = oy1*(display_height/current_image_size.height);
    var display_width = ox2*(display_width/current_image_size.width) - display_left;
    var display_height = oy2*(display_height/current_image_size.height) - display_top;
*/

    var display_left = display_width*region.rx1;
    var display_top = display_height*region.ry1;
    var display_width = display_width*region.rx2 - display_left;
    var display_height = display_height*region.ry2 - display_top;

    // enable cropper
    $("#thumbnail_view").cropper('enable');

    cropper.cropper("setCropBoxData", {
        left: display_left,
        top: display_top,
        width: display_width,
        height: display_height
    });

    // disable cropper
    $("#thumbnail_view").cropper('disable');

    current_category_code = region.category.code | current_category_code & GENDER_MASK;
    // select detection results
    select_detection_results(region);

    // show classification results
    var classification_map_id = region.category.code + '_' + region.id;
    show_classification_results(classification_map[classification_map_id]);
}

function select_detection_results(region) {
    if (region.id === null || region.id === undefined) return;

    // remove class
    for (var i=0; i<detection_results_elems.length; i++) {
        $("#" + detection_results_elems[i]).removeClass("select");
    }

    var elem_id = "detection_" + (current_category_code & DATA_MASK).toString() + "_" + region.id;
    elem_id = elem_id.replace(/,/gi, "_");
    // var progress_id = ("detection_progress_" + current_category_code & DATA_MASK + "_" + region.id).replace(/,/gi, "_");

    // add class
    $("#" + elem_id).addClass("select");

    if (re_search)
        search(region, current_category_code, 0, true, false);
}

function init_search_category(region, additional_category, init) {
    var contents = "";

    var current_gender = region.gender.code;

    var init_contents = function (gender_code) {
        var r = JSON.parse(JSON.stringify(region));
        r.gender.code = gender_code;
        r.gender.score = 1;
        r = JSON.stringify(r);

        return "<a class=\"sex\" href=\'javascript:select_gender(" + r + ")\'>" +
            get_gender(gender_code) + "</a>";
    };

    // gender
    contents += "<div class='sex-list'>";
    if (current_gender === M_BIT) {
        contents += "<a class=\"sex select\">Male</a>";
        contents += init_contents(F_BIT) + init_contents(GENDER_MASK);
    }
    else if (current_gender === F_BIT) {
        contents += init_contents(M_BIT);
        contents += "<a class=\"sex select\">Female</a>";
        contents += init_contents(GENDER_MASK);
    } else if (current_gender === GENDER_MASK) {
        contents += init_contents(M_BIT) + init_contents(F_BIT);
        contents += "<a class=\"sex select\">Both</a>";
    }
    contents += "</div>";

    if (additional_category !== 0) {
        if (!init && additional_category !== 0) {
            var ccid = current_category_ids.indexOf(additional_category);
            if (ccid < 0) {
                current_category_ids.push(additional_category);
                current_category_code |= additional_category;
            } else {
                current_category_ids.splice(ccid, 1);
                if (((current_category_code & DATA_MASK) !== additional_category) &&
                    ((current_category_code & additional_category) !== 0))
                    current_category_code ^= additional_category;
            }
        } else {
            current_category_ids = [region.category.code];
        }
    }

    var r_json = JSON.stringify(region);
    var category_id = 0;
    var category_name = 0;

    if (CATEGORY["caids"].indexOf(region.category.code) >= 0) {
        // Category
        contents += "<div class='category-list'>";
        for (var i = 0; i < CATEGORY[current_gender].length; i++) {
            category_id = CATEGORY[current_gender][i];
            category_name = CATEGORY_NAME[category_id];
            if (current_category_ids.indexOf(CATEGORY[current_gender][i]) < 0) {
                contents += "<a class=\"category\" href=\'javascript:search(" + r_json +
                    ", " + category_id + ", 0, false, true)\'>" + category_name + "</a>";
            } else {
                contents += "<a class=\"category select\" href=\'javascript:search(" + r_json +
                    ", " + category_id + ", 0, false, true)\'>" + category_name + "</a>";
            }
        }
        contents += "</div>";
    }
    else if (SHOES["caids"].indexOf(region.category.code) >= 0) {
        // Shoes
        contents += "<div class='category-list'>";
        for (var i = 0; i < SHOES[current_gender].length; i++) {
            category_id = SHOES[current_gender][i];
            category_name = CATEGORY_NAME[category_id];
            if (current_category_ids.indexOf(SHOES[current_gender][i]) < 0) {
                contents += "<a class=\"category\" href=\'javascript:search(" + r_json +
                    ", " + category_id + ", 0, false, true)\'>" + category_name + "</a>";
            } else {
                contents += "<a class=\"category select\" href=\'javascript:search(" + r_json +
                    ", " + category_id + ", 0, false, true)\'>" + category_name + "</a>";
            }
        }
        contents += "</div>";
    }
    else if (BAGS["caids"].indexOf(region.category.code) >= 0) {
        // Bags
        contents += "<div class='category-list'>";
        for (var i = 0; i < BAGS[current_gender].length; i++) {
            category_id = BAGS[current_gender][i];
            category_name = CATEGORY_NAME[category_id];
            if (current_category_ids.indexOf(BAGS[current_gender][i]) < 0) {
                contents += "<a class=\"category\" href=\'javascript:search(" + r_json +
                    ", " + category_id + ", 0, false, true)\'>" + category_name + "</a>";
            } else {
                contents += "<a class=\"category select\" href=\'javascript:search(" + r_json +
                    ", " + category_id + ", 0, false, true)\'>" + category_name + "</a>";
            }
        }
        contents += "</div>";
    }

    if (current_category_ids.length === 1 && current_category_ids[0] === region.category.code && SUB_CATEGORY[region.category.code].length > 0) {
        contents += "<div class='category-list'>";
        for (var i = 0; i < SUB_CATEGORY[region.category.code].length; i++) {
            category_id = SUB_CATEGORY[region.category.code][i];
            category_name = SUB_CATEGORY_NAME[category_id];
            contents += "<a class=\"category\" href=\'javascript:search(" + r_json +
                ", " + region.category.code + ", " + category_id + ", false, true)\'>" + category_name.toLowerCase() + "</a>";
        }
        contents += "</div>";
    }

    document.getElementById("searchable_category_list").innerHTML = contents;
}

function select_gender(region) {
    current_category_ids = [];

    current_category_code = region.gender.code | get_category(current_category_code);
    if ((current_category_code === (M_BIT | SKIRTS)) || (current_category_code === (M_BIT | DRESSES))) {
        current_category_code = M_BIT | TOPS;
    }

    if (re_search)
        search(region, (current_category_code & DATA_MASK), 0, false, false);
}

function search(region, additional_category, sub_category, init, use_scroll) {
    document.getElementById("results_search").style.display = "block";

    init_search_category(region, additional_category, init);

    // clear results
    document.getElementById("search_list").innerHTML = "<div class='blank-space'>&nbsp;</div>";

    var $grid = $("#search_list").masonry({
        columnWidth: 1,
        itemSelector: ".grid-item",
        gutter: 5
    });

    function addItemElem(name, price, link, image_url, background_pos, cc) {
        var elem = document.createElement("div");
        elem.className = "grid-item";
        elem.innerHTML = '<img class="thumbnail" src="images/spacer.gif" style="background-image: url(\'https://img.pxl.ai/image?url=' + image_url +
            '\'); background-position: ' + background_pos + '">' +
            '<a href="./view.html?type=url&url=' + encodeURIComponent(image_url) +
            '&cc=' + cc + '"><div class="view-button"><img src="images/icon_search.svg"></div></a>' +
            '<div class="name"><a href="' + link + '">' + name + '</a></div>' +
            '<div class="price"><a href="' + link + '">' + commify(price) + ' KRW</a></div>';
        var $elem = $(elem);
        $grid.append($elem).masonry("appended", $elem);
    }

    var convert_search_v0_format = function (results) {
        return results[Object.keys(results)[0]];
    };

    var search_cb = function (results) {
        document.querySelector('.blank-space').style.display = 'none';
        hide_loader_modal();

        if (window.localStorage.getItem("use_v1") === "false")
            results = convert_search_v0_format(results);
        var result_count = results.length;

        if (result_count > 0 && use_scroll) {
//             scroll("search_list");
        }

        for (var i=0; i<result_count; i++) {
            var r = results[i].region;
            var backgroundPos = Math.floor((r[0] + (r[2] - r[0]) / 2) /
                results[i].size_info[0] * 100) + '% ';
            addItemElem(results[i].name, results[i].price, results[i].product_url, results[i].image_url, backgroundPos,
                results[i].category_code);
        }

        $grid.imagesLoaded(function() {
            $grid.masonry();
        });
    };

    show_loader_modal();

    api_search(search_cb, region, current_category_code, sub_category, 34);
}

function show_loader_modal() {
    document.getElementById("loader_modal").style.display = "table";
}

function hide_loader_modal() {
    document.getElementById("loader_modal").style.display = "none";
}
