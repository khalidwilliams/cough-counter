import React, {Component} from 'react';

class CoughForm extends Component {

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
          <div className="question-wrapper"> 
            <h3>Productive?</h3>
            <div className="radio-container">
              <input id="productive-yes" type="radio"  name="productive"/>
              <label htmlFor="productive-yes">Yes</label>
            </div>
            <div className="radio-container">
              <input id="productive-no" type="radio"  name="productive"/>
              <label htmlFor="productive-no">No</label>
            </div>
          </div>
          <div className="question-wrapper"> 
            <h3>Wheezing?</h3>
            <div className="radio-container">
              <input id="wheezing-yes" type="radio"  name="wheezing"/>
              <label htmlFor="wheezing-yes">Yes</label>
            </div>
            <div className="radio-container">
              <input id="wheezing-no" type="radio" name="wheezing"/>
              <label htmlFor="wheezing-no">No</label>
            </div>
          </div>
          <div className="question-wrapper"> 
            <h3>Location</h3>
            <div className="radio-container">
              <input id="location-indoor" type="radio"  name="location"/>
              <label htmlFor="location-indoor">Indoor</label>
            </div>
            <div className="radio-container">
              <input id="location-outdoor" type="radio"  name="location"/>
              <label htmlFor="location-outdoor">Outdoor</label>
            </div>
          </div>
          <button type="submit">Add Cough</button>
        </form>
      </>
    );
  }
}


export default CoughForm;
