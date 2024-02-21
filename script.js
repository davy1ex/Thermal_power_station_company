$(document).ready(function() {
    // Toggle the display of the dropdown content on button click
    $("#filter_btn").click(function(event) {
        event.preventDefault(); // Prevent the default anchor action
        $("#filterDropdown").toggle();
        event.stopPropagation(); // Stop the event from propagating to the document

        console.log("kek")
    });

    // Close the dropdown if the user clicks outside of it
    $(document).click(function(e) {
      if (!e.target.matches('.dropbtn')) {
        $("#filterDropdown").hide();
      }
    });

    // Prevent the dropdown from closing when clicking inside the dropdown
    $("#filterDropdown").click(function(e) {
      e.stopPropagation();
    });
});