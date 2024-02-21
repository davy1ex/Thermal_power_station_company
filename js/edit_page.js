$(document).ready(function() {
     $('.edit_cell_header').filter(function() {
        
        var text = $(this).text().trim();

        // Check if the text matches any of the given strings
        return text === "Оборудование" || text === "Оборудование, выв в рем." || text === "Предприятие";
        }).each(function() {
            // Get the parent .cell of the matched .cell_header
            var $parentCell = $(this).closest('.edit_cell');

            // Apply the CSS styles to the .cell_value within the found .cell
            $parentCell.find('.edit_cell_value').css({
                'overflow': 'hidden',
                'text-overflow': 'ellipsis',
                'white-space': 'nowrap'
            });
    })


    $(".edit_cell_value").click(function(evt) {
        if ($(this).css("overflow") == "hidden") {
            console.log("kek")
            var top = evt.pageY;
            var left = evt.pageX;
            
            $("#tooltip").css({
                display: "block",
                top: top,
                left: left
            });

            evt.preventDefault();
            $("#tooltip").text($(this)[0]['textContent'])
            console.log($(this)[0])
            $("#tooltip").show()
        };
    });

    $("#tooltip").click(function() {
        $(this).hide();
    });

})
