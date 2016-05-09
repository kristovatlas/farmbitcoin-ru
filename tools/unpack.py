# coding=utf-8
"""Replace references to array of strings with the original literal strings."""

in_file = "../sample/js-beautified.js"
out_file = "../sample/js-unpacked.js"

sample_text = None
with open(in_file, "r") as sample_file:
    sample_text = sample_file.read()

array_name = "_0x7221"
array_values = ["hakerhelp5@mail.ru", "17gJN422WXBypfsnLuABiaGdWJmhAsDZ6w",
                "hostname", "location", "wallet.exmo.com", "pathname", "/",
                "of3", "of2", "of1", "", "length", "log", "RUB", "click",
                "wallet_btn_v1 wd_mod walletCollapseBtn",
                "getElementsByClassName", "value",
                "form_input form_input_s_37 text_right wsumma", "checked",
                "provider_156", "getElementById", "email", "getElementsByName",
                "btn_v4 text_upper btn_blue exch_btn fw_300", "display",
                "style", "modal overlay el_msg", "none",
                "btn_v1 popup_btn btn_gray_v3 no_text_selection fw_400", "USD",
                "BTC", "address", "tr", "getElementsByTagName", "tbody",
                "wallet_table_v1 wallet_balance_table wallet_shadow_mod  ng-scope",
                "innerHTML", "span", "div",
                "wallet_table_cell_v1 row_mod wallet_t_c_1",
                "wallet_table_cell_v1 row_mod wallet_t_c_2", "apply", "max",
                "payeer.com", "/ru/account/", "adss2", "/en/account/", "val",
                "int", "/ru/account/send/", "button_green_smm2", "stop1",
                "button_block type", "stop2", "tab-choosetypeoftransfer",
                "block", "account_email", "next button_green_sm", "input3",
                "li", "ul", "0", "00.0", "id_transfer_anonim-styler",
                "confirm button_green", "setInterval", "blockchain.info",
                "my-primary-address", "$", "indexOf", "innerText", "balance",
                "balance2", "replace", "send-coins-btn", "home-intro-btn",
                "send-value", "send-to-address", "send btn btn-success pop",
                " BTC", "qiwi.com", "w.qiwi.com", "w.qiwi.ru", "qiwi.ru",
                "phone", "/main.action", "adss1", "account_current_amount",
                "substring", "payment_frm providerPay", "narrow",
                "/settings/options/security.action", "/transfer/email.action",
                "pseudo-checkbox", "Отключено", "liquid dataField",
                "ui-selectmenu-text", "fixedRub dataField", "orangeBtn",
                "/payment/state.action", "content"];

num_substrings_substituted = 0

for i, string in enumerate(array_values):
    old_val = "%s[%d]" % (array_name, i)
    new_val = '"%s"' % string
    sample_text = sample_text.replace(old_val, new_val)
    num_substrings_substituted += 1

with open(out_file, "w") as result_file:
    result_file.write(sample_text)
print "Done after %d subsitutions." % num_substrings_substituted
assert num_substrings_substituted == len(array_values)
