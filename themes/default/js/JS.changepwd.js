var changepwd_lng = new Array(); changepwd_lng['inprocess_vi-VN'] = 'Vui lòng chờ..'; changepwd_lng['inprocess_en-US'] = 'Please waiting..'; changepwd_lng['success_vi-VN'] = 'Mật khẩu đã được đổi thành công.'; changepwd_lng['success_en-US'] = 'Password has been changed successfully.'; changepwd_lng['error_pwd_invalid_vi-VN'] = 'Mật khẩu cũ không đúng.'; changepwd_lng['error_pwd_invalid_en-US'] = 'Old password is incorrect.'; changepwd_lng['error_pwd_match_vi-VN'] = 'Mật khẩu mới không được trùng với mật khẩu cũ.'; changepwd_lng['error_pwd_match_en-US'] = 'New password must not match with old password.'; changepwd_lng['error_missing_vi-VN'] = 'Vui lòng nhập thông tin đầy đủ.'; changepwd_lng['error_missing_en-US'] = 'Please fill in the form.'; function lockButton() { jQuery('#change').addClass('disabled'); jQuery('#change').attr('disabled','disabled'); } function enableButton() { jQuery('#change').removeClass('disabled'); jQuery('#change').removeAttr('disabled'); } document.frmChangePwd.old_pwd.focus(); jQuery(function() { var loader = jQuery('<div class="loader">' + changepwd_lng['inprocess_' + lang] + '</div>').css({position: 'fixed', top: '4em', right: '0.9em'}).appendTo('body').hide(); jQuery(document).ajaxStart(function() { loader.fadeIn(100).show(1); lockButton(); jQuery('div#showdata').hide(); }).ajaxStop(function() { loader.animate({'opacity':1.0},500).fadeOut(100).hide(1); enableButton(); }).ajaxError(function(a, b, e) { throw e; }); var container = jQuery('div#showdata'); var v = jQuery('#frmChangePwd').validate({ debug: false, errorContainer: container, errorLabelContainer: jQuery('ol', container), meta: 'validate', submitHandler: function(form) { jQuery(form).ajaxSubmit({ resetForm: false, dataType: 'json', success: function(data,status) { if(data.code == 'success' && status == 'success') { v.resetForm(); alert(changepwd_lng['success_' + lang]); } else if(data.code == 'oldPwdNotValid') { alert(changepwd_lng['error_pwd_invalid_' + lang]); jQuery('#old_pwd').focus(); } else if(data.code == 'pwdMatch') { alert(changepwd_lng['error_pwd_match_' + lang]); jQuery('#password').focus(); } else if(data.code == 'missingData') { alert(changepwd_lng['error_missing_' + lang]); jQuery('#name').focus(); } return false; } }); } }); });