import React, {Component} from 'react';

class CoughForm extends Component {

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
              <input id="productive-no" type="radio" placeholder="Productive" name="productive"/>
              <label htmlFor="productive-no">No</label>
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
