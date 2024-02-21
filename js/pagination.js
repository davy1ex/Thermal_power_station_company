$(document).ready(function() {
    var maxNumber = 63; 
    var select = $('.pagination_select select'); 
  
    for (var i = 1; i <= maxNumber; i++) {
      select.append($('<option></option>').val(i).html(i));
    }
  });
  