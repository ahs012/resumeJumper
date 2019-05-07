import React from 'react';

import axios from 'axios';

export default class SkillList extends React.Component {
    state = {
      skills: []
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
}