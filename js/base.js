/**
 * Created by gloomysw on 2016/07/18.
 */

//遮罩层
var mark=$('<div style="overflow: hidden; position: fixed; top: 0; left: 0; display: block; padding: 0; box-sizing: border-box; margin: 0; bottom: 0; background-color: black; z-index: 100; opacity: 0.5; right: 0;"></div>');

/*
表单
*/
$(document).on("click", "input.checkboxAll", function () {
    if ($(this).is(':checked')) {
        // do something
        $(this).closest("table").find("input[type=checkbox]").prop("checked", true);
    }
    else {
        $(this).closest("table").find("input[type=checkbox]").prop("checked", false);
    }
});