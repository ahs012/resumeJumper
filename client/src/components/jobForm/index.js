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
    currentResume:this.props.currentRes
  }
  componentDidMount() {
    const currentRes = this.props.currentResume;
    // this.loadJobs(currentRes);
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
    const currentRes = this.state.currentResume;
  
    console.log(currentRes);
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
        .then(res => this.loadJobs())
        .catch(err => console.log(err));
    // }
  };

  loadJobs(props) {
    const currentRes = this.props.currentResume;
    console.log(currentRes);
    API.getJobByResume(currentRes)
      .then(res => {
        console.log(res.data);
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
        {/* {this.state.jobs.map((job) =>
          // <JobCard
          // companyName={job.companyName}
          // title={job.title}
          // jobAddress={job.jobAddress}
          // start={job.start}
          // end={job.end}
          // jobTech={job.jobTech}
          // jobSkills={job.jobSkills}
          // project={job.project}
          // majorAccomplish={job.majorAccomplish}
          // />
          // <li>{job.companyName}</li>
          
        )} */}
      </div>
    )
  }
}

export default JobForm;
