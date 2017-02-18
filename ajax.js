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
  }).always(function(responseData){
    console.log('always method');
  }).done(function(responseData){
    console.log('done method');
  });

    });

//

});
