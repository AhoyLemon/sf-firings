/* jshint -W117 */

//@prepros-prepend vendor/moment.js

//@prepros-prepend names.js
//@prepros-prepend companies.js
//@prepros-prepend job-titles.js



function newFire() {
  var firstName = firstNames[Math.floor(Math.random()*firstNames.length)];
  var lastName = lastNames[Math.floor(Math.random()*lastNames.length)];
  var fullName = firstName+' '+lastName;
  var jobTitle = jobTitles[Math.floor(Math.random()*jobTitles.length)];
  var comp = companies[Math.floor(Math.random()*companies.length)];
  var thousands = Math.floor(Math.random()*360)+100;
  
  var name = '<span class="name">'+fullName+'</span>';
  var job = '<span class="job">'+jobTitle+'</span>';
  var company = '<span class="company">'+comp+'</span>';
  var salary = '<span class="salary">$'+thousands+',000</span>';
  var msg;
  var r = Math.floor(Math.random()*5)+1;
  if (r == 1) {
    msg = name+' ('+job+' at '+company+') was just fired. Salary: '+salary;
  } else if (r == 2) {
    msg = company+' just lost its '+job+'. '+name+' is no longer drawing a '+salary+' salary.';
  } else if (r == 3) {
    msg = 'Another round of layoffs at '+company+'! '+job+' '+name+' was first to go.';
  } else if (r == 4) {
    msg = 'Insiders recognized '+name+'&apos;s voice shouting &quot;Fuck your code of conduct!&quot; '+company+' cannot speak to the matter directly, but they are looking for a new '+job+'.';
  } else if (r == 5) {
    msg = company+' is in need of a new '+job+'. Posting says "Must crush it, every day." Pay starts at '+salary;
  }
  
  var article = '<article class="fired"><p>'+msg+'</p><time>'+moment().format('MMMM Do YYYY, h:mm:ss a')+'</time></article">';
  $('main').prepend(article);
}

$('#FireSomeone').click(function() {
  newFire();
});