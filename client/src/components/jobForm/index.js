import React, {Component } from "react";
import API from '../../utils/API';
import {Input, TextArea, FormBtn} from "../Form";
import JobCard from "../jobCard/"


class JobForm extends Component {
  state = {
    jobs: [],
    companyName: "",
    title: "",
    jobAddress: "",
    start: "",
    end: "",
    jobTech: "",
    jobSkills:"",
    majorAccomplish: "",
    project: "",

  }
  componentDidMount() {

    const currentRes = this.state.currentResume;
    console.log(this.props);
}
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,

    });
  };

  jobFormSubmit = event => {
     event.preventDefault();
    // if (this.state.companyName && this.state.title && this.state.jobAddress && this.state.start) {
    const currentRes = this.props.currentRes;
  
    console.log(this.props);
    const { companyName, title, start, jobAddress, jobSkills, end,jobTech,majorAccomplish,project } = this.state;
    const body = {
      companyName,
      currentRes,
      title,
      jobAddress,
      jobSkills,
      start,
      end,
      jobTech,
      majorAccomplish,
      project
    }
      API.saveJob(body)
        .then(res => this.props.reloadJobs(currentRes))
        .catch(err => console.log(err));
    // }
  };

 


    // return (
    //   // <ul>{listItems}</ul>
    // );
  




  render() {

    return (
      <div>
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
          value={this.state.skills}
          onChange={this.handleInputChange}
          name="jobSkills"
          placeholder="Job Skills"
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
          // disabled={!(this.state.compnayName && this.state.title && this.state.address && this.state.skills && this.state.start && this.state.end)}
          onClick={this.jobFormSubmit}

        >
          Submit new Job
      </FormBtn>
      </div>
    )
  }
}

export default JobForm;
