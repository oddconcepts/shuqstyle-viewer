var GENDER_MASK = 1610612736;
var M_BIT = 1073741824;
var F_BIT = 536870912;
var ONEPIECE = 1;
var SKIRTS = 8;

var CATEGORY = {
    1: {
        "type": "normal",
        "sub_categories": [
            {"id": 261, "str": "dresses"},
            {"id": 262, "str": "jumpsuits"}
        ],
        "str": "onepiece"
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

var ATTRIBUTE = {
    "sense": {
        "31": {
            "type": "sense",
            "en": "casual",
            "ko": "캐주얼"
        },
        "32": {
            "type": "sense",
            "en": "chic",
            "ko": "시크"
        },
        "33": {
            "type": "sense",
            "en": "feminine",
            "ko": "페미닌"
        },
        "34": {
            "type": "sense",
            "en": "formal",
            "ko": "포멀"
        },
        "35": {
            "type": "sense",
            "en": "lovely",
            "ko": "러블리"
        },
        "36": {
            "type": "sense",
            "en": "luxury",
            "ko": "럭셔리"
        },
        "37": {
            "type": "sense",
            "en": "sexy",
            "ko": "섹시"
        },
        "38": {
            "type": "sense",
            "en": "sportive",
            "ko": "스포티"
        }
    },
    "pattern": {
        "50": {
            "type": "pattern",
            "en": "none",
            "ko": "없음"
        },
        "51": {
            "type": "pattern",
            "en": "check",
            "ko": "체크"
        },
        "52": {
            "type": "pattern",
            "en": "stripe",
            "ko": "스트라이프"
        },
        "53": {
            "type": "pattern",
            "en": "flower",
            "ko": "꽃무늬"
        },
        "54": {
            "type": "pattern",
            "en": "dot",
            "ko": "도트"
        },
        "55": {
            "type": "pattern",
            "en": "camouflage",
            "ko": "카모플라쥬"
        },
        "56": {
            "type": "pattern",
            "en": "leopard",
            "ko": "호피"
        },
        "57": {
            "type": "pattern",
            "en": "ethnic",
            "ko": "에스닉"
        },
        "58": {
            "type": "pattern",
            "en": "paisley",
            "ko": "페이즐리"
        },
        "59": {
            "type": "pattern",
            "en": "geometry",
            "ko": "기하학"
        },
        "60": {
            "type": "pattern",
            "en": "plain",
            "ko": "민무늬"
        },
        "61": {
            "type": "pattern",
            "en": "print",
            "ko": "프린트"
        }
    },
    "fabric": {
        "70": {
            "type": "fabric",
            "en": "none",
            "ko": "없음"
        },
        "71": {
            "type": "fabric",
            "en": "leather",
            "ko": "가죽"
        },
        "72": {
            "type": "fabric",
            "en": "cotton",
            "ko": "면"
        },
        "73": {
            "type": "fabric",
            "en": "knit\/angora",
            "ko": "니트\/앙고라"
        },
        "74": {
            "type": "fabric",
            "en": "fur",
            "ko": "퍼"
        },
        "75": {
            "type": "fabric",
            "en": "denim",
            "ko": "데님"
        },
        "76": {
            "type": "fabric",
            "en": "suede\/velvet",
            "ko": "스웨이드\/벨벳"
        },
        "77": {
            "type": "fabric",
            "en": "chiffon\/silk",
            "ko": "쉬폰\/실크"
        },
        "78": {
            "type": "fabric",
            "en": "linen",
            "ko": "리넨"
        },
        "79": {
            "type": "fabric",
            "en": "lace\/mesh",
            "ko": "레이스\/매쉬"
        },
        "80": {
            "type": "fabric",
            "en": "tweed",
            "ko": "트위드"
        },
        "81": {
            "type": "fabric",
            "en": "sequin\/spangle",
            "ko": "시퀸\/스팽글"
        },
        "82": {
            "type": "fabric",
            "en": "polyester",
            "ko": "폴리에스터"
        }
    },
    "neckline": {
        "90": {
            "type": "neckline",
            "en": "none",
            "ko": "없음"
        },
        "91": {
            "type": "neckline",
            "en": "round neck",
            "ko": "라운드넥"
        },
        "92": {
            "type": "neckline",
            "en": "v neck",
            "ko": "브이넥"
        },
        "93": {
            "type": "neckline",
            "en": "square neck",
            "ko": "스퀘어넥"
        },
        "94": {
            "type": "neckline",
            "en": "turtle neck",
            "ko": "터틀넥"
        },
        "95": {
            "type": "neckline",
            "en": "off shoulder",
            "ko": "오프숄더"
        },
        "96": {
            "type": "neckline",
            "en": "one shoulder",
            "ko": "원숄더"
        },
        "97": {
            "type": "neckline",
            "en": "henley neck",
            "ko": "헨리넥"
        },
        "98": {
            "type": "neckline",
            "en": "boat neck",
            "ko": "보트넥"
        },
        "99": {
            "type": "neckline",
            "en": "halter neck",
            "ko": "홀터넥"
        },
        "100": {
            "type": "neckline",
            "en": "collar neck",
            "ko": "칼라넥"
        },
        "101": {
            "type": "neckline",
            "en": "cowl neck",
            "ko": "카울넥"
        },
        "102": {
            "type": "neckline",
            "en": "hood collar",
            "ko": "후드 칼라"
        },
        "103": {
            "type": "neckline",
            "en": "strapless",
            "ko": "스트랩리스"
        }
    },
    "length_of_tops": {
        "110": {
            "type": "length_of_tops",
            "en": "none",
            "ko": "없음"
        },
        "111": {
            "type": "length_of_tops",
            "en": "crop",
            "ko": "크롭"
        },
        "112": {
            "type": "length_of_tops",
            "en": "medium",
            "ko": "미듐"
        },
        "113": {
            "type": "length_of_tops",
            "en": "long",
            "ko": "롱"
        }
    },
    "length_of_one-piece": {
        "115": {
            "type": "length_of_one-piece",
            "en": "none",
            "ko": "없음"
        },
        "116": {
            "type": "length_of_one-piece",
            "en": "mini",
            "ko": "미니"
        },
        "117": {
            "type": "length_of_one-piece",
            "en": "midi",
            "ko": "미디"
        },
        "118": {
            "type": "length_of_one-piece",
            "en": "long",
            "ko": "롱"
        }
    },
    "length_of_sleeve": {
        "120": {
            "type": "length_of_sleeve",
            "en": "none",
            "ko": "없음"
        },
        "121": {
            "type": "length_of_sleeve",
            "en": "long sleeve",
            "ko": "긴팔"
        },
        "122": {
            "type": "length_of_sleeve",
            "en": "three quarter sleeve",
            "ko": "7부 소매"
        },
        "123": {
            "type": "length_of_sleeve",
            "en": "short sleeve",
            "ko": "반팔"
        },
        "124": {
            "type": "length_of_sleeve",
            "en": "sleeveless",
            "ko": "민소매"
        }
    },
    "kind_of_sleeve": {
        "130": {
            "type": "kind_of_sleeve",
            "en": "none",
            "ko": "없음"
        },
        "131": {
            "type": "kind_of_sleeve",
            "en": "set-in sleeve",
            "ko": "세트인 슬리브"
        },
        "132": {
            "type": "kind_of_sleeve",
            "en": "drop shoulder sleeve",
            "ko": "드롭숄더 슬리브"
        },
        "133": {
            "type": "kind_of_sleeve",
            "en": "raglan sleeve",
            "ko": "래글런 슬리브"
        },
        "134": {
            "type": "kind_of_sleeve",
            "en": "puff sleeve",
            "ko": "퍼프 슬리브"
        },
        "135": {
            "type": "kind_of_sleeve",
            "en": "trumpet sleeve",
            "ko": "와이드 슬리브"
        },
        "136": {
            "type": "kind_of_sleeve",
            "en": "dolman sleeve",
            "ko": "돌먼 슬리브"
        },
        "137": {
            "type": "kind_of_sleeve",
            "en": "flutter sleeve",
            "ko": "날개 슬리브"
        }
    },
    "shape_of_pants": {
        "150": {
            "type": "shape_of_pants",
            "en": "none",
            "ko": "없음"
        },
        "151": {
            "type": "shape_of_pants",
            "en": "skinny",
            "ko": "스키니"
        },
        "152": {
            "type": "shape_of_pants",
            "en": "straight",
            "ko": "스트레이트"
        },
        "153": {
            "type": "shape_of_pants",
            "en": "boot-cut",
            "ko": "부츠컷"
        },
        "154": {
            "type": "shape_of_pants",
            "en": "wide",
            "ko": "와이드"
        },
        "155": {
            "type": "shape_of_pants",
            "en": "baggy",
            "ko": "배기"
        },
        "156": {
            "type": "shape_of_pants",
            "en": "leggings",
            "ko": "레깅스"
        }
    },
    "shape_of_skirts": {
        "160": {
            "type": "shape_of_skirts",
            "en": "none",
            "ko": "없음"
        },
        "161": {
            "type": "shape_of_skirts",
            "en": "H line",
            "ko": "H라인"
        },
        "162": {
            "type": "shape_of_skirts",
            "en": "flare",
            "ko": "플레어"
        },
        "163": {
            "type": "shape_of_skirts",
            "en": "A line",
            "ko": "A라인"
        },
        "164": {
            "type": "shape_of_skirts",
            "en": "pleats",
            "ko": "플리츠"
        },
        "165": {
            "type": "shape_of_skirts",
            "en": "mermaid",
            "ko": "머메이드"
        },
        "166": {
            "type": "shape_of_skirts",
            "en": "wrap",
            "ko": "랩"
        },
        "167": {
            "type": "shape_of_skirts",
            "en": "tiered",
            "ko": "캉캉"
        }
    },
    "shape_of_dresses": {
        "170": {
            "type": "shape_of_dresses",
            "en": "none",
            "ko": "없음"
        },
        "171": {
            "type": "shape_of_dresses",
            "en": "H line",
            "ko": "H라인"
        },
        "172": {
            "type": "shape_of_dresses",
            "en": "A line",
            "ko": "A라인"
        },
        "173": {
            "type": "shape_of_dresses",
            "en": "wrap",
            "ko": "랩"
        }
    },
    "color": {
        "181": {
            "type": "color",
            "en": "black",
            "ko": "블랙"
        },
        "182": {
            "type": "color",
            "en": "gray",
            "ko": "그레이"
        },
        "183": {
            "type": "color",
            "en": "silver",
            "ko": "실버"
        },
        "184": {
            "type": "color",
            "en": "white",
            "ko": "화이트"
        },
        "185": {
            "type": "color",
            "en": "brown",
            "ko": "브라운"
        },
        "186": {
            "type": "color",
            "en": "olive",
            "ko": "카키"
        },
        "187": {
            "type": "color",
            "en": "navy",
            "ko": "네이비"
        },
        "188": {
            "type": "color",
            "en": "orange",
            "ko": "오렌지"
        },
        "189": {
            "type": "color",
            "en": "yellow",
            "ko": "옐로우"
        },
        "190": {
            "type": "color",
            "en": "gold",
            "ko": "골드"
        },
        "191": {
            "type": "color",
            "en": "green",
            "ko": "그린"
        },
        "192": {
            "type": "color",
            "en": "skyblue",
            "ko": "스카이블루"
        },
        "193": {
            "type": "color",
            "en": "blue",
            "ko": "블루"
        },
        "194": {
            "type": "color",
            "en": "purple",
            "ko": "퍼플"
        },
        "195": {
            "type": "color",
            "en": "pink",
            "ko": "핑크"
        },
        "196": {
            "type": "color",
            "en": "red",
            "ko": "레드"
        },
        "197": {
            "type": "color",
            "en": "beige",
            "ko": "베이지"
        }
    }
};

var FLEX_MODE = {
    "filter": 1,
    "naive": 4
};

var DL_PROXY = '';

var current_categories = undefined;
var current_gender = undefined;
var current_subcategory = undefined;
var current_region = undefined;
var current_attributes = undefined;
var current_flexmode = undefined;
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
                        var f = (parseInt(cate_code) & SKIRTS !== 0 || parseInt(cate_code) & ONEPIECE !== 0);

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

    var detection_cb = function (results, topResult) {
        if ((typeof results) === "string") {
            alert(results);
            location.href = "/";
        }
        hide_loader_modal();

        if (window.localStorage.getItem('api_version') === "v1" && results.length > 0) {
            var image_hash = results[0].id.split('_')[0];
            api_analyze(analyze_cb, "https://img.pxl.ai/"+image_hash, results);
        }
    };

    var analyze_cb = function (results, detection_results) {
        if (results !== null) {
            for (var idx in results) {
                if (results.hasOwnProperty(idx)) {
                    for (var _idx in detection_results) {
                        if (detection_results.hasOwnProperty(_idx)) {
                            if (results[idx].id === detection_results[_idx].id) {
                                detection_results[_idx].attributes = results[idx].attributes;
                                break
                            }
                        }
                    }
                }
            }
        }

        var result = detection_results[0];

        // init region
        init_current_values(result);

        show_results();

        show_region_names_and_scores(detection_results);

        show_current_region_name_and_score(undefined, result);

        window.setTimeout(function () {show_classification_results(result);}, 50);

        init_cropper(image_url, result);
    };

    show_loader_modal();

    if (type === "url")
        api_detection_url(detection_cb, image_url);
    else if (type === "file")
        api_detection_file(detection_cb, image_url, image_extension);

    $('input[name="search_mode"]').on('click', function (e) {
        current_flexmode = FLEX_MODE[document.querySelector('input[name="search_mode"]:checked').value];
        search(current_region, current_gender, current_categories, current_subcategory, current_attributes,
            current_flexmode);
    });
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
        if (gender_code === "unisex" || gender_code === "Unisex")
            return F_BIT | M_BIT;
        return 0;
    }
    if (typeof(gender_code) === "number") {
        if ((gender_code&GENDER_MASK) === F_BIT)
            return "Female";
        if ((gender_code&GENDER_MASK) === M_BIT)
            return "Male";
        return "Unisex";
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
                CATEGORY[category_id.toString()].str.toUpperCase() + " <b>" + parseInt(100*region.score) + "%</b></a></div>";

                // CATEGORY[category_id.toString()].str + " #" + v + "</a>" + "<div id='" + progress_id + "'></div>" +
                // "</div>";
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
    var gender_labels = [get_gender(region.gender.code)];
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

    if (region.attributes === undefined || region.attributes.length <= 0) {
        document.getElementById("attribute_list").style.display = "none";
    } else if (region.attributes.length > 0) {
        document.getElementById("attribute_list").style.display = "block";
        var attribute_labels = [];
        for (var i in region.attributes) {
            if (region.attributes.hasOwnProperty(i)) {
                var attribute = region.attributes[i];
                if (!attribute_labels.hasOwnProperty(attribute.type)) {
                    attribute_labels[attribute.type] = [];
                }
                attribute_labels[attribute.type].push(attribute.label);
            }
        }
        for (var i in attribute_labels) {
            if (attribute_labels.hasOwnProperty(i) && attribute_labels[i].length === 0) {
                attribute_labels[i].push('UNKNOWN')
            }
        }
        show_info(document.getElementById("attribute_list"), attribute_labels);
    }
}

function show_info(ctx, labels) {
    if (ctx === document.getElementById("attribute_list")) {
        var contents = '<div class="divider"></div><div class="label">ATTRIBUTES</div>';
        for (var attr_a in labels) {
            if (labels.hasOwnProperty(attr_a)) {
                for (var i=0; i<labels[attr_a].length; i++) {
                    labels[attr_a][i] = labels[attr_a][i].toUpperCase();
                }
                contents += "<div class='item'><div class='value'>#" + labels[attr_a]
                    + "</div><div class='type'>" + attr_a.toUpperCase() + "</div></div>";
            }
        }
        ctx.innerHTML = contents;
    }
    else {
        if (typeof(labels) === 'string') {
            labels = labels.toUpperCase();
        } else {
            if (typeof(labels[0]) === 'string')
                labels = labels[0].toUpperCase();
            else
                labels = 'UNKNOWN';
        }
        ctx.innerHTML = '#' + labels + '';
    }
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

    show_details(current_region, current_gender, current_categories, current_subcategory);

    search(current_region, current_gender, current_categories, current_subcategory, current_attributes,
        current_flexmode);
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
    current_categories = [region.category.code];
    current_subcategory = undefined;
    current_attributes = [];
    current_flexmode = FLEX_MODE['filter'];
}

function show_details(selected_region, selected_gender, selected_category, selected_sub_category, selected_attributes) {
    document.getElementById("details").style.display = "inline-block";
    show_gender(selected_gender);
    show_category(selected_region.category.code, selected_gender, selected_category);
    show_sub_category(selected_region.category.code, selected_category, selected_sub_category);
    // show_attributes(selected_region.category.code, selected_category, selected_region.attributes, selected_attributes)
}

function click_gender(gender) {
    current_gender = gender;

    show_details(current_region, current_gender, current_categories, current_subcategory);

    search(current_region, current_gender, current_categories, current_subcategory, current_attributes,
        current_flexmode);
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
    var pos = current_categories.indexOf(category);
    if (pos >= 0 && current_categories.length > 1) {
        current_categories.splice(pos, 1);
    }
    else if (pos < 0) {
        current_categories.push(category);
    }

    current_subcategory = undefined;

    show_details(current_region, current_gender, current_categories, current_subcategory);
    search(current_region, current_gender, current_categories, current_subcategory, current_attributes,
        current_flexmode);
}

function show_category(region_category, selected_gender, selected_category) {
    var contents = "<div class='category-list'>";

    for (var id in CATEGORY) {
        if (CATEGORY[id].type === CATEGORY[region_category.toString()].type) {
            var n_id = parseInt(id);
            var name = CATEGORY[id].str;
            if (selected_category !== undefined && selected_category.indexOf(n_id) < 0) {
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
    if (current_subcategory === sub_category) {
        current_subcategory = undefined;
    }
    else {
        current_subcategory = sub_category;
    }

    show_details(current_region, current_gender, current_categories, current_subcategory);
    search(current_region, current_gender, current_categories, current_subcategory, current_attributes,
        current_flexmode);
}

function show_sub_category(region_category, selected_category, selected_sub_category) {
    var contents = "<div class='category-list'>";
    if (selected_category.length === 1 && selected_category[0] === region_category) {
        var sub_categories = CATEGORY[region_category.toString()]["sub_categories"];
        for (var i in sub_categories) {
            if (sub_categories.hasOwnProperty(i)) {
                var n_id = sub_categories[i].id;
                var name = sub_categories[i].str;
                if (selected_sub_category === n_id) {
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

function click_attribute(attribute) {
    var pos = current_attributes.indexOf(attribute);
    if (pos < 0) {
        current_attributes.push(attribute)
    }
    else {
        current_attributes.splice(pos, 1);
    }

    show_details(current_region, current_gender, current_categories, current_subcategory, current_attributes);
    search(current_region, current_gender, current_categories, current_subcategory, current_attributes,
        current_flexmode);
}

function show_attributes(region_category, selected_category, region_attributes, selected_attributes) {    
    if (selected_category.length === 1 && selected_category[0] === region_category) {
        if (region_attributes !== undefined && region_attributes.length > 0) {
            var contents = '<div class="divider"></div>';
            contents += '<div class="category-list">';

            var attribute_types = [];
            for (var i in region_attributes) {
                if (region_attributes.hasOwnProperty(i)) {
                    if (attribute_types.indexOf(region_attributes[i].type) < 0) {
                        attribute_types.push(region_attributes[i].type)
                    }
                }
            }

            for (var type in ATTRIBUTE) {
                if (ATTRIBUTE.hasOwnProperty(type) && attribute_types.indexOf(type) >= 0) {
                    contents += "<div class='label'>" + type.toUpperCase() + "</div>";
                    for (var attr_value in ATTRIBUTE[type]) {
                        if (ATTRIBUTE[type].hasOwnProperty(attr_value)) {
                            var n_value = parseInt(attr_value);
                            if (selected_attributes !== undefined && selected_attributes.indexOf(n_value) >= 0) {
                                contents += "<a class=\"category select\" href=\'javascript:click_attribute(" + n_value + ")\'>" + ATTRIBUTE[type][attr_value].en + "</a>";
                            }
                            else {
                                contents += "<a class=\"category\" href=\'javascript:click_attribute(" + n_value + ")\'>" + ATTRIBUTE[type][attr_value].en + "</a>";
                            }
                        }
                    }
                }
            }

            contents += "</div>";
            document.getElementById("searchable_attribute_list").innerHTML = contents;
        }
    }
}

function search(region, gender, categories, sub_category, attributes, flex_mode) {
    document.getElementById("results_search").style.display = "block";

    // clear results
    document.getElementById("search_list").innerHTML = "<div class='blank-space'>&nbsp;</div><div class='grid-sizer'></div><div class='gutter-sizer'></div>";

    var $grid = $("#search_list").masonry({
        itemSelector: ".grid-item",
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: '.gutter-sizer'
    });

    function addItemElem(name, price, link, image_url, background_pos, cc) {
        var elem = document.createElement("div");
        elem.className = "grid-item";
        elem.innerHTML = '<img class="thumbnail" src="images/spacer.gif" style="background-image: url(\'https://img.pxl.ai/' + image_url +
            '\'); background-position: ' + background_pos + '" decode="async">' +
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

        if (window.localStorage.getItem('api_version') === "v1" && results.constructor === Array) {
            var result_count = results.length;

            for (var i=0; i<result_count; i++) {
                var r = results[i].region;
                var backgroundPos = Math.floor((r[0] + (r[2] - r[0]) / 2) / 500 * 100) + '% ';
                addItemElem(results[i].name, results[i].price, results[i].product_url, results[i].image_url, backgroundPos,
                    results[i].category_code);
            }
        }

        $grid.imagesLoaded(function() {
            $grid.masonry();
        });
    };

    show_loader_modal();

    var gendered_category = gender;

    for (var i=0; i<categories.length; i++) {
        gendered_category |= categories[i];
    }

    var flex_query = {};

    if (sub_category !== undefined) {
        flex_query["sub_category"] = sub_category;
    }

    if (attributes.length > 0) {
        flex_query["attributes"] = attributes;
    }

    if (Object.keys(flex_query).length === 0) {
        flex_query = undefined;
    }

    api_search(search_cb, region, gendered_category, flex_query, flex_mode, 34);
}

function show_results() {
    document.getElementById('results').style.display = 'inline-block';
}

function show_loader_modal() {
    // document.getElementById("loader_modal").style.display = "table";
}

function hide_loader_modal() {
    document.getElementById("loader_modal").style.display = "none";
}
