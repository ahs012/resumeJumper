import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import JobForm from "../components/jobForm";
import JobWrapper from "../components/jobWrapper";
import JobCard from "../components/jobCard";
import ResumeCard from "../components/resumeCard";
import { set } from "mongoose";

class Resume extends Component {
    state = {
        jobs: [],
        name: "",
        address: "",
        skills: "",
        tech: "",
        owner: "",
        currentResume: [],
        allResumes: []
    };

    componentDidMount() {

        const email = JSON.parse(localStorage.getItem("userData"))
        const promiseArr = [
            this.loadResume(email),
            this.loadJobs(this.state.allResumes)
        ]
        Promise.all(promiseArr).then((allOfTheDatas) => {
            console.log(allOfTheDatas);
            const resumeData = allOfTheDatas[0].data;
            const jobData = allOfTheDatas[1].data;
            this.setState({ owner: email, jobs: jobData, allResumes: resumeData })
        })
    }

    loadResume = (email) => API.getResume(email)

    loadJobs = (currentResume) => API.getJobByResume(currentResume)

    resumeClicked =(id)=> {
        console.log(id);
        this.setState({
            currentResume: id
        })
        // set button press to get resume ID
        //update current resume state with resume ID
        //plug currentResume into getjob param

        // this.setState({currentResume})
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
    ////////EDIT FORMS FOR RESUME////
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("route hit")
        if (this.state.name && this.state.skills && this.state.address && this.state.tech) {
            const email = JSON.parse(localStorage.getItem("userData"))
            API.saveResume({
                name: this.state.name,
                address: this.state.address,
                skills: this.state.skills,
                tech: this.state.tech,
                owner: email ? email : "chern@test.com"
            })
                .then(res => this.loadResume())
                .catch(err => console.log(err));
        }
    };

    jobFormSubmit = event => {


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
                                placeholder="enter your skills"
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
                                placeholder="Technologies known"
                            />
                            <FormBtn
                                disabled={!(this.state.name && this.state.skills && this.state.address && this.state.tech)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit resume
                            </FormBtn>
                        </form>
                        <br></br>

                        <h1>Add jobs</h1>
                        <JobForm allResumes={this.state.allResumes} />

                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Your Current Resume</h1>
                        </Jumbotron>
                        <h3>Your info:</h3>
                        <List>
                            {/* <li>Name:{this.state.name}</li>
                            <li>Address:{this.state.address}</li>
                            <li>Skills:{this.state.skills}</li>
                            <li>Technologies:{this.state.tech}</li> */}
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

                        {/* <JobWrapper>
                            <JobCard
                            companyName={}
                            title={}
                            jobAddress={}
                            skills={}
                            start={}
                            end={}
                            jobTech={}
                            majorAccomplish={}
                            project={}
                            />
                        </JobWrapper> */}
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

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Resume;
