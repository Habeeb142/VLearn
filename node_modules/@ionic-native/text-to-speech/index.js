var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var TextToSpeechOriginal = /** @class */ (function (_super) {
    __extends(TextToSpeechOriginal, _super);
    function TextToSpeechOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextToSpeechOriginal.prototype.speak = function (textOrOptions) { return cordova(this, "speak", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    TextToSpeechOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    TextToSpeechOriginal.pluginName = "Text To Speech";
    TextToSpeechOriginal.plugin = "cordova-plugin-tts";
    TextToSpeechOriginal.pluginRef = "TTS";
    TextToSpeechOriginal.repo = "https://github.com/vilic/cordova-plugin-tts";
    TextToSpeechOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return TextToSpeechOriginal;
}(IonicNativePlugin));
var TextToSpeech = new TextToSpeechOriginal();
export { TextToSpeech };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RleHQtdG8tc3BlZWNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXdDdEMsZ0NBQWlCOzs7O0lBVWpELDRCQUFLLGFBQUMsYUFBa0M7SUFTeEMsMkJBQUk7Ozs7Ozt1QkE1RE47RUF5Q2tDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVFRTT3B0aW9ucyB7XG4gIC8qKiB0ZXh0IHRvIHNwZWFrICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqIGEgc3RyaW5nIGxpa2UgJ2VuLVVTJywgJ3poLUNOJywgZXRjICovXG4gIGxvY2FsZT86IHN0cmluZztcbiAgLyoqIHNwZWVkIHJhdGUsIDAgfiAxICovXG4gIHJhdGU/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgVGV4dCBUbyBTcGVlY2hcbiAqIEBkZXNjcmlwdGlvblxuICogVGV4dCB0byBTcGVlY2ggcGx1Z2luXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBUZXh0VG9TcGVlY2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RleHQtdG8tc3BlZWNoL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0dHM6IFRleHRUb1NwZWVjaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy50dHMuc3BlYWsoJ0hlbGxvIFdvcmxkJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3MnKSlcbiAqICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4gY29uc29sZS5sb2cocmVhc29uKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogVFRTT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RleHQgVG8gU3BlZWNoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdHRzJyxcbiAgcGx1Z2luUmVmOiAnVFRTJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWxpYy9jb3Jkb3ZhLXBsdWdpbi10dHMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRleHRUb1NwZWVjaCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3BlYWtzXG4gICAqIEBwYXJhbSB0ZXh0T3JPcHRpb25zIHtzdHJpbmcgfCBUVFNPcHRpb25zfSBUZXh0IHRvIHNwZWFrIG9yIFRUU09wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHNwZWFraW5nIGZpbmlzaGVzXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHNwZWFrKHRleHRPck9wdGlvbnM6IHN0cmluZyB8IFRUU09wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGFueSBjdXJyZW50IFRUUyBwbGF5YmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==