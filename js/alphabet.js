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

    for(var i = 65; i <= 90; ++i) {
        var text = window.formatText(i);

        wavs[text] = new Audio();
        wavs[text].id = text;
        wavs[text].type = "audio/wav";
        wavs[text].src = './wav/' + text + '.wav';

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