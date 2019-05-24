const router = require("express").Router();
const resumeController = require("../../controllers/resumeController");
const documentCreator = require("../../controllers/docxController");
const docx = require("docx");
const fs = require("fs");
const { Document, Paragraph, Packer, TextRun } = docx;

// Matches with "/api/resume"
router.route("/resume")
  .get(resumeController.find)
  .post(resumeController.create);

      // Matches api/resume/doc
router
.route("/createDoc")
.get( async (req, res) => {
  // const documentCreator = new DocumentCreator();
  console.log('DOC route hit');

  try{
    //Contact Info
    const name = "John Doe";
    const phoneNumber = "7863008714";
    const linkedIn = "www.linkedin.com/in/johnD";
    const email = "JohnDoe09@gmail.com";
    const homeAddress = "8420 SW 114 ST Miami, FL 33156";

    //Education Info
    const experiences = [
      {
        summary: "Full-stack developer working with Angular and Java. Working for the iShares platform",
        title: "Associate Software Developer",
        endDate: "2/2/14",
        startDate: "1/1/12",
        company: {
          name: "Univeristy of Miami"
        }
      },
      {
        summary: "Full-stack developer working with Angular and Java. Working for the iShares platform",
        title: "Associate Software Developer",
        endDate: "3/3/13",
        startDate: "2/2/12",
        company: {
          name: "Univeristy of Miami"
        }
      }
    ]
    //Education Data, Hardcoded for Demo
    const educations = [
      {
          degree: "Master of Science (MSc)",
          fieldOfStudy: "Computer Science",
          notes:
              "Exam Results: 1st Class with Distinction, Dissertation: 1st Class with Distinction\n\nRelevant Courses: Java and C# Programming, Software Engineering, Artificial Intelligence, \nComputational Photography, Algorithmics, Architecture and Hardware.\n\nCreated a Windows 8 game in JavaScript for the dissertation. \n\nCreated an award-winning 3D stereoscopic game in C# using XNA.",
          schoolName: "University College London",
          startDate: {
              year: 2012,
          },
          endDate: {
              year: 2013,
          },
      },
      {
          degree: "Bachelor of Engineering (BEng)",
          fieldOfStudy: "Material Science and Engineering",
          notes:
              "Exam Results: 2:1, Dissertation: 1st Class with Distinction\n\nRelevant courses: C Programming, Mathematics and Business for Engineers.",
          schoolName: "Imperial College London",
          startDate: {
              year: 2009,
          },
          endDate: {
              year: 2012,
          },
      },
    ]
    //Skills Data
    const skills = [
      {
        name: "Javascript"
      },
      {
        name: "React.js"
      },
      {
        name: "HTML"
      },
      {
        name: "CSS"
      }
    ];
    const achivements = [
      {
        issuer: "Oracle",
        name: "Oracle Certified"
      },
      {
        issuer: "University of Miami",
        name: "Fullstack Web Development"
      }
    ]
    
    const document = new Document();

    document.addParagraph(new Paragraph(name).title());

    //Creates Contact Info Section
    createContactInfo = function (phoneNumber, linkedIn, email, homeAddress) {
      const paragraph = new Paragraph().center();
      const contactInfo = new TextRun(`Mobile: ${phoneNumber} | LinkedIn: ${linkedIn} | Email: ${email}`);
      const address = new TextRun(`Address: ${homeAddress}`).break();

      paragraph.addRun(contactInfo);
      paragraph.addRun(address);

      return paragraph;
    },

    createHeading = function(text) {
      return new Paragraph(text).heading1().thematicBreak();
    },    

    createRoleText = function(roleText) {
      const paragraph = new Paragraph();
      const role = new TextRun(roleText).italic();

      paragraph.addRun(role);

      return paragraph;
    },
    createBullet = function(text) {
      return new Paragraph(text).bullet();
    },
    splitParagraphIntoBullets = function(text) {
      return text.split("\n\n");
    },
    //Creates Header for Experiences
    createInstitutionHeader = function(institutionName, dateText) {
      const paragraph = new Paragraph().maxRightTabStop();
      const institution = new TextRun(institutionName).bold();
      const date = new TextRun(dateText).tab().bold();

      paragraph.addRun(institution);
      paragraph.addRun(date);

      return paragraph;
    },
    createRoleText = function(roleText) {
      const paragraph = new Paragraph();
      const role = new TextRun(roleText).italic();

      paragraph.addRun(role);

      return paragraph;
    },
    createSubHeading = function(text) {
      return new Paragraph(text).heading2();
    },
    createSkillList = function(skills) {
      const paragraph = new Paragraph();
      const skillConcat = skills.map((skill) => skill.name).join(", ") + ".";

      paragraph.addRun(new TextRun(skillConcat));

      return paragraph;
    },

    createAchivementsList = function(achivements) {
      const arr = [];

      for (const achievement of achivements) {
          arr.push(new Paragraph(achievement.name).bullet());
      }

      return arr;
    },

    createInterests = function(interests) {
      const paragraph = new Paragraph();

      paragraph.addRun(new TextRun(interests));
      return paragraph;
    },
    //Creates the date for experiences to and from
    createPositionDateText = function(startDate, endDate, isCurrent) {
      const startDateText = startDate;
      const endDateText = isCurrent ? "Present" : `${endDate}`;

      return `${startDateText} - ${endDateText}`;
    },
    
    //Adds Contact info 
    document.addParagraph(createContactInfo(phoneNumber, name, email, linkedIn, homeAddress));

    //Education Construct
    document.addParagraph(createHeading("Education"));
      for (const education of educations) {
        document.addParagraph(
          createInstitutionHeader(education.schoolName, `${education.startDate.year} - ${education.endDate.year}`),
        );
        document.addParagraph(createRoleText(`${education.fieldOfStudy} - ${education.degree}`));

        const bulletPoints =splitParagraphIntoBullets(education.notes);
        bulletPoints.forEach((bulletPoint) => {
        document.addParagraph(createBullet(bulletPoint));
        });
        }

    //Experiences Construct
    document.addParagraph(createHeading("Experience"));

    for (const position of experiences) {
      document.addParagraph(
          createInstitutionHeader(
              position.company.name,
              createPositionDateText(position.startDate, position.endDate)
          ),
      );
      document.addParagraph(createRoleText(position.title));

      const bulletPoints = splitParagraphIntoBullets(position.summary);

      bulletPoints.forEach((bulletPoint) => {
          document.addParagraph(createBullet(bulletPoint));
      });
    }
    //Skills Interests and References
    document.addParagraph(createHeading("Skills, Achievements and Interests"));
    document.addParagraph(createSubHeading("Skills"));
    document.addParagraph(createSkillList(skills));
    document.addParagraph(createSubHeading("Achievements"));

    for (const achievementParagraph of createAchivementsList(achivements)) {
      document.addParagraph(achievementParagraph);
    }

    document.addParagraph(createSubHeading("Interests"));

    document.addParagraph(createInterests("Programming, Technology, Music Production, Web Design, 3D Modelling, Dancing."));

    document.addParagraph(createHeading("References"));

    document.addParagraph(
      new Paragraph(
          "Dr. Dean Mohamedally Director of Postgraduate Studies Department of Computer Science, University College London Malet Place, Bloomsbury, London WC1E d.mohamedally@ucl.ac.uk",
      ),
    );
    document.addParagraph(new Paragraph("More references upon request"));
    document.addParagraph(
      new Paragraph(
          "This CV was generated in real-time based on my Linked-In profile from my personal website www.dolan.bio.",
      ).center(),
    );

    document.addParagraph()
    const packer = new Packer();
    const b64string = await packer.toBase64String(document);
    
    res.setHeader("Content-Disposition", "attachment; filename=hellohellohello.docx");
    res.end(Buffer.from(b64string, "base64")); 
  }catch(err){
    console.log(err);
  } 
});
// Matches with "/api/resume/resume/:name"
router
  .route("/resume/:name")
  .get(resumeController.findByName)
  .put(resumeController.update)
  .delete(resumeController.remove);

module.exports = router;
