//@prepros-prepend names.js
//@prepros-prepend companies.js
//@prepros-prepend job-titles.js

function newFire() {
  var firstName = firstNames[Math.floor(Math.random()*firstNames.length)];
  var lastName = lastNames[Math.floor(Math.random()*lastNames.length)];
  var jobTitle = jobTitles[Math.floor(Math.random()*jobTitles.length)];
  var company = companies[Math.floor(Math.random()*companies.length)];
  var thousands = Math.floor(Math.random()*360)+100;
  var salary = '$'+thousands+',000';
  
  var msg = firstName+' '+lastName+' ('+jobTitle+' at '+company+') was just fired. Salary: '+salary;
  
  var article = '<article class="fired">'+msg+'</article">';
  $('main').append(article);
}

$('#FireSomeone').click(function() {
  newFire();
});