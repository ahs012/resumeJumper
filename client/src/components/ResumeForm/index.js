import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Form";
import JobForm from "../jobForm";

function ResumeForm (props) {
    if (props.type==="info"){
    return (
        <form>
        <Input
            value={props.name}
            onChange={props.handleInputChange}
            name="name"
            placeholder="Title (required)"
        />
        <Input
            value={props.skills}
            onChange={props.handleInputChange}
            name="skills"
            placeholder="enter your skills"
        />
        <Input
            value={props.address}
            onChange={props.handleInputChange}
            name="address"
            placeholder="Your Address"
        />
        <Input
            value={props.tech}
            onChange={props.handleInputChange}
            name="tech"
            placeholder="Technologies known"
        />
        <FormBtn
            disabled={!(props.name && props.skills && props.address && props.tech)}
            onClick={props.handleFormSubmit}
        >
            Submit resume
        </FormBtn>
      </form>
      

      
    )}
else{
    return(
    <div>
    <h1>Add jobs</h1>
      <JobForm />
      </div>
    )
}
}

export default ResumeForm;