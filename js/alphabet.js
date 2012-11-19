window.audioContainer = document.getElementById("audioContainer");
window.canvas = document.getElementById('canvas');

window.context = canvas.getContext('2d');
window.context.fillStyle = 'rgb(108, 108, 128)';
window.context.font = 'bold 144px sans-serif';

window.formatText = function(charCode) {
    var text = String.fromCharCode(charCode);

    if ((charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)) {
        text = text.toUpperCase() + text.toLowerCase();
	}

    return text;
};

window.alphaWavs = ( function() {
    var wavs = [];
    var wavsNames = [
        "5/52/En-us-a.ogg",
        "5/58/En-uk-b.ogg",
        "5/5c/En-us-c.ogg",
        "b/b9/En-uk-d.ogg",
        "1/18/En-us-e.ogg",
        "7/71/En-us-f.ogg",
        "8/81/En-uk-g.ogg",
        "0/07/En-uk-h.ogg",
        "d/de/En-us-i.ogg",
        "7/7e/En-us-j.ogg",
        "8/8d/En-us-k.ogg",
        "5/53/En-uk-l.ogg",
        "3/3b/En-uk-m.ogg",
        "e/e7/En-uk-n.ogg",
        "9/99/En-uk-o.ogg",
        "7/79/En-us-p.ogg",
        "6/6b/En-uk-q.ogg",
        "7/75/En-us-r.ogg",
        "5/54/En-us-s.ogg",
        "8/8d/En-us-t.ogg",
        "9/9d/En-us-u.ogg",
        "3/3a/En-us-v.ogg",
        "4/4b/En-us-w.ogg",
        "4/4d/En-us-x.ogg",
        "d/dd/En-us-y.ogg",
        "0/0f/En-us-z.ogg"
    ];

    for(var i = 65; i <= 90; ++i) {
        var text = window.formatText(i);

        wavs[text] = new Audio();
        wavs[text].id = text;
        wavs[text].type = "audio/ogg";
        wavs[text].src = "http://upload.wikimedia.org/wikipedia/commons/" + wavsNames[i-65];

        window.audioContainer.appendChild(wavs[text]);
    }

    return wavs;
} )();

document.body.onload = function() {
    window.onkeypress = onKeyPress;
    window.onkeyup = onKeyUp;
}

var onKeyPress = function (e) {
    var text = window.formatText(e.charCode);
    var audio = document.getElementById(text);

    if (audio) {
        audio.play();
    }

    window.context.clearRect(0, 0, canvas.width, canvas.height);
    window.context.fillText(text, 8, 144+8);

    window.onkeypress = null; // keep from repeating
}

var onKeyUp = function (e) {
    window.onkeypress = onKeyPress;
}