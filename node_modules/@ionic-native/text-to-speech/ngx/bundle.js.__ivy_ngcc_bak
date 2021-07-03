'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var TextToSpeech = /** @class */ (function (_super) {
    tslib.__extends(TextToSpeech, _super);
    function TextToSpeech() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextToSpeech.prototype.speak = function (textOrOptions) { return core.cordova(this, "speak", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    TextToSpeech.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    TextToSpeech.pluginName = "Text To Speech";
    TextToSpeech.plugin = "cordova-plugin-tts";
    TextToSpeech.pluginRef = "TTS";
    TextToSpeech.repo = "https://github.com/vilic/cordova-plugin-tts";
    TextToSpeech.platforms = ["Android", "iOS", "Windows Phone 8"];
    TextToSpeech.decorators = [
        { type: core$1.Injectable }
    ];
    return TextToSpeech;
}(core.IonicNativePlugin));

exports.TextToSpeech = TextToSpeech;
