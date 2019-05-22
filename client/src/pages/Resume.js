import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import JobForm from "../components/jobForm";
import JobWrapper from "../components/jobWrapper"
import JobCard from "../components/jobCard"
import '../components/Form/form.css'

class Resume extends Component {
    state = {
        jobs: [],
        name: "",
        address: "",
        skills: "",
        tech: ""
    };

    componentDidMount() {
        this.loadResume();
        this.loadJobs();
    }

    loadResume = () => {
        API.getResume()
            .then(res => {
                this.setState({ resume: res.data });
            })
            .catch(err => console.log(err));
    };

    loadJobs = () => {
        API.getJob()
            .then(res => {
                console.log(res.data);
                this.setState({ jobs: res.data });
            })
            .catch(err => console.log(err));
    }

    deleteResume = name => {
        API.deleteResume(name)
            .then(res => this.loadResume())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,

        });
    };
    ////////EDIT FORMS FOR RESUME////
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("route hit")
        if (this.state.name && this.state.skills && this.state.address && this.state.tech) {
            API.saveResume({
                name: this.state.name,
                address: this.state.address,
                skills: this.state.skills,
                tech: this.state.tech
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
                                onClick={this.handleFormSubmit}
                            >
                                Submit Resume
                            </FormBtn>
                        </form>
                        <br></br>

                        <h1>Add Jobs</h1>
                        <JobForm />

                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Your Current Resume</h1>
                        </Jumbotron>
                        <h3>Your info:</h3>
                        <List>
                            <li>Name:{this.state.name}</li>
                            <li>Address:{this.state.address}</li>
                            <li>Skills:{this.state.skills}</li>
                            <li>Technologies:{this.state.tech}</li>
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
                            {this.state.jobs.map(job =>(
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
                                <br/>
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
