/* jshint -W117 */

//@prepros-prepend vendor/moment.js

//@prepros-prepend names.js
//@prepros-prepend companies.js
//@prepros-prepend job-titles.js
//@prepros-prepend job-postings.js

var maxTime = 120;


function newFire(ago) {
  var firstName = firstNames[Math.floor(Math.random()*firstNames.length)];
  var lastName = lastNames[Math.floor(Math.random()*lastNames.length)];
  var fullName = firstName+' '+lastName;
  var jobTitle = jobTitles[Math.floor(Math.random()*jobTitles.length)];
  var comp = companies[Math.floor(Math.random()*companies.length)];
  var thousands = Math.floor(Math.random()*330)+89;
  
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
  var r = Math.floor(Math.random()*10)+1;
  if (r == 1) {
    msg = name+' ('+job+' at '+company+') was just fired. Salary: '+salary;
  } else if (r == 2) {
    msg = company+' just lost its '+job+'. '+name+' is no longer drawing a '+salary+' salary.';
  } else if (r == 3) {
    msg = 'Another round of layoffs at '+company+'! '+job+' '+name+' was first to go.';
  } else if (r == 4) {
    var shouts = [
      "Fuck your code of conduct!",
      "Disrupt my ass!",
      "Who stole my fucking Soylent!?",
      "Jony Ive is overrated!",
      "Let's charge customers for our service!",
      "I don't even tweet!",
      "Nobody lints MY code!",
      "But it's my daughter's birthday!"
    ];
    var shout = shouts[Math.floor(Math.random()*shouts.length)];
    msg = 'Insiders recognized '+name+'&apos;s voice shouting &ldquo;'+shout+'!&rdquo; '+company+' cannot speak to the matter directly, but they are looking for a new '+job+'.';
  } else if (r == 5) {
    var posting = jobPostings[Math.floor(Math.random()*jobPostings.length)];
    msg = company+' is in need of a new '+job+'. Posting says &ldquo;'+posting+'&rdquo; Pay starts at '+salary;
  } else if (r == 6) {
    var day = moment().format('dddd');
    var pct = Math.floor(Math.random()*18)+5;
    msg = company+' celebrates &ldquo;Unemployment '+day+'&rdquo; by elminating '+pct+'% of their workforce.';
  } else if (r == 7) {
    msg = 'VCs advise a market correction necessary at '+company+'. '+name+' released.';
  } else if (r == 8) {
    msg = company+' secures new round of funding; fires '+job+' for having options vested. Additional '+salary+' available';
  } else if (r == 9) {
    var investor = firstNames[Math.floor(Math.random()*firstNames.length)]+' '+lastName;
    msg = investor+' pulls out of '+company+' investment portfolio. '+name+' released.';
  } else if (r == 10) {
    msg = company+'&apos;s open office plan gets more open as '+name+' is released from position as '+job;
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
