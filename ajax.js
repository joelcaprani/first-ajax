$(document).ready(function () {

  // $.ajax({
  //   url: 'http://first-ajax-api.herokuapp.com',
  //   method: 'GET',
  //   // data: _____,
  //   // dataType: _____
  //   });

    $('#first').on('click', function() {

      $.ajax({
        url: 'http://first-ajax-api.herokuapp.com',
        method: 'GET',
        // data: _____,
        // dataType: _____
        });

    });
});
