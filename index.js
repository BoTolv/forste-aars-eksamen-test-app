function openBrowser(url){
var target = '_blank';
var options = "location = yes"
var ref = cordova.InAppBrowser.open(url, target, options);
}
function onDeviceReady() {
         var ref = window.open('http://apache.org', '_blank', 'location=yes');
    }