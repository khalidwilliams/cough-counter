import React, {Component} from 'react';
import RadioInput from './RadioInput/RadioInput';

class CoughForm extends Component {
  constructor() {
    super();
    this.yesOrNoOptions= [
      {label: 'Yes'},
      {label: 'No'}
    ];
    this.indoorOutdoorOptions = [
      {label: 'Indoor'},
      {label: 'Outdoor'}
    ];
  }

//  revealProductiveFollowUps() {
//    return (
//      <div className="question-wrapper"> 
//        <h3>Mucus Color?</h3>
//      <div className="question-wrapper"> 
//        <h3>Blood?</h3>
//        <div className="radio-container">
//          <input id="blood-yes" type="radio"  name="blood"/>
//          <label htmlFor="blood-yes">Yes</label>
//        </div>
//        <div className="radio-container">
//          <input id="blood-no" type="radio"  name="blood"/>
//          <label htmlFor="blood-no">No</label>
//        </div>
//      </div>
//    )
//  }
  

  render() {
    return (
      <>
        <h2 id="new-cough-label">New Cough</h2>
        <form aria-labelledby="new-cough-label">
          <RadioInput 
            heading="Productive?"
            options={this.yesOrNoOptions}
          />
          <RadioInput 
            heading="Wheezing?"
            options={this.yesOrNoOptions}
          />
          <RadioInput 
            heading="Location?"
            options={this.indoorOutdoorOptions}
          />
          <button type="submit">Add Cough</button>
        </form>
      </>
    );
  }
}


export default CoughForm;
