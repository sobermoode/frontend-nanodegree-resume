var name = "Aaron Justman";
var formattedName = HTMLheaderName.replace( "%data%", name );

var role = "Spaceship Wizard";
var formattedRole = HTMLheaderRole.replace( "%data%", role );

$( "#header" ).prepend( formattedRole );
$( "#header" ).prepend( formattedName );

var bio =
{
	"name" : "Aaron J",
	"role" : "Spaceship Wizard",
	"contacts" :
	{
		"mobile" : "123-456-7890",
		"email" : "aaron.justman@gmail.com",
		"github" : "https://github.com/sobermoode",
		"twitter" : "@sobermoode",
		"location" : "Hermosa Beach, CA"
	},
	"biopic" : "images/AJicon-small.jpg",
	"welcomeMessage" : "Do u liek to aet meatloaf?",
	"skills" :
	[
		"Air drumming",
		"Good looks",
		"Encyclopedic Star Trek: TNG knowledge",
		"(low) Triple-digit bowling scores"
	],
	display : function()
	{
		for ( contact in this.contacts )
		{
			var currentContact;

			currentContact = HTMLcontactGeneric.replace( "%contact%", contact );
			currentContact = currentContact.replace( "%data%", this.contacts[ contact ] );

			$( "#topContacts" ).append( currentContact );
			$( "#footerContacts" ).append( currentContact );
		}

		var bioPic = HTMLbioPic.replace( "%data%", bio.biopic );
		$( "#header" ).append( bioPic );

		var welcomeMessage = HTMLWelcomeMsg.replace( "%data%", bio.welcomeMessage );
		$( "#header" ).append( welcomeMessage );

		$( "#header" ).append( HTMLskillsStart );

		var originalHTMLSkills = HTMLskills;

		for ( skill in this.skills )
		{
			var formattedSkill = HTMLskills.replace( "%data%", this.skills[ skill ] );
			$( "#skills" ).append( formattedSkill );
			HTMLskills = originalHTMLSkills;
		}
	}
}

bio.display();

var work =
{
	"jobs" :
	[
		{
			"employer" : "Coffee Bean and Tea Leaf",
			"title" : "Barista",
			"location" : "Los Angeles, CA",
			"dates" : "2013 - 2015",
			"description" : "Making coffee, serving pastries."
		},
		{
			"employer" : "Novalogic",
			"title" : "Quality Assurance Specialist",
			"location" : "Calabasas, CA",
			"dates" : "2005 - 2006",
			"description" : "Finding bugs, submitting bugs."
		},
		{
			"employer" : "Activision",
			"title" : "Project Lead",
			"location" : "Santa Monica, CA",
			"dates" : "2001 - 2005",
			"description" : "Leading a project, leading the team."
		}
	],
	display : function()
	{
		for ( job in work.jobs )
		{
			$( "#workExperience" ).append( HTMLworkStart );

			var jobEmployer = HTMLworkEmployer.replace( "%data%", work.jobs[ job ].employer );
			var jobTitle = HTMLworkTitle.replace( "%data%", work.jobs[ job ].title );
			var formattedEmployerTitle = jobEmployer + jobTitle;
			$( ".work-entry:last" ).append( formattedEmployerTitle );

			var jobLocation = HTMLworkLocation.replace( "%data%", work.jobs[ job ].location );
			$( ".work-entry:last" ).append( jobLocation );

			var jobDates = HTMLworkDates.replace( "%data%", work.jobs[ job ].dates );
			$( ".work-entry:last" ).append( jobDates );

			var jobDescription = HTMLworkDescription.replace( "%data%", work.jobs[ job ].description );
			$(".work-entry:last").append(jobDescription)
		}
	}
}

work.display();

/*
$("#main").append(internationalizeButton);

function inName()
{
	// console.log("calling inName()");
	var splitName = name.split(" ");

	var firstName = splitName[0];
	var upperCaseLasteName = splitName[1].toUpperCase();
	var internationalizedName = firstName + " " + upperCaseLasteName;

	// console.log(firstName + " " + upperCaseLasteName);
	return internationalizedName;
}
*/

var projects =
{
	"projects" :
	[
		{
			"title" : "T-shirts I like",
			"dates" : "2008 - 2015",
			"description" : "Recent awesome t-shirts from various one-shirt-a-day sites.",
			"images" :
			[
				"images/A_balloonfairy.jpg",
				"images/A_chaos.jpg",
				"images/A_hobbitstales.jpg",
				"images/A_lionwar.jpg"
			]
		},
		{
			"title" : "Books I've read",
			"dates" : "2015",
			"description" : "All of the books I've read, so far this year.",
			"books" :
			[
				"10:04, by Ben Lerner",
				"The Hawkline Monster, by Richard Brautigan",
				"The Man Who Couldn't Stop, by David Adam"
			],
			"images" :
			[
				"images/1004.jpg",
				"images/hawklinemonster.jpg",
				"images/stop.jpg"
			]
		},
		{
			"title" : "Favorite TV shows",
			"dates" : "1977 - 2015",
			"description" : "The best TV shows, ever.",
			"shows" :
			[
				"Star Trek: The Next Generation",
				"Quantum Leap",
				"JEOPARDY!",
				"The Real Ghostbusters",
				"ALF"
			],
			"images" :
			[
				"images/TNGcrew.jpg",
				"images/quantumleap.jpg",
				"images/jeopardy.jpg",
				"images/ghostbusters.jpg",
				"images/ALF.jpg"
			]
		}
	],
	display : function()
	{
		for ( projectNumber in projects.projects )
		{
			$( "#projects" ).append( HTMLprojectStart );

			var projectTitle = HTMLprojectTitle.replace( "%data%", projects.projects[ projectNumber ].title );
			var projectDates = HTMLprojectDates.replace( "%data%", projects.projects[ projectNumber ].dates );
			var projectDescription = HTMLprojectDescription.replace( "%data%", projects.projects[ projectNumber ].description );
			var projectImages = projects.projects[ projectNumber ].images;

			$( ".project-entry:last" ).append( projectTitle );
			$( ".project-entry:last" ).append( projectDates );
			$( ".project-entry:last" ).append( projectDescription );

			if( this.projects[ projectNumber ].books )
			{
				for( book in this.projects[ projectNumber ].books )
				{
					$( ".project-entry:last" ).append( this.projects[ projectNumber ].books[ book ] + '<p>' );
					var bookImage = HTMLprojectImage.replace( "%data%", this.projects[ projectNumber ].images[ book ] );
					$( ".project-entry:last" ).append( bookImage );
					$( ".project-entry:last" ).append( '</p>' );
				}
			}

			else if( this.projects[ projectNumber ].shows )
			{
				for( show in this.projects[ projectNumber ].shows )
				{
					$( ".project-entry:last" ).append( this.projects[ projectNumber ].shows[ show ] + '<p>' );
					var showImage = HTMLprojectImage.replace( "%data%", this.projects[ projectNumber ].images[ show ] );
					$( ".project-entry:last" ).append( showImage );
					$( ".project-entry:last" ).append( '</p>' );
				}
			}
			
			else if ( projectImages.length !== 0 )
			{
				for ( var image in projectImages )
				{
					var projectImage = HTMLprojectImage.replace( "%data%", projectImages[ image ] );
					$( ".project-entry" ).append( projectImage );
				}
			}
		}
	}
}

projects.display();

var education = 
{
	"schools" :
	[
		{
			"name" : "Purdue University",
			"location" : "West Lafayette, IN",
			"degree" : "No degree =/",
			"majors" : [ "Computer Science" ],
			"dates" : 1997,
			"url" : "http://www.purdue.edu"
		},
		{
			"name" : "University of Southern California",
			"location" : "Los Angeles, CA",
			"degree" : "No degree =/",
			"majors" : [ "Art History" ],
			"dates" : 1999,
			"url" : "http://www.usc.edu"
		},
		{
			"name" : "Santa Monica College",
			"location" : "Santa Monica, CA",
			"degree" : "No degree =/",
			"majors" : [ "General" ],
			"dates" : 2014,
			"url" : "http://www.smc.edu"
		}
	],
	"onlineCourses" :
	[
		{
			"title" : "Front-end web developer nanodegree",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com"
		}
	],
	display : function()
	{
		for ( school in education.schools )
		{
			$( "#education" ).append( HTMLschoolStart );

			var schoolName = HTMLschoolName.replace( "%data%", education.schools[ school ].name );
			var schoolDegree = HTMLschoolDegree.replace( "%data%", education.schools[ school ].degree );
			var formattedSchoolDegree = schoolName + schoolDegree;
			$( ".education-entry:last" ).append( formattedSchoolDegree );

			var schoolLocation = HTMLschoolLocation.replace( "%data%", education.schools[ school ].location );
			$( ".education-entry:last" ).append( schoolLocation );

			var schoolDates = HTMLschoolDates.replace( "%data%", education.schools[ school ].dates );
			$( ".education-entry:last" ).append( schoolDates );

			var schoolMajor = HTMLschoolMajor.replace( "%data%", education.schools[ school ].majors );
			$(".education-entry:last").append( schoolMajor );
		}

		$( "#education" ).append( HTMLonlineClasses );

		var onlineCoursesDivText = '<div class="online-education-entry"></div>';
		$( "#education" ).append( onlineCoursesDivText );

		var onlineCoursesDiv = $( '.online-education-entry' );

		for ( onlineCourse in education.onlineCourses )
		{
			var onlineTitle = HTMLonlineTitle.replace( "%data%", education.onlineCourses[ onlineCourse ].title );
			var onlineSchool = HTMLonlineSchool.replace( "%data%", education.onlineCourses[ onlineCourse ].school );
			var formattedOnlineTitleSchool = onlineTitle + onlineSchool;
			var onlineDates = HTMLonlineDates.replace( "%data%", education.onlineCourses[ onlineCourse ].dates );
			var onlineURL = HTMLonlineURL.replace( "%data%", education.onlineCourses[ onlineCourse ].url );

			$(".online-education-entry:last").append( formattedOnlineTitleSchool, onlineDates, onlineURL );
		}
	}
}

education.display();

$( "#mapDiv" ).append( googleMap );

