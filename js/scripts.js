var developer = new Developer(fname,lname,title,hRate,experience,skillsRequire);

function Jobs{
  this.jposts = [];
  this.jposts = [];
}

Jobs.prototype.addJob=function(job){
  this.jposts.push(job);

}

Jobs.prototype.removeJob=function(job){
  this.jposts.pop(job);
}


function JobPosting {
  this.companyName = companyName;
  this.title = title;
  this.difficulty = difficulty;
  this.description = description;
  this.skillsRequire = [];
}

Developers.prototype.addDeveloper=function(developer){
  this.developers.push(developer);

}

Developers.prototype.removeDeveloper=function(developer){
  this.developers.pop(developer);

}

function Developer(fname,lname,title,hRate,experience,skillsRequire){
  this.fname = fname;
  this.lname = lname;
  this.title = title;
  this.hourluRate = hRate;
  this.experience = experience;
  this.skills = skillsRequire;
}

var newdevloper;


$(document).ready(function(){

  // company click function to take form inputs
 $("#apply").click(function(){

 });

 ///developer click function to take form inputs
 $("#app-btn").click(function(){
    var fname,lname,email,title,skills=[],hourlyRate,xperience;
    var fname = $("input#app-first-name").val();
    var lname = $("input#app-last-name").val();
    var title = $("input#app-title").val();
    var hourlyRate = parseInt($("input#app-rate").val());
    var experience = $("input#app-exp").val();

    $("input:checkbox[name=skills]:checked").each(function(){
    var skill = $(this).val();
    skills.push(skill);
  });
});


  $("#submit").click(function(){

    var comName = $("#com-name").val();
    var jobTitle = $("#job-title").val();
    var comEmail= $("#com-email").val();
    var difficulty = $("#difficulty").val();
    var joblocation = $("#location").val();
    var jobCondition = $("#condition").val();
    var jobDescription = $("#description").val();
    var jobCondition = $("#condition").val();

    var skills = [];

    $("input:checkbox[name=skills]:checked").each(function(){
     var skillsRequired = $(this).val();

     $("#bg-skills").text("<li>"+skillsRequired+"</li>");

     skills.push(skillsRequired);
     // $('#responses').append( skillsRequired  + "<br>");
    });
     var moreSkills =  $("#skills").val();
     // skills.push(moreSkills);

     if (difficulty === "easy"){
       $("#bg-comp-name").text(comName);
       $("#bg-title").text(jobTitle);
       $("#bg-location").text(joblocation);
       $("#bg-add-skills").text(moreSkills);
       $("#bg-post-desc").text(jobDescription);
       $("#bg-condition").text(jobCondition);

     }
  });
});
