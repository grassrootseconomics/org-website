$(document).ready(function () {
    debugger;
    $.get('/scrapped-text/reseasrch/article-head.txt', function (data) {
        var lines = data.split("\n")
        alert("file-read ok")
    }, 'text');
});
