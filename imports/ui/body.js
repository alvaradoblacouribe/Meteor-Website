import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './tasks.js';
import './body.html';

Template.body.helpers({ // references to templates (Template.templateName)
  //The body sectio can be referenced in JavaScript with Template.body
  // Think of it as a special parent that can have children templates inside
  // You can pass data into templates by defining helpers
  tasks() {// Define helper called tasks on Template.body
    return Tasks.find({}, {sort: { createdAt: -1} });
  },
});

// Added Template.body.events to listen to the submit event on the form

Template.body.events({ //pass data from Template.body js to events
  // triggered by the user pressing enter inside the imput field
  'submit .new-task' (event) {
      //Prevent default browser from submit
      event.preventDefault();

      //Get value from form element
      const target = event.target; // event target is our form element
      const text = target.text.value; // here you can get the value of our imput
      // Insert a task into the collection
      Tasks.insert ({ //we are adding a task to the tasks collection
        text,
        createdAt: new Date(), //current time
      });

      // Clear form
          target.text.value = '';
        },
      });
