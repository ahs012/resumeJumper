import React, {Component } from "react";
import API from '../../utils/API';
import {Input, TextArea, FormBtn} from "../Form";


class JobForm extends Component {
  state = {
    job: [],
    companyName: "",
    title: "",
    jobAddress: "",
    start: "",
    end: "",
    jobTech: "",
    majorAccomplish: "",
    project: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,

    });
  };

  jobFormSubmit = event => {
    event.preventDefault();
    if (this.state.companyName && this.state.title && this.state.jobAddress && this.state.start && this.state.end) {
      API.saveJob({
        companyName: this.state.companyName,
        title: this.state.title,
        jobAddress: this.state.jobAddress,
        start: this.state.start,
        end: this.state.end,
        jobTech: this.state.jobTech,
        majorAccomplish: this.state.majorAccomplish,
        project: this.state.project
      })
        .then(res => this.loadJobs())
        .catch(err => console.log(err));
    }
  };

  loadJobs(props) {
    API.getJob()
      .then(res => {
        this.setState({ jobs: res.data });
      })
      .catch(err => console.log(err));



    // return (
    //   // <ul>{listItems}</ul>
    // );
  }




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
        {/* {this.state.jobs.map((job) =>
          <li>{job}</li>
        )} */}
      </div>
    )
  }
}

export default JobForm;
