import React, {Component} from 'react';
import RadioInput from '../RadioInput/RadioInput';
import SelectBox from '../SelectBox/SelectBox';
import StyledFormContainer from '../StyledComponents/StyledForm';

class CoughForm extends Component {
  constructor() {
    super();
    this.state = {
      productive: '',
      wheezing: '',
      location: '',
      blood: '',
      mucus: ''
    }

    this.yesOrNoOptions= [
      {label: 'Yes'},
      {label: 'No'}
    ];
    this.indoorOutdoorOptions = [
      {label: 'Indoor'},
      {label: 'Outdoor'}
    ];
  }

  formChangeHandler = (e) => {
    console.log(e.target);
  }
 
  receiveRadioInput = (answer, name) => {
    this.setState({[name]: answer});
  }



  render() {
    return (
      <StyledFormContainer>
        <h2 id="new-cough-label">New Cough</h2>
        <form aria-labelledby="new-cough-label">
          <RadioInput 
            heading="Productive?"
            options={this.yesOrNoOptions}
            changeHandler={this.receiveRadioInput}
            name="productive"
          />
          {this.state.productive === 'Yes' && (
            <RadioInput 
              heading="Blood?"
              options={this.yesOrNoOptions}
              changeHandler={this.receiveRadioInput}
              name="blood"
            />
          )}
          {this.state.productive === "Yes" && <SelectBox options={[{text: 'Yellow', value:'yellow'}, {text: 'Green', value:'green'}]} labelText="Mucus Color"/>        
          }
          <RadioInput 
            heading="Wheezing?"
            options={this.yesOrNoOptions}
            changeHandler={this.receiveRadioInput}
            name="wheezing"
          />
          <RadioInput 
            heading="Location?"
            options={this.indoorOutdoorOptions}
            changeHandler={this.receiveRadioInput}
            name="location"
          />
          <button type="submit">Add Cough</button>
        </form>
      </StyledFormContainer>
    );
  }
}


export default CoughForm;
