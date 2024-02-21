$(document).ready(function() {
    $('#data-table tbody').on('contextmenu', 'tr', function(e) {
        e.preventDefault();
        var top = e.pageY;
        var left = e.pageX;
        $("#contextMenu").css({
            display: "block",
            top: top,
            left: left
        });
        return false; // Prevent the default context menu
    });

    // Hide context menu
    $(document).click(function() {
        $("#contextMenu").hide();
    });

})