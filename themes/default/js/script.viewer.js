$(function(){"use strict";function e(e){/modal|inline|none/.test(e)&&o.find("button[data-enable]").prop("disabled",!0).filter('[data-enable*="'+e+'"]').prop("disabled",!1)}var i=window.console||{log:function(){}},n=$(".docs-pictures"),t=$(".docs-toggles"),o=$(".docs-buttons"),a=function(e){i.log(e.type)},d={url:"data-original",build:a,built:a,show:a,shown:a,hide:a,hidden:a};n.on({"build.viewer":a,"built.viewer":a,"show.viewer":a,"shown.viewer":a,"hide.viewer":a,"hidden.viewer":a}).viewer(d),e(d.inline?"inline":"modal"),t.on("change","input",function(){var i=$(this),t=i.attr("name");d[t]="inline"===t?i.data("value"):i.prop("checked"),n.viewer("destroy").viewer(d),e(d.inline?"inline":"modal")}),o.on("click","button",function(){var i=$(this).data(),t=i.arguments||[];if(i.method)switch(i.target?n.viewer(i.method,$(i.target).val()):n.viewer(i.method,t[0],t[1]),i.method){case"scaleX":case"scaleY":t[0]=-t[0];break;case"destroy":e("none")}})});