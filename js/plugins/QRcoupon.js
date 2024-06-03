/*:
 * @target MZ
 *
 * @command test
 * @text テスト
 * @desc テストだよ。
 *
 * @arg hogehoge
 * @text ほげほげ
 * @desc ほげほげ
 * @type string
 * @default 
 */

(() => {
    "use strict";

    const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];

    PluginManager.registerCommand(pluginName, "test", args => {
        console.log(args);
        console.log(args.hogehoge);
        // getItemメソッドでlocalStorageからデータを取得
        let n = localStorage.getItem('count');

        //データの値を判定
        if (n === null) {
            //データが何もない場合「1」を代入
            n = 1;
        } else {
            //データがある場合「1」をプラス
            n++;
        }

        //setItemメソッドでlocalStorageにデータを保存
        localStorage.setItem('count', n);

        //コンソールで値を表示
        console.log(n);
    });

})();