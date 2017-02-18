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
        method: 'GET'

        });


    });
    $('#second').on('click', function(){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET'
  }).done(function (responseData) {
      console.log(responseData);
      $('#step3456').append(responseData);
  });

    });
});
