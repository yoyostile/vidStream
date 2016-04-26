cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.dooble.phonertc/www/phonertc.js",
        "id": "com.dooble.phonertc.PhoneRTC",
        "pluginId": "com.dooble.phonertc",
        "clobbers": [
            "cordova.plugins.phonertc"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.dooble.phonertc": "2.0.1"
}
// BOTTOM OF METADATA
});