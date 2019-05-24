import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import JobForm from "../components/jobForm";
import '../components/Form/form.css'
import ResumeCard from "../components/resumeCard"
import Axios from "axios";

class Resume extends Component {
    state = {
        jobs: [],
        name: "",
        address: "",
        skills: "",
        tech: "",
        owner: "",
        currentResume: "",
        allResumes: []
    };

    componentDidMount() {
        const email = JSON.parse(localStorage.getItem("userEmail"))
        console.log(email);
        const promiseArr = [
            this.loadResume(email),
            
        ]
        Promise.all(promiseArr).then((allOfTheDatas) => {
          
            const resumeData = allOfTheDatas[0].data;
            
            this.setState({ owner: email, allResumes: resumeData })
        })
    }

    loadResume = (email) => API.getResume(email)
    

    loadJobs = (currentResume, saveID) => API.getJobByResume(currentResume)
        .then(data=> saveID ? this.setState({jobs:data.data, currentResume: currentResume} ) : this.setState({jobs:data.data}))

    resumeClicked =(id)=> {
        this.loadJobs(id, true);
    };

    deleteResume = name => {
        API.deleteResume(name)
            .then(res => this.loadResume())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value

        });
    };
  
    handleResumeSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.skills && this.state.address && this.state.tech) {
            const email = JSON.parse(localStorage.getItem("userEmail"))
            // save resume 
            API.saveResume({
                name: this.state.name,
                address: this.state.address,
                skills: this.state.skills,
                tech: this.state.tech,
                owner: email
            }).then(res => {
                // reload resumes
                this.loadResume(email).then((data)=> 
                this.setState({allResumes: data.data, name:"", skills:"", address:"", tech:""}))
            }).catch(err => console.log(err));
        }
    };

    createMyDoc = event => {
        const myName = JSON.parse(localStorage.getItem("userEmail"))
    /////////////////////////////
    // Need to send user info to back end in order to create depending on user. 
    // Using Hard Coded data for saturday//
    // Not risking it not running //
    /////////////////////////////

    //     const myResumeObject = {
    //     //Contact Info
    //         name : this.state.name,
    //         phoneNumber : "7863008714",
    //         linkedIn : "placeholder@linkedIn.com",
    //         email : this.state.owner,
    //         homeAddress : this.state.address,

    // //     //Education Info
    // //     experiences = [
    // //   {
    // //     summary: "Full-stack developer working with Angular and Java. Working for the iShares platform",
    // //     title: "Associate Software Developer",
    // //     endDate: "2/2/14",
    // //     startDate: "1/1/12",
    // //     company: {
    // //       name: "Univeristy of Miami"
    // //     }
    // //   },
    // //   {
    // //     summary: "Full-stack developer working with Angular and Java. Working for the iShares platform",
    // //     title: "Associate Software Developer",
    // //     endDate: "3/3/13",
    // //     startDate: "2/2/12",
    // //     company: {
    // //       name: "Univeristy of Miami"
    // //     }
    // //   }
    // // ],
    // // //Education Data, Hardcoded for Demo
    // //     educations = [
    // //   {
    // //       degree: "Master of Science (MSc)",
    // //       fieldOfStudy: "Computer Science",
    // //       notes:
    // //           "Exam Results: 1st Class with Distinction, Dissertation: 1st Class with Distinction\n\nRelevant Courses: Java and C# Programming, Software Engineering, Artificial Intelligence, \nComputational Photography, Algorithmics, Architecture and Hardware.\n\nCreated a Windows 8 game in JavaScript for the dissertation. \n\nCreated an award-winning 3D stereoscopic game in C# using XNA.",
    // //       schoolName: "University College London",
    // //       startDate: {
    // //           year: 2012,
    // //       },
    // //       endDate: {
    // //           year: 2013,
    // //       },
    // //   },
    // //   {
    // //       degree: "Bachelor of Engineering (BEng)",
    // //       fieldOfStudy: "Material Science and Engineering",
    // //       notes:
    // //           "Exam Results: 2:1, Dissertation: 1st Class with Distinction\n\nRelevant courses: C Programming, Mathematics and Business for Engineers.",
    // //       schoolName: "Imperial College London",
    // //       startDate: {
    // //           year: 2009,
    // //       },
    // //       endDate: {
    // //           year: 2012,
    // //       },
    // //   },
    // // ],
    // // //Skills Data
    // //     skills = ["Javascript", "React.js","HTML","CSS"],
    // //     achivements = [
    // //   {
    // //     issuer: "Oracle",
    // //     name: "Oracle Certified"
    // //   },
    // //   {
    // //     issuer: "University of Miami",
    // //     name: "Fullstack Web Development"
    // //   }
    // // ]
    // }
    
        //Axios request to create/download Docx
        console.log("creating your doc")
        Axios({
            url: 'api/resume/createDoc',
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'myResume.docx');
            document.body.appendChild(link);
            link.click();
        });
    }
    
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Create Resume</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="Title (required)"
                            />
                            <Input
                                value={this.state.skills}
                                onChange={this.handleInputChange}
                                name="skills"
                                placeholder="Enter your Skills"
                            />
                            <Input
                                value={this.state.address}
                                onChange={this.handleInputChange}
                                name="address"
                                placeholder="Your Address"
                            />
                            <Input
                                value={this.state.tech}
                                onChange={this.handleInputChange}
                                name="tech"
                                placeholder="Technologies Known"
                            />
                            <FormBtn
                                disabled={!(this.state.name && this.state.skills && this.state.address && this.state.tech)}
                                onClick={this.handleResumeSubmit}
                            >
                                Submit Resume
                            </FormBtn>
                        </form>
                        <br></br>

                        <h1>Add jobs</h1>
                        <JobForm 
                        allResumes={this.state.allResumes}
                        currentRes={this.state.currentResume}
                        jobFormSubmit={this.job}
                        reloadJobs={this.loadJobs}
                        />

                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Your Current Resume</h1>
                        </Jumbotron>
                        <h3>Your info:</h3>
                        <List>
                    
                            {this.state.allResumes.map(resume => {
                                return (<ResumeCard
                                    name={resume.name}
                                    address={resume.address}
                                    skills={resume.skills}
                                    tech={resume.tech}
                                    date={resume.date}
                                    key={resume._id}
                                    id={resume._id}
                                    clicked={this.resumeClicked}
                                />)

                            })

                            }
                        </List>
                        <h3>Your Jobs:</h3>

                        <List>
                            {this.state.jobs.map(job => (
                                <div>
                                    <ul>
                                        <li>Company Name:{job.companyName}</li>
                                        <li>Title:{job.title}</li>
                                        <li>Address:{job.jobAddress}</li>
                                        <li>Skills:{job.skills}</li>
                                        <li>Start Date:{job.start}</li>
                                        <li>End Date:{job.end}</li>
                                        <li>Technology:{job.jobTech}</li>
                                        <li>Major Accomplishment:{job.majorAccomplish}</li>
                                        <li>Big Project:{job.project}</li>
                                    </ul>
                                    <br />
                                </div>


                            ))
                            }
                        </List>
                        <button onClick = {this.createMyDoc}>Create Your Resume!</button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Resume;
