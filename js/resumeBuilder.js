
// initial resume data, from supporting courses
var name = "Aaron Justman";
var formattedName = HTMLheaderName.replace( "%data%", name );

var role = "Spaceship Wizard";
var formattedRole = HTMLheaderRole.replace( "%data%", role );

$( "#header" ).prepend( formattedRole );
$( "#header" ).prepend( formattedName );

// personal info JSON
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

			// using the generic contact from helper.js;
			// can use a loop to append all the data, rather than using each specific
			// HTMLcontact var on its own line.
			currentContact = HTMLcontactGeneric.replace( "%contact%", contact );
			currentContact = currentContact.replace( "%data%", this.contacts[ contact ] );

			$( "#topContacts" ).append( currentContact );
			$( "#footerContacts" ).append( currentContact );
		}

		var bioPic = HTMLbioPic.replace( "%data%", this.biopic );
		$( "#header" ).append( bioPic );

		var welcomeMessage = HTMLWelcomeMsg.replace( "%data%", this.welcomeMessage );
		$( "#header" ).append( welcomeMessage );

		// HTMLskillsStart adds a specific <div>,
		// "#skills" to put the individual skills into
		$( "#header" ).append( HTMLskillsStart );

		for ( skill in this.skills )
		{
			var formattedSkill = HTMLskills.replace( "%data%", this.skills[ skill ] );
			$( "#skills" ).append( formattedSkill );
		}
	} 
}

// work experience JSON
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
		// interate through the JSON info and replace the given helper elements with my data
		for ( job in this.jobs )
		{
			$( "#workExperience" ).append( HTMLworkStart );

			var jobEmployer = HTMLworkEmployer.replace( "%data%", this.jobs[ job ].employer );
			var jobTitle = HTMLworkTitle.replace( "%data%", this.jobs[ job ].title );
			var formattedEmployerTitle = jobEmployer + jobTitle;
			$( ".work-entry:last" ).append( formattedEmployerTitle );

			var jobLocation = HTMLworkLocation.replace( "%data%", this.jobs[ job ].location );
			$( ".work-entry:last" ).append( jobLocation );

			var jobDates = HTMLworkDates.replace( "%data%", this.jobs[ job ].dates );
			$( ".work-entry:last" ).append( jobDates );

			var jobDescription = HTMLworkDescription.replace( "%data%", this.jobs[ job ].description );
			$( ".work-entry:last" ).append( jobDescription );
		}
	}
}

// projects JSON
// i've added the image titles to each image in every project
// (this wasn't explicitly part of the instructions)
var projects =
{
	"projects" :
	[
		{
			"title" : "Bugger!",
			"dates" : "2015",
			"description" : "Udacity Front-end Web Developer Project 3",
			"imageTitles" :
			[
				"screenshot"
			],
			"images" :
			[
				"images/bugger.png"
			]
		},
		{
			"title" : "T-shirts I like",
			"dates" : "2008 - 2015",
			"description" : "Recent awesome t-shirts from various one-shirt-a-day sites.",
			"imageTitles" :
			[
				"Balloon Fairy",
				"Chaos Emerald",
				"Hobbit's Tales",
				"The Lion War"
			],
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
			"imageTitles" :
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
			"imageTitles" :
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
		for( projectNumber in this.projects )
		{
			$( "#projects" ).append( HTMLprojectStart );

			var projectTitle = HTMLprojectTitle.replace( "%data%", this.projects[ projectNumber ].title );
			var projectDates = HTMLprojectDates.replace( "%data%", this.projects[ projectNumber ].dates );
			var projectDescription = HTMLprojectDescription.replace( "%data%", this.projects[ projectNumber ].description );

			$( ".project-entry:last" ).append( projectTitle );
			$( ".project-entry:last" ).append( projectDates );
			$( ".project-entry:last" ).append( projectDescription );

			// get the arrays of image titles and the images themselves
			var projectImageTitles = this.projects[ projectNumber ].imageTitles;
			var projectImages = this.projects[ projectNumber ].images;

			// use the image helper element and replace its data with the URL to my image
			// then append theimage title and the associated image to the resume
			for( var image = 0; image < projectImages.length; image++ )
			{
				var currentImage = HTMLprojectImage.replace( "%data%", projectImages[ image ] );

				$( ".project-entry:last" ).append( "<p><h3 class='orange-text'>" + projectImageTitles[ image ] + "</h3>" );
				$( ".project-entry:last" ).append( currentImage + "</p>" );
			}
		}
	}
}

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
		for ( school in this.schools )
		{
			$( "#education" ).append( HTMLschoolStart );

			var schoolName = HTMLschoolName.replace( "%data%", this.schools[ school ].name );
			var schoolDegree = HTMLschoolDegree.replace( "%data%", this.schools[ school ].degree );
			var formattedSchoolDegree = schoolName + schoolDegree;
			$( ".education-entry:last" ).append( formattedSchoolDegree );

			var schoolLocation = HTMLschoolLocation.replace( "%data%", this.schools[ school ].location );
			$( ".education-entry:last" ).append( schoolLocation );

			var schoolDates = HTMLschoolDates.replace( "%data%", this.schools[ school ].dates );
			$( ".education-entry:last" ).append( schoolDates );

			var schoolMajor = HTMLschoolMajor.replace( "%data%", this.schools[ school ].majors );
			$(".education-entry:last").append( schoolMajor );
		}

		$( "#education" ).append( HTMLonlineClasses );

		// append a new <div> with my custom online-education-entry class,
		// so that these courses appear similar to the offline courses
		var onlineCoursesDivText = '<div class="online-education-entry"></div>';
		$( "#education" ).append( onlineCoursesDivText );

		for ( onlineCourse in this.onlineCourses )
		{
			var onlineTitle = HTMLonlineTitle.replace( "%data%", this.onlineCourses[ onlineCourse ].title );
			var onlineSchool = HTMLonlineSchool.replace( "%data%", this.onlineCourses[ onlineCourse ].school );
			var formattedOnlineTitleSchool = onlineTitle + onlineSchool;
			var onlineDates = HTMLonlineDates.replace( "%data%", this.onlineCourses[ onlineCourse ].dates );
			var onlineURL = HTMLonlineURL.replace( "%data%", this.onlineCourses[ onlineCourse ].url );

			$( ".online-education-entry:last" ).append( formattedOnlineTitleSchool, onlineDates, onlineURL );
		}
	}
}

// display all of the JSON info to fill out the resume
bio.display();
work.display();
projects.display();
education.display();

// append the Google Map to the page;
// pins will appear in the places i've gone to school and worked, taken from the JSON info
$( "#mapDiv" ).append( googleMap );
