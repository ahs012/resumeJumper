import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

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
        this.loadJob();
    }

    loadResume = () => {
        API.getResume()
            .then(res => {
                console.log(res);
                this.setState({ resume: res.data });
            })
            .catch(err => console.log(err));
    };

    loadJob = () => {
        API.getJob()
            .then(res => {
                console.log(res);
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
        if (this.state.name && this.state.skills && this.state.address && this.state.tech) {
            API.saveResume({
                name: this.state.name,
                address: this.state.address,
                skills: this.state.skills,
                tech: this.state.tech
            })
                .then(res => this.loadresume())
                .catch(err => console.log(err));
        }
    };

    jobFormSubmit = event => {
       

    }

    render() {
        console.log(this.state.resume);
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
                        <jobForm>
                            <Input
                                value={this.state.companyName}
                                onChange={this.handleInputChange}
                                name="companyName"
                                placeholder="Company Name"
                            />
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Job Title"
                            />
                            <Input
                                value={this.state.address}
                                onChange={this.handleInputChange}
                                name="jobAddress"
                                placeholder="Job Address"
                            />
                            <Input
                                value={this.state.start}
                                onChange={this.handleInputChange}
                                name="start"
                                placeholder="Start Date"
                            />
                            <Input
                                value={this.state.end}
                                onChange={this.handleInputChange}
                                name="end"
                                placeholder="End Date"
                            />
                            <Input
                                value={this.state.tech}
                                onChange={this.handleInputChange}
                                name="jobTech"
                                placeholder="Technologies Used"
                            />
                            <Input
                                value={this.state.majorAccomplish}
                                onChange={this.handleInputChange}
                                name="majorAccomplish"
                                placeholder="Major Accomplishment Achieved"
                            />
                            <Input
                                value={this.state.project}
                                onChange={this.handleInputChange}
                                name="project"
                                placeholder="Big project you've worked on"
                            />
                            <FormBtn
                                disabled={!(this.state.compnayName && this.state.title && this.state.address && this.state.skills && this.state.start && this.state.end)}
                                onClick={this.jobFormSubmit}
                            >
                                Submit new Job
                            </FormBtn>

                        </jobForm>

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
                        <List>
                            {this.state.jobs.map(job =>(
                                <ListItem key={job.index}>
                                <li>Company Name:{job.companyName}</li>
                                <li>Title:{job.title}</li>
                                <li>Address:{job.jobAddress}</li>
                                <li>Skills:{job.skills}</li>
                                <li>Start Date:{job.start}</li>
                                <li>End Date:{job.end}</li>
                                <li>Technology:{job.jobTech}</li>
                                <li>Major Accomplishment:{job.majorAccomplish}</li>
                                <li>Big Project:{job.project}</li>
                                </ListItem>

                            ))}
                        </List>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Resume;
