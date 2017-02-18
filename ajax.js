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

    $('#count').on('click', counter);

    function counter() {
      $.ajax({
        url: 'http://first-ajax-api.herokuapp.com/count',
        method: 'GET'
      }).done(function(responseData){
        $('#step7').append('<br>' + responseData);
        console.log(responseData);

      });
    }

    $('#time').on('click', timer);

    function timer() {
    $.ajax({
        url: 'http://first-ajax-api.herokuapp.com/time',
        method: 'GET',
        data: {timezone: 'Pacific/Honolulu'},
        dataType: 'text'
      }).done(function(responseData){
        $('#step8').append('<br>' + responseData);
        console.log(responseData);

      });
    }
    $('#car').on('click', cars);

    function cars() {
      $.ajax({
        url: 'http://first-ajax-api.herokuapp.com/a_car',
        method: 'GET'
      }).done(function(responseData){
        $('#carlist').append(responseData);
        console.log(responseData);
        console.log($('ul').attr('id'));
      });
    }
});
