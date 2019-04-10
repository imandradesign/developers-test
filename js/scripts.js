

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
    '<h5 class="alert-heading"><strong><center>' +
    this.title +
    '</center></strong></h5>' +
    '<p class="label">Company name: </p>' +
    '<p>' +
    this.companyName +
    '</p>' +
    '<p class="label">Location: </p>' +
    '<p>' +
    this.location +
    '</p>' +
    '<p class="label">Required Skills: </p>' +
    '<p>' +
    this.skills +
    '</p>' +
    '<p class="label">Description: </p>' +
    '<p>' +
    this.description +
    '</p></div>'
}

JobPosting.prototype.intPost = function(){
  return '<div class="alert alert-info">' +
  '<h5 class="alert-heading"><strong><center>' +
  this.title +
  '</center></strong></h5>' +
  '<p class="label">Company name: </p>' +
  '<p>' +
  this.companyName +
  '</p>' +
  '<p class="label">Location: </p>' +
  '<p>' +
  this.location +
  '</p>' +
  '<p class="label">Required Skills: </p>' +
  '<p>' +
  this.skills +
  '</p>' +
  '<p class="label">Description: </p>' +
  '<p>' +
  this.description +
  '</p></div>'
}

JobPosting.prototype.advPost = function(){
  return '<div class="alert alert-primary">' +
  '<h5 class="alert-heading"><strong><center>' +
  this.title +
  '</center></strong></h5>' +
  '<p class="label">Company name: </p>' +
  '<p>' +
  this.companyName +
  '</p>' +
  '<p class="label">Location: </p>' +
  '<p>' +
  this.location +
  '</p>' +
  '<p class="label">Required Skills: </p>' +
  '<p>' +
  this.skills +
  '</p>' +
  '<p class="label">Description: </p>' +
  '<p>' +
  this.description +
  '</p></div>'
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

    var newPost = new JobPosting(companyName, jobTitle, difficulty, jobLocation, jobDescription);

    $("input:checkbox[name=skills]:checked").map(function(){
      newPost.skills.push(" " + $(this).val());
      return newPost.skills;
    });

    if (difficulty === "entry"){
       $("#entry-level").append(newPost.entryPost());

     } else if (difficulty === "intermediate"){
       $("#int-level").append(newPost.intPost());
     } else if (difficulty === "advanced"){
       $("#adv-level").append(newPost.advPost());
    }
    $(".post-form").hide();
    $("#jobpost-form")[0].reset();
  });
});
