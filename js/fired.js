/* jshint -W117 */

//@prepros-prepend vendor/moment.js

//@prepros-prepend names.js
//@prepros-prepend companies.js
//@prepros-prepend job-titles.js

var maxTime = 120;


function newFire(ago) {
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
  var tstamp;
  if (ago) {
    tstamp = '<time>'+moment().subtract(ago, 'seconds').format('MMMM Do YYYY, h:mm:ss a')+'</time>';
  } else {
    tstamp = '<time>'+moment().format('MMMM Do YYYY, h:mm:ss a')+'</time>';
  }
  var msg;
  var r = Math.floor(Math.random()*5)+1;
  if (r == 1) {
    msg = name+' ('+job+' at '+company+') was just fired. Salary: '+salary;
  } else if (r == 2) {
    msg = company+' just lost its '+job+'. '+name+' is no longer drawing a '+salary+' salary.';
  } else if (r == 3) {
    msg = 'Another round of layoffs at '+company+'! '+job+' '+name+' was first to go.';
  } else if (r == 4) {
    msg = 'Insiders recognized '+name+'&apos;s voice shouting &ldquo;Fuck your code of conduct!&rdquo; '+company+' cannot speak to the matter directly, but they are looking for a new '+job+'.';
  } else if (r == 5) {
    msg = company+' is in need of a new '+job+'. Posting says "Must crush it, every day." Pay starts at '+salary;
  }
  
  var article = '<article class="fired"><p>'+msg+'</p>'+tstamp+'</article">';
  if (ago) {
    $('main').append(article);
    $('main article').show();
  } else {
    $('main').prepend(article);
    $('main article:first-child').slideDown(350);
  }
  
}

function recentFirings() {
  var secondCount = 0;
  for (i = 0; i < 8; i++) {
    var a = Math.floor(Math.random()*maxTime)+1;
    secondCount = secondCount + a;
    newFire(secondCount);
  }
}

$('#FireSomeone').click(function() {
  newFire();
});

var odds = 1;

setInterval(function(){ 
  var match = Math.floor(Math.random()*maxTime);
  if (odds >= match) {
    newFire();
    odds = 1;
    console.log('hit!');
  } else {
    odds++;
    //console.log(odds +'>='+match+': ELSE');
    console.log('tick');
  }
}, 850);

$(document).ready(function() {
  recentFirings();
});

$(window).scroll(function() {
  console.log($(window).scrollTop());
   if($(window).scrollTop()  > 40) {
     $('footer').addClass('fixed');
   } else {
     $('footer').removeClass('fixed');
   }
});