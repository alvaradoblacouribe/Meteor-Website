import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js' ;

import './taks.html';

Template.task.events({
  'click .toggle-checked'() {
    //Set the checked property to the opposite of its current value
    Tasks.update(this._id, { // 'this' refers to an individual task object and the id can be used for a specific document which acts as a selector
      $set: { checked: ! this.checked }, // This parameter uses $set to toggle the checked field -->represents whether the task has been completed
    });
  },
  'clicked .delete'() {
    Tasks.remove(this._id); //this removes that specific (using id) document 
  },
});
