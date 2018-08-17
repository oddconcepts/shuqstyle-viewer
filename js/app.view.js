var GENDER_MASK = 1610612736;
var M_BIT = 1073741824;
var F_BIT = 536870912;
var DRESSES = 1;
var SKIRTS = 8;

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

var current_category_ids = null;
var current_gender = null;
var current_subcategory_ids = null;
var current_region = null;
var cropper;

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
    } else if (type === "file") {
        image_url = localStorage.getItem("base64");
        var image_extension = localStorage.getItem("extension");
    } else {
        error_and_go_home("Unknown type");
        return;
    }

    if (image_url === undefined)
        error_and_go_home("Image url does not exist.");

    var convert_region_format = function (regions) {
        var rs = JSON.parse(JSON.stringify(regions));
        var sortable = [];

        for (var cate_code in rs) {
            if (rs.hasOwnProperty(cate_code)) {
                for (var r_idx in rs[cate_code]) {
                    if (rs[cate_code].hasOwnProperty(r_idx)) {
                        var region = rs[cate_code][r_idx];

                        var d = (region.details !== undefined);
                        var f = (parseInt(cate_code) & SKIRTS !== 0 || parseInt(cate_code) & DRESSES !== 0);

                        region.colors = [];
                        region.gender = {
                            'code': d ? get_gender(region.details.sex.label) : f ? F_BIT : GENDER_MASK,
                            'score': d ? region.details.sex.probability : f ? 1 : 0.5
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

                        if (d) delete region['details'];
                        delete region['x1'];
                        delete region['x2'];
                        delete region['y1'];
                        delete region['y2'];

                        sortable.push(region);
                    }
                }
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

        if (results.length > 0) {
            // init region
            init_current_values(results[0]);

            show_region_names_and_scores(results);

            show_current_region_name_and_score(undefined, results[0]);

            window.setTimeout(function () {show_classification_results(results[0]);}, 50);

            init_cropper(image_url, results[0]);

            show_details(current_region.category.code, current_gender, current_category_ids, current_subcategory_ids);

            search(current_region, current_gender, current_category_ids, current_subcategory_ids);
        }
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

function get_element_id(region) {
    var elem_id = "detection_" + region.category.code + "_" + region.id;
    elem_id = elem_id.replace(/,/gi, "_");
    return elem_id;
}

function show_region_names_and_scores(results) {
    document.getElementById("results_detection").style.display = "block";

    var contents = "";
    var progress_list = [];
    var idx_list = {};

    for (var idx in results) {
        if (results.hasOwnProperty(idx)) {
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

            var elem_id = get_element_id(region);
            var progress_id = "detectioin_progress_" + category_id + "_" + region_id;
            progress_id = progress_id.replace(/,/gi, "_");
            progress_list.push({"id": progress_id, "score": region.score});

            var r_json = JSON.stringify(region);
            contents += "<div class='item' id='" + elem_id + "'>" +
                "<a href='javascript:change_region(" + r_json + ")'>" +
                CATEGORY[category_id.toString()].str + " #" + v + "</a>" + "<div id='" + progress_id + "'></div>" +
                "</div>";
        }
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

function show_classification_results(region) {
    document.getElementById("results_classification").style.display = "block";

    //print gender info
    var gender_labels = (region.gender.code === F_BIT)? ['female']:['male'];
    show_info(document.getElementById("classification_gender"), gender_labels);

    //print cloth info
    var categories = CATEGORY[region.category.code.toString()];
    var cate_labels = categories.str;
    var sub_categories = CATEGORY[region.category.code.toString()]["sub_categories"];
    var sub_cate_labels = [];
    for (var i in sub_categories) {
        if (sub_categories.hasOwnProperty(i) && sub_categories[i].id === region.sub_category.code) {
            sub_cate_labels.push(sub_categories[i].str);
            break;
        }
    }
    show_info(document.getElementById("classification_cate"), cate_labels);
    show_info(document.getElementById("classification_sub_cate"), sub_cate_labels);

    //print attributes info
    if (region.attributes === undefined || Object.keys(region.attributes).length <= 0) {
        document.getElementById("info-attr").style.visibility = "hidden";
    }
    else if (Object.keys(region.attributes).length > 0) {
        document.getElementById("info-attr").style.visibility = "visible";

        var attribute_labels = [];
        var attributes = region.attributes;
        for (var attr_a in attributes) {
            attribute_labels[attr_a] = [];
            for (var attr_b in attributes[attr_a]) {
                attribute_labels[attr_a].push(attributes[attr_a][attr_b].label);
            }
        }
        show_info(document.getElementById("classification_attribute"), attribute_labels);
    }
}

function show_info(ctx, labels) {
    if (ctx == document.getElementById("classification_attribute")) {
        var contents = "";
        for (var attr_a in labels) {
            contents += "<div class='attr-list'><div class='attr-a-list'>" + attr_a
                + "</div><div class='attr-b-list'>" + labels[attr_a] + "</div></div>";
        }
        ctx.innerHTML = contents;
    }
    else
        ctx.innerHTML = '<div>' + labels + '</div>';
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
                change_region(region)
            };

            get_image_size_from_url(image_size_cb, url);
        }
    });

    cropper.cropper("disable");
}

function change_region(region) {
    var old_region = current_region;
    change_cropper(region);

    init_current_values(region);

    show_current_region_name_and_score(old_region, region);

    show_classification_results(region);

    show_details(current_region.category.code, current_gender, current_category_ids, current_subcategory_ids);

    search(current_region, current_gender, current_category_ids, current_subcategory_ids);
}

function change_cropper(region) {
    region = JSON.parse(JSON.stringify(region));

    var image_view = document.getElementById("image_view");
    var display_width = image_view.clientWidth;
    var display_height = image_view.clientHeight;

    var display_left = display_width*region.rx1;
    var display_top = display_height*region.ry1;
    display_width = display_width*region.rx2 - display_left;
    display_height = display_height*region.ry2 - display_top;

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
}

function show_current_region_name_and_score(old_region, new_region) {
    if (new_region.id === null || new_region.id === undefined) return;

    // remove class
    if (old_region !== undefined) {
        $("#" + get_element_id(old_region)).removeClass("select");
    }

    var elem_id = get_element_id(new_region);

    // add class
    $("#" + elem_id).addClass("select");
}

function init_current_values(region) {
    current_region = region;
    current_gender = region.gender.code;
    current_category_ids = [region.category.code];
    current_subcategory_ids = [];
}

function show_details(region_category, selected_gender, selected_category, selected_sub_category) {
    document.getElementById("details").style.display = "block";
    show_gender(selected_gender);
    show_category(region_category, selected_gender, selected_category);
    show_sub_category(region_category, selected_category, selected_sub_category);
}

function click_gender(gender) {
    current_gender = gender;

    show_details(current_region.category.code, current_gender, current_category_ids, current_subcategory_ids);

    search(current_region, current_gender, current_category_ids, current_subcategory_ids);
}

function show_gender(gender) {
    var contents = "<div class='gender-list'>";
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
    document.getElementById("searchable_gender_list").innerHTML = contents;
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

    show_details(current_region.category.code, current_gender, current_category_ids, current_subcategory_ids);
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

    document.getElementById("searchable_category_list").innerHTML = contents;
}

function click_sub_category(sub_category) {
    var pos = current_subcategory_ids.indexOf(sub_category);
    if (pos >= 0) {
        current_subcategory_ids.splice(pos, 1);
    }
    else {
        current_subcategory_ids.push(sub_category);
    }

    show_details(current_region.category.code, current_gender, current_category_ids, current_subcategory_ids);
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

    document.getElementById("searchable_sub_category_list").innerHTML = contents;
}

function search(region, gender, category_ids, sub_category_ids) {
    document.getElementById("results_search").style.display = "block";

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
