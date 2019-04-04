var newPost = new JobPosting();

function JobPosting(companyName, title, difficulty, description) {
  this.companyName = companyName;
  this.title = title;
  this.difficulty = difficulty;
  this.description = description;
  this.skills = [];
}

JobPosting.prototype.entryPost = function(){
  return '<div class="alert alert-success">' +
    '<h5 class="alert-heading"><strong><span id="bg-title"></span></strong></h5>' +
    '<p>Company name: <span id="bg-comp-name"></span></p>' +
    '<p>Location: <span id="bg-location"></span></p>' +
    '<ul>' +
    '<span id="bg-skills"></span>' +
    '</ul>' +
    '<p>Description: <span id="bg-post-desc"></span></p>' +
    '</div>'
}

JobPosting.prototype.intPost = function(){
  return '<div class="alert alert-success">' +
    '<h5 class="alert-heading"><strong><span id="bg-title"></span></strong></h5>' +
    '<p>Company name: <span id="bg-comp-name"></span></p>' +
    '<p>Location: <span id="bg-location"></span></p>' +
    '<ul>' +
    '<span id="bg-skills"></span>' +
    '</ul>' +
    '<p>Description: <span id="bg-post-desc"></span></p>' +
    '</div>'
}

JobPosting.prototype.advPost = function(){
  return '<div class="alert alert-success">' +
    '<h5 class="alert-heading"><strong><span id="bg-title"></span></strong></h5>' +
    '<p>Company name: <span id="bg-comp-name"></span></p>' +
    '<p>Location: <span id="bg-location"></span></p>' +
    '<ul>' +
    '<span id="bg-skills"></span>' +
    '</ul>' +
    '<p>Description: <span id="bg-post-desc"></span></p>' +
    '</div>'
}



$(document).ready(function(){


 $("#post-btn").submit(function(event){
   event.preventDefault();

    var companyName = $("#com-name").val();
    var jobTitle = $("#job-title").val();
    var difficulty = $("#difficulty").val();
    var jobLocation = $("#location").val();
    var jobDescription = $("#description").val();
    var jobSkills = $("input:checkbox[name=skills]:checked").map(function(){
      JobPosting.skills.push($(this).val());
      return JobPosting.skills;
    });
    newPost

   if (difficulty === "entry"){
     $("#entry-level").append(newPost.entryPost());
     $("#bg-comp-name").text(companyName);
     $("#bg-title").text(jobTitle);
     $("#bg-location").text(jobLocation);
     $("#bg-skills").text(jobSkills);
     $("#bg-post-desc").text(jobDescription);
     jobSkills.each(function(){
       $("#bg-skills").text("<li>" + JobPosting.skills + "</li>");
     })
   } else {
     console.log("Nope!")
   }
  });
});
