

$(document).ready(function() {
  
    $(".filter_btn").click(function(event) {
        event.preventDefault(); 
        $("#filterDropdown").toggle();
        event.stopPropagation(); // Stop the event from propagating to the document
        $(".filter_container").toggle()
        
        
        console.log("kek2")
        console.log($('.content'))
        
    });

    // Close the dropdown if the user clicks outside of it
    $(document).click(function(e) {
      if (!e.target.matches('.dropbtn')) {
        e.preventDefault();
      }
    });

    // Prevent the dropdown from closing when clicking inside the dropdown
    $("#filterDropdown").click(function(e) {
      e.stopPropagation();
    });


    $.getJSON('data.json', function(data) {
      var $table = $('#data-table tbody');
      var $cardsContainer = $('.cards_container');
      var headers = $('thead th').map(function() {
        return $(this).text();
      }).get();
      
      $.each(data, function(index, entry) {
        var $row = $('<tr></tr>');
        var $card = $('<div class="data_card"></div>');
    
        $.each(entry, function(key, value) {
          // Add data to the table
          $row.append($('<td></td>').text(value));
          
          // Add data to the cards
          var header = key
          $card.append('<div class="cell"><div class="cell_header">' + header + '</div><div class="cell_value">' + value + '</div></div>');
        });
    
        // Append the new row to the table
        $table.append($row);
        
        // Append the new card to the cards container
        $cardsContainer.append($card);
      });
    });
})
