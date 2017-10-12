$(document).ready(function () {
    $('#sendEmail').on('click', function () {
        var emailregex =
            /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        var val = $('#subscribe').val();
        if (new RegExp(emailregex).test(val)) {
            $.ajax({
                type: "POST",
                url: 'https://beta.newmegaclinic.com/email_signups/new?email=' + val,
                success: function () {
                    $('.signup-home-alert').fadeIn(1500);
                    $('.signup-home-alert')
                        .append('<iframe id="emailIframe" style="display:none;" src="https://beta.newmegaclinic.com/email_signups/new?email=' +
                        val +
                        '"></iframe>');
                },
                error: function (xhr, textStatus, errorThrown) {
                    //alert('request failed');
                },
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            });
        } else {
            $('#subscribeError').fadeIn(1000).fadeOut(5000);
        }
    });

    $('#selectContentPopup').on('click',
        function () {
            $('#emailIframe').remove();
        });
});