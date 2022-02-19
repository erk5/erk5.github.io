// CSVファイルを読み込み
function getCSV(){
    var req = new XMLHttpRequest();
    req.open("get", "study_book.csv", true);
    req.send(null); 
	
    req.onload = function(){
	convertCSVtoArray(req.responseText);
    }
}
 
// 読み込んだCSVデータでHTML生成
function convertCSVtoArray(str)　{
    var result = [];
    var tmp = str.split("\n");

    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }

    $.each(result, function(index, value){
        const target = $('#study_book');
        const div = $('<div class="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">');
        const href = $('<a href="' + value[2] + '" target="_blank">');
        href.append($('<img src="' + value[1] + '" class="img-responsive">'));
        href.append($('<h3 class="fh5co-work-title">' + value[0] + '</h3>'));
        href.append($('<p>学習日：' + value[3] + '</p>'));
        div.append(href);
        target.append(div);
    });
}
