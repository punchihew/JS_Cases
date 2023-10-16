var btnSave = $("#savecustomer");
var btnRemove = $("#deletecustomer");
var btnGetAll = $("#getcustomer");
var btnUpdate = $("#updatecustomer");

getAll();


$("#customerIdText, #customerNameText, #customerAddressText #customerSalaryText").keydown(function (e){
    if(e.key == "Tab"){
        e.preventDefault();
    }
});


$("#customerIdText").keyup(function (e){
    if (regexId.test($("customerIdText").val())){
        $("#customerIdText").css("border-color",  "transparent");
    }else{
        $("#customerIdText").css("border-color",  "red");
    }
});

$("#customerIdText").keydown(function (e){
    if(e.keyCode == 13 && regexId.test($("#customerIdText").val())) {
        $("#customerNameText").focus();
    }
});

$("#customerNameText").keyup(function (e){
    if (regexName.test($("customerNameText").val())){
        $("#customerNameText").css("border-color",  "transparent");
    }else{
        $("#customerNameText").css("border-color",  "red");
    }
});

$("#customerNameText").keydown(function (e){
    if(e.keyCode == 13 && regexName.test($("#customerNameText").val())){
        $("#customerTelText").focus();
    }
});

