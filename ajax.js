$(document).ready(function () {

    $('#first').on('click', function() {

      $.ajax({
        url: 'http://first-ajax-api.herokuapp.com',
        method: 'GET'

        });


    });
    $('#second').on('click', function(){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET'
  }).fail(function (responseData) {
      console.log(responseData);
      $('#step3456').append('<br>' + responseData.responseText);
  });

    });

//     $.ajax({
//       url: 'http://first-ajax-api.herokuapp.com/pong',
//       method: 'GET',
//   // data: ,
//   // dataType:
//   }).fail(function () {
// });

});
