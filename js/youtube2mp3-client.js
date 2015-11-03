var s = {
    1: 'gpkio',
    2: 'hpbnj',
    3: 'macsn',
    4: 'pikku',
    5: 'fgkzc',
    6: 'hmqbu',
    7: 'kyhxj',
    8: 'nwwxj',
    9: 'sbist',
    10: 'ditrj',
    11: 'qypbr',
    12: 'wiyqr',
    13: 'xxvcy',
    14: 'afyzk',
    15: 'kjzmv',
    16: 'txrys',
    17: 'kzrzi',
    18: 'rmira',
    19: 'umbbo',
    20: 'aigkk',
    21: 'qgxhg',
    22: 'twrri',
    23: 'fkaph'
};

$(document).on('click', '.yp', function() {
    t = $(this).text();
    if ($(this).attr('data-href') == undefined) {
        v = $(this).attr('href');
    } else {
        v = $(this).attr('data-href');
    }
    if (!v || !VideoSyntax(v)) {
        Error();
        return false;
    }
    if (p) {
        window.open('https://www.youtube2mp3.cc/p.php?r=1');
    }
    $.ajax({
        url: 'https://d.yt-downloader.org/check.php',
        dataType: 'jsonp',
        data: {
            v: vid,
            f: 'mp3'
        },
        success: function(Details) {
            var Data = {};
            $.each(Details, function(Name, Value) {
                Data[Name] = (Name == 'hash') ? Value : parseInt(Value);
            });
            if (0 < Data.error) {
                Error();
                return false;
            }
            if (0 < Data.ce && 0 < Data.sid) {
                document.location.href = 'http://' + s[Data.sid] + '.yt-downloader.org/download.php?id=' + Data.hash;
            } else {
                document.location.href = 'http://www.youtube2mp3.cc/api/#h|' + vid + '|' + Data.hash + '|' + t;
            }
        }
    });
    return false;
});