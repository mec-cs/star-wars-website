$(document).ready(function() {
    $('ul li a').click(function() {
      var id = $(this).attr('id');
      $('#content').hide().fadeIn('slow').load(id + '.html');
    });
});

$(document).ready(function() {
    $('#contact-form').submit(function(event) {
      event.preventDefault();
  
      var name = $('#name').val();
      var password = $('#password').val();

      $('#respond').text('Your name is: ' + name + ', and password: ' + password);
      $('#respond-add').text('Please hide it :)');
    });
  });