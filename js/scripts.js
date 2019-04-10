

function JobPosting(companyName, title, difficulty, location, description) {
  this.companyName = companyName;
  this.title = title;
  this.difficulty = difficulty;
  this.location = location;
  this.description = description;
  this.skills = [];
}

JobPosting.prototype.entryPost = function(){
  return '<div class="alert alert-success">' +
    '<h5 class="alert-heading"><strong>' +
    this.title +
    '</strong></h5>' +
    '<p>Company name: ' +
    this.companyName +
    '</p>' +
    '<p>Location: ' +
    this.location +
    '</p>' +
    '<ul>' +
    '<span id="bg-skills"></span>' +
    '</ul>' +
    '<p>Description: ' +
    this.description +
    '</p>' +
    '</div>'
}

JobPosting.prototype.intPost = function(){
  return '<div class="alert alert-info">' +
    '<h5 class="alert-heading"><strong>' +
    this.title +
    '</strong></h5>' +
    '<p>Company name: ' +
    this.companyName +
    '</p>' +
    '<p>Location: ' +
    this.location +
    '</p>' +
    '<ul>' +
    '<span id="bg-skills"></span>' +
    '</ul>' +
    '<p>Description: ' +
    this.description +
    '</p>' +
    '</div>'
}

JobPosting.prototype.advPost = function(){
  return '<div class="alert alert-primary">' +
    '<h5 class="alert-heading"><strong>' +
    this.title +
    '</strong></h5>' +
    '<p>Company name: ' +
    this.companyName +
    '</p>' +
    '<p>Location: ' +
    this.location +
    '</p>' +
    '<ul>' +
    '<span id="bg-skills"></span>' +
    '</ul>' +
    '<p>Description: ' +
    this.description +
    '</p>' +
    '</div>'
}



$(document).ready(function(){
  $(".post-form").hide();

  $("#posting-btn").click(function(event){
    $(".post-form").show();
  });

  $("#post-close").click(function(event){
    $(".post-form").hide();
    $("#jobpost-form")[0].reset();
  });

  $("#post-btn").click(function(event){
    event.preventDefault();

    var companyName = $("#com-name").val();
    var jobTitle = $("#job-title").val();
    var difficulty = $("#difficulty").val();
    var jobLocation = $("#location").val();
    var jobDescription = $("#description").val();
    var jobSkills = $("input:checkbox[name=skills]:checked").map(function(){
      newPost.skills.push($(this).val());
      return newPost.skills;
    });

    var newPost = new JobPosting(companyName, jobTitle, difficulty, jobLocation, jobDescription);
    newPost.entryPost();

    if (difficulty === "entry"){
       $("#entry-level").append(newPost.entryPost());

       jobSkills.each(function(){
         $("#bg-skills").text("<li>" + this.skills + "</li>");
       })
     } else if (difficulty === "intermediate"){
       $("#int-level").append(newPost.intPost());

     } else if (difficulty === "advanced"){
       $("#adv-level").append(newPost.advPost());

    }
    $(".post-form").hide();
    $("#jobpost-form")[0].reset();
  });
});
