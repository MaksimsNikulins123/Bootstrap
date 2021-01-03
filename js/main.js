$(document).ready(function () {
    $('.button[data-f="wd"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.button[data-f]').attr('val','off')
            $(this).attr('val', 'on');
            $('.filter > div').hide(300);
            $('.filter > div[data-f="wd"]').show(300);
        }
    });
    $('.button[data-f="ud"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.button[data-f]').attr('val','off')
            $(this).attr('val', 'on');
            $('.filter > div').hide(300);
            $('.filter > div[data-f="ud"]').show(300);
        }
    });
    $('.button[data-f="moc"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.button[data-f]').attr('val','off')
            $(this).attr('val', 'on');
            $('.filter > div').hide(300);
            $('.filter > div[data-f="moc"]').show(300);
        }
    });
    $('.button[data-f="all"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.button[data-f]').attr('val','off')
            $(this).attr('val', 'on');
            $('.filter > div').show(300);
        }
    });
});