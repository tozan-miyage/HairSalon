$(function () {

    $('a[href^="#"]').click(function () {
        // headerの高さを指定
        let headerHeight = 80;
        // animateの速さを指定
        let speed = 1000;
        // クリックされた要素のhref属性を取得
        let href = $(this).attr("href");
        // href属性が#かつ空白であれば、'html',そうでなければ、変数hrefを格納
        let target = $(href == "#" || href == "" ? 'html' : href);
        // ヘッダーの高さを引いたtargetの座標を取得
        let position = target.offset().top - headerHeight;

        // html,bodyをアニメーション
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");

        // ハンバーガーメニューを閉じる
        $(".collapse").collapse('hide');
        return false;
    });



});