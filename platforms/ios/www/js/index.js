var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
        //  （1）画面表示の切り替え
        $('#device-not-ready').hide();
        $('#device-ready').show();

        // （2） ボタンによるカメラの起動
        $('#camera-call').click(function(){
            // （3） カメラの起動と、画像の取り込み手法、結果Callbackの設定
            navigator.camera.getPicture(app.onSuccess, app.onFail, { quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
            });
        });
    },
    // （4） カメラで撮った写真データの表示
    onSuccess : function(imageData){
        var image = $('#image');
        image.attr('src',"data:image/jpeg;base64," + imageData);
    },
    // （5） カメラの起動失敗などの場合
    onFail : function(message) {
        alert('Failed because: ' + message);
    }
};
app.initialize();
