/*document.getElementById('xxx').onclick= function () {
 $('#vvv').load('/ajax-html')
 };*/

/*document.getElementById('xxx2').onclick= function () {
 $.ajax({
 url: '/ajax-html' // http://localhost:3000/ajax-html
 }).then(function (resp) {
 document.getElementById('vvv').innerHTML = resp + Date.now();
 });
 };*/

document.getElementById('xxx2').onclick = function () {
    $.ajax({
        url: '/ajax-html' // http://localhost:3000/ajax-html
    }).then(function (resp) {

        var arr1 = Object.keys(resp);
        var arr2 = arr1.map(function (key) {
            return key + '=' + resp[key];
        });
        var str = arr2.join('<br/>');
        document.getElementById('vvv').innerHTML = str;
    });
};