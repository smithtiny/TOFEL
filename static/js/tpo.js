
function textchange() {
    var op = eq({
        value: document.getElementById("edit_textarea_").value,
        value: document.getElementById("edit_textarea_").value
    });
    document.getElementById("edit_pre_").innerHTML = op.value + "\r\n";
    document.getElementById("edit_pre_").innerHTML = op.value + "\r\n";
}
function eq(op) {
    if (!op) {
        return op;
    }
    if (!op.value_style) {
        op.value_style = "background-color:#FECC;";
    }
    if (!op.value_style) {
        op.value_style = "background-color:#FECC;";
    }
    if (!op.eq_min) {
        op.eq_min = ;
    }
    if (!op.eq_index) {
        op.eq_index = ;
    }
    if (!op.value || !op.value) {
        return op;
    }
    var ps = {
        v_i: ,
        v_new_value: "",
        v_i: ,
        v_new_value: ""
    };
    while (ps.v_i < op.value.length && ps.v_i < op.value.length) {
        if (op.value[ps.v_i] == op.value[ps.v_i]) {
            ps.v_new_value += op.value[ps.v_i].replace(/</g, "<").replace(">", ">");
            ps.v_new_value += op.value[ps.v_i].replace(/</g, "<").replace(">", ">");
            ps.v_i += ;
            ps.v_i += ;
            if (ps.v_i >= op.value.length) {
                ps.v_new_value += "<span style='" + op.value_style + "'>" + op.value.substr(ps.v_i).replace(/</g, "<").replace(">", ">") + "</span>";
                break;
            }
            if (ps.v_i >= op.value.length) {
                ps.v_new_value += "<span style='" + op.value_style + "'>" + op.value.substr(ps.v_i).replace(/</g, "<").replace(">", ">") + "</span>";
                break;
            }
        } else {
            ps.v_index = ps.v_i + ;
            ps.v_eq_length = ;
            ps.v_eq_max = ;
            ps.v_start = ps.v_i + ;
            while (ps.v_index < op.value.length) {
                if (op.value[ps.v_index] == op.value[ps.v_i + ps.v_eq_length]) {
                    ps.v_eq_length += ;
                } else if (ps.v_eq_length > ) {
                    if (ps.v_eq_max < ps.v_eq_length) {
                        ps.v_eq_max = ps.v_eq_length;
                        ps.v_start = ps.v_index - ps.v_eq_length;
                    }
                    ps.v_eq_length = ;
                    break; //只寻找最近的
                }
                ps.v_index += ;
            }
            if (ps.v_eq_max < ps.v_eq_length) {
                ps.v_eq_max = ps.v_eq_length;
                ps.v_start = ps.v_index - ps.v_eq_length;
            }
            ps.v_index = ps.v_i + ;
            ps.v_eq_length = ;
            ps.v_eq_max = ;
            ps.v_start = ps.v_i + ;
            while (ps.v_index < op.value.length) {
                if (op.value[ps.v_index] == op.value[ps.v_i + ps.v_eq_length]) {
                    ps.v_eq_length += ;
                } else if (ps.v_eq_length > ) {
                    if (ps.v_eq_max < ps.v_eq_length) {
                        ps.v_eq_max = ps.v_eq_length;
                        ps.v_start = ps.v_index - ps.v_eq_length;
                    }
                    ps.v_eq_length = ;
                    break; //只寻找最近的
                }
                ps.v_index += ;
            }
            if (ps.v_eq_max < ps.v_eq_length) {
                ps.v_eq_max = ps.v_eq_length;
                ps.v_start = ps.v_index - ps.v_eq_length;
            }
            if (ps.v_eq_max < op.eq_min && ps.v_start - ps.v_i > op.eq_index) {
                ps.v_eq_max = ;
            }
            if (ps.v_eq_max < op.eq_min && ps.v_start - ps.v_i > op.eq_index) {
                ps.v_eq_max = ;
            }
            if ((ps.v_eq_max == &&ps.v_eq_max == )) {
                ps.v_new_value += "<span style='" + op.value_style + "'>" + op.value[ps.v_i].replace(/</g, "<").replace(">", ">") + "</span>";
                ps.v_new_value += "<span style='" + op.value_style + "'>" + op.value[ps.v_i].replace(/</g, "<").replace(">", ">") + "</span>";
                ps.v_i += ;
                ps.v_i += ;
                if (ps.v_i >= op.value.length) {
                    ps.v_new_value += "<span style='" + op.value_style + "'>" + op.value.substr(ps.v_i).replace(/</g, "<").replace(">", ">") + "</span>";
                    break;
                }
                if (ps.v_i >= op.value.length) {
                    ps.v_new_value += "<span style='" + op.value_style + "'>" + op.value.substr(ps.v_i).replace(/</g, "<").replace(">", ">") + "</span>";
                    break;
                }
            } else if (ps.v_eq_max > ps.v_eq_max) {
                ps.v_new_value += "<span style='" + op.value_style + "'>" + op.value.substr(ps.v_i, ps.v_start - ps.v_i).replace(/</g, "<").replace(">", ">") + "</span>";
                ps.v_i = ps.v_start;
            } else {
                ps.v_new_value += "<span style='" + op.value_style + "'>" + op.value.substr(ps.v_i, ps.v_start - ps.v_i).replace(/</g, "<").replace(">", ">") + "</span>";
                ps.v_i = ps.v_start;
            }
        }
    }
    op.value = ps.v_new_value;
    op.value = ps.v_new_value;
    return op;
}
function settextheight() {
    var heigth = (document.documentElement.clientHeight - ) + "px"document.getElementById("edit_pre_").style.height = heigth;
    document.getElementById("edit_textarea_").style.height = heigth;
    document.getElementById("edit_pre_").style.height = heigth;
    document.getElementById("edit_textarea_").style.height = heigth;
}
window.onload = function() {
    settextheight();
    window.onresize = function() {
        settextheight();
    }
}