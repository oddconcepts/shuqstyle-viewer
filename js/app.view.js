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
    0: 'unknown',
    1: 'dresses',
    2: 'pants',
    4: 'shorts',
    8: 'skirts',
    16: 'tops',
    32: 'outers',
    232: 'cardigans',
    233: 'jumpers',
    234: 'coats',
    235: 'jackets',
    236: 'vests',
    237: 'tshirts',
    238: 'swatshirts',
    239: 'hoodies',
    240: 'knits',
    241: 'blouses',
    242: 'shirts',
    243: 'bustiers',
    244: 'bras',
    245: 'camisoles/slips',
    246: 'running shirts',
    247: 'bikini tops',
    248: 'rash guards',
    249: 'long pants',
    250: 'capri pants',
    251: 'short pants',
    252: 'long skirts',
    253: 'midi skirts',
    254: 'mini skirts',
    255: 'panties',
    256: 'drawers',
    257: 'underskirts',
    258: 'bikini bottoms',
    259: 'swim briefs',
    260: 'swim trunks',
    261: 'dresses',
    262: 'jumpsuits',
    264: 'bodysuits',
    265: 'onepiece swimsuits',
    266: 'monokinis',
    267: 'wetsuits',
    268: 'booties',
    269: 'ankle boots',
    270: 'walkers',
    271: 'long boots',
    272: 'half boots',
    273: 'rain boots',
    274: 'boots',
    275: 'pumps',
    276: 'stiletto heels',
    277: 'wedge heels',
    278: 'toe open heels',
    279: 'sling back shoes',
    280: 'mary jane shoes/strap heels',
    281: 'flat shoes',
    282: 'loafers',
    283: 'bloafers',
    284: 'oxford shoes',
    285: 'flat sandals',
    286: 'platform sandals',
    287: 'wedge sandals',
    288: 'gladiator sandals',
    289: 'strap sandals',
    290: 'slippers',
    291: 'flip flops',
    292: 'mules',
    293: 'hightop shoes',
    294: 'sneakers',
    295: 'slip on shoes',
    296: 'dress shoes',
    297: 'boat shoes',
    298: 'sandals',
    299: 'tracking shoes'
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
    1: {
        "type": "normal",
        "sub_categories": [],
        "str": "dresses"
    },
    2: {
        "type": "normal",
        "sub_categories": [
            {"id": 249, "str": "long pants"},
            {"id": 250, "str": "capri pants"},
            {"id": 251, "str": "short pants"}
        ],
        "str": "pants"
    },
    4: {
        "type": "normal",
        "sub_categories": [],
        "str": "short pants"
    },
    8: {
        "type": "normal",
        "sub_categories": [
            {"id": 252, "str": "long skirts"},
            {"id": 253, "str": "midi skirts"},
            {"id": 254, "str": "mini skirts"}
        ],
        "str": "skirts"
    },
    16: {
        "type": "normal",
        "sub_categories": [
            {"id": 237, "str": "tshirts"},
            {"id": 238, "str": "sweatshirts"},
            {"id": 239, "str": "hoodies"},
            {"id": 240, "str": "knits"},
            {"id": 241, "str": "blouses"},
            {"id": 242, "str": "shirts"},
            {"id": 243, "str": "bustiers"}],
        "str": "tops"
    },
    32: {
        "type": "normal",
        "sub_categories": [
            {"id": 232, "str": "cardigans"},
            {"id": 233, "str": "jumpers"},
            {"id": 234, "str": "coats"},
            {"id": 235, "str": "jackets"},
            {"id": 236, "str": "vests"}
        ],
        "str": "outerwears"
    },
    64: {
        "type": "underwear",
        "sub_categories": [
            {"id": 244, "str": "bras"},
            {"id": 245, "str": "camisoles/slips"},
            {"id": 246, "str": "running shirts"}
        ],
        "str": "underwear tops"
    },
    128: {
        "type": "underwear",
        "sub_categories": [
            {"id": 255, "str": "panties"},
            {"id": 256, "str": "drawers"},
            {"id": 257, "str": "underskirts"}
        ],
        "str": "underwear bottoms"
    },
    256: {
        "type": "underwear",
        "sub_categories": [
            {"id": 264, "str": "bodysuits"}
        ],
        "str": "underwear onepiece"
    },
    512: {
        "type": "swimsuits",
        "sub_categories": [
            {"id": 247, "str": "bikini tops"},
            {"id": 248, "str": "rash guards"}
        ],
        "str": "swimsuits tops"
    },
    1024: {
        "type": "swimsuits",
        "sub_categories": [
            {"id": 258, "str": "bikini bottoms"},
            {"id": 259, "str": "swim briefs"},
            {"id": 260, "str": "swim trunks"}
        ],
        "str": "swimsuits bottoms"
    },
    2048: {
        "type": "swimsuits",
        "sub_categories": [
            {"id": 265, "str": "onepiece swimsuits"},
            {"id": 266, "str": "monokinis"},
            {"id": 267, "str": "wetsuits"}
        ],
        "str": "swimsuits onepiece"
    },
    4096: {
        "type": "bags",
        "sub_categories": [],
        "str": "tote bags"
    },
    8192: {
        "type": "bags",
        "sub_categories": [],
        "str": "shoulder/cross bags"
    },
    16384: {
        "type": "bags",
        "sub_categories": [],
        "str": "backpacks"
    },
    32768: {
        "type": "bags",
        "sub_categories": [],
        "str": "bumbags"
    },
    65536: {
        "type": "bags",
        "sub_categories": [],
        "str": "clutch bags"
    },
    131072: {
        "type": "bags",
        "sub_categories": [],
        "str": "pouch bags"
    },
    262144: {
        "type": "bags",
        "sub_categories": [],
        "str": "briefcases"
    },
    524288: {
        "type": "bags",
        "sub_categories": [],
        "str": "sports bags"
    },
    1048576: {
        "type": "bags",
        "sub_categories": [],
        "str": "suitcases"
    },
    2097152: {
        "type": "shoes",
        "sub_categories": [
            {"id": 268, "str": "booties"},
            {"id": 269, "str": "ankle boots"},
            {"id": 270, "str": "walkers"},
            {"id": 271, "str": "long boots"},
            {"id": 272, "str": "half boots"},
            {"id": 273, "str": "rain boots"},
            {"id": 274, "str": "boots"}
        ],
        "str": "boots"
    },
    4194304: {
        "type": "shoes",
        "sub_categories": [
            {"id": 275, "str": "pumps"},
            {"id": 276, "str": "stiletto heels"},
            {"id": 277, "str": "wedge heels"},
            {"id": 278, "str": "toe open heels"},
            {"id": 279, "str": "sling back shoes"},
            {"id": 280, "str": "maryjane strap heels"}
        ],
        "str": "heels/pumps"
    },
    8388608: {
        "type": "shoes",
        "sub_categories": [
            {"id": 281, "str": "flat shoes"},
            {"id": 282, "str": "loafers"},
            {"id": 283, "str": "bloafers"},
            {"id": 284, "str": "oxford shoes"},
            {"id": 296, "str": "dress shoes"},
            {"id": 297, "str": "boat shoes"}
        ],
        "str": "loafers"
    },
    16777216: {
        "type": "shoes",
        "sub_categories": [
            {"id": 285, "str": "flat sandals"},
            {"id": 286, "str": "platform sandals"},
            {"id": 287, "str": "wedge sandals"},
            {"id": 288, "str": "gladiator sandals"},
            {"id": 289, "str": "strap sandals"},
            {"id": 290, "str": "slippers"},
            {"id": 291, "str": "flip flops"},
            {"id": 292, "str": "mules"},
            {"id": 298, "str": "sandals"}
        ],
        "str": "sandals"
    },
    33554432: {
        "type": "shoes",
        "sub_categories": [
            {"id": 293, "str": "hightop shoes"},
            {"id": 294, "str": "sneakers"},
            {"id": 295, "str": "slip on shoes"}
        ],
        "str": "sneakers"
    },
    67108864: {
        "type": "shoes",
        "sub_categories": [
            {"id": 299, "str": "tracking shoes"}
        ],
        "str": "sports shoes"
    }
};

//var DL_PROXY = 'https://dl-img.oddconcepts.kr/';
var DL_PROXY = '';

var current_image_url;
var current_image_size = {"width": 0, "height": 0};
var current_category_code = 0;
var current_category_ids = null;
var current_gender = null;
var current_subcategory_ids = null;
var current_region = null;
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
    show_chart(document.getElementById("classification_chart_gender"),
               gender_labels, gender_data);

    // print cloth chart
    var sub_cate_labels = [];
    var sub_cate_data = [];
    for (var i=0; i<details.sub_category.length; i++) {
        var label = details.sub_category[i].code;
        if (typeof (label) === "number")
            sub_cate_labels.push(SUB_CATEGORY_NAME[details.sub_category[i].code]);
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

    init_current_values(region);

    if (re_search)
        search(current_region, current_gender, current_category_ids, current_subcategory_ids);
}

function init_current_values(region) {
    current_region = region;
    current_gender = region.gender.code;
    current_category_ids = [region.category.code];
    current_subcategory_ids = [];
}

function click_gender(gender) {
    current_gender = gender;

    if (re_search)
        search(current_region, current_gender, current_category_ids, current_subcategory_ids);
}

function show_gender(gender) {
    var contents = "";
    var genders = [M_BIT, F_BIT, GENDER_MASK];

    for (var i=0; i<genders.length; i++) {
        if (gender === genders[i]) {
            contents += "<a class=\"gender select\" >"+get_gender(genders[i])+"</a>";
        }
        else {
            contents += "<a class=\"gender\" href=\'javascript:click_gender(" + genders[i] + ")\'>"+get_gender(genders[i])+"</a>";
        }
    }
    contents += "</div>";
    return contents;
}

function click_category(category) {
    var pos = current_category_ids.indexOf(category);
    if (pos >= 0 && current_category_ids.length > 1) {
        current_category_ids.splice(pos, 1);
    }
    else if (pos < 0) {
        current_category_ids.push(category);
    }

    current_subcategory_ids = [];
    if (re_search)
        search(current_region, current_gender, current_category_ids, current_subcategory_ids);
}

function show_category(region_category, selected_gender, selected_category) {
    var contents = "<div class='category-list'>";

    for (var id in CATEGORY) {
        if (CATEGORY[id].type === CATEGORY[region_category.toString()].type) {
            var n_id = parseInt(id);
            var name = CATEGORY[id].str;
            if (selected_category.indexOf(n_id) < 0) {
                contents += "<a class=\"category\" href=\'javascript:click_category(" + n_id + ")\'>" + name + "</a>";
            }
            else {
                contents += "<a class=\"category select\" href=\'javascript:click_category(" + n_id + ")\'>" + name + "</a>";
            }
        }
    }

    contents += "</div>";

    return contents;
}

function click_sub_category(sub_category) {
    var pos = current_subcategory_ids.indexOf(sub_category);
    if (pos >= 0) {
        current_subcategory_ids.splice(pos, 1);
    }
    else {
        current_subcategory_ids.push(sub_category);
    }

    if (re_search)
        search(current_region, current_gender, current_category_ids, current_subcategory_ids);
}

function show_sub_category(region_category, selected_category, selected_sub_category) {
    var contents = "<div class='category-list'>";
    if (selected_category.length === 1 && selected_category[0] === region_category) {
        var sub_categories = CATEGORY[region_category.toString()]["sub_categories"];
        for (var i in sub_categories) {
            if (sub_categories.hasOwnProperty(i)) {
                var n_id = sub_categories[i].id;
                var name = sub_categories[i].str;
                if (selected_sub_category.indexOf(n_id) >= 0) {
                    contents += "<a class=\"category select\" href=\'javascript:click_sub_category(" + n_id + ")\'>" + name + "</a>";
                }
                else {
                    contents += "<a class=\"category\" href=\'javascript:click_sub_category(" + n_id + ")\'>" + name + "</a>";
                }
            }
        }
    }
    contents += "</div>";

    return contents;
}

function search(region, gender, category_ids, sub_category_ids) {
    document.getElementById("results_search").style.display = "block";

    document.getElementById("searchable_category_list").innerHTML = show_gender(gender);

    document.getElementById("searchable_category_list").innerHTML += show_category(region.category.code, gender, category_ids);

    document.getElementById("searchable_category_list").innerHTML += show_sub_category(region.category.code, category_ids, sub_category_ids);

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
        elem.innerHTML = '<img class="thumbnail" src="images/spacer.gif" style="background-image: url(\'https://img.pxl.ai/' + image_url +
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

        for (var i=0; i<result_count; i++) {
            var r = results[i].region;
            var backgroundPos = Math.floor((r[0] + (r[2] - r[0]) / 2) / 500 * 100) + '% ';
            addItemElem(results[i].name, results[i].price, results[i].product_url, results[i].image_url, backgroundPos,
                results[i].category_code);
        }

        $grid.imagesLoaded(function() {
            $grid.masonry();
        });
    };

    show_loader_modal();

    var gendered_category = gender;

    for (var i=0; i<category_ids.length; i++) {
        gendered_category |= category_ids[i];
    }

    api_search(search_cb, region, gendered_category, sub_category_ids, 34);
}

function show_loader_modal() {
    document.getElementById("loader_modal").style.display = "table";
}

function hide_loader_modal() {
    document.getElementById("loader_modal").style.display = "none";
}
