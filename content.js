var div = document.createElement( 'div' );
document.body.appendChild( div );
//set attributes for div
div.id = 'qrcode';
div.style.position = 'absolute';
div.style.top = '0';
div.style.right = '0';
div.style.width = '200px';
div.style.height = '200px';
div.style.zIndex = '2999';

var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "Map QR Code",
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("URL CHANGED: " + request.data.url);
    qrcode.clear();
    qrcode.makeCode(request.data.url);
});

