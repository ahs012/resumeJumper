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
        const email = JSON.parse(localStorage.getItem("userData"))
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
  
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.skills && this.state.address && this.state.tech) {
            const email = JSON.parse(localStorage.getItem("userData"))
            // save resume 
            API.saveResume({
                name: this.state.name,
                address: this.state.address,
                skills: this.state.skills,
                tech: this.state.tech,
                owner: email ? email : "chern@test.com"
            }).then(res => {
                // reload resumes
                this.loadResume(email).then((data)=> 
                this.setState({allResumes: data.data, name:"", skills:"", address:"", tech:""}))
            }).catch(err => console.log(err));
        }
    };

    
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
                        <JobForm 
                        allResumes={this.state.allResumes}
                        currentRes={this.state.currentResume}
                        formSubmit={this.job}
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

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Resume;
