import React from 'react';

export default class EmailPasswordForm extends React.Component {
  constructor(){
    super();
  }


  render(){
    return (
      <form onSubmit={this.props.onSubmitHandle}>
        <div class="form-group">
          <label>Email: <input type="email" id="email" placeholder="Email" className='form-control'/></label>
        </div>
        <div class="form-group">
          <label>Password: <input type="password" id="password" placeholder="Password" className='form-control'/></label>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="submit">{this.props.submitBtnLabel}</button>
        </div>
      </form>
    )
  }
}

EmailPasswordForm.propTypes = {
  onSubmitHandle : React.PropTypes.func.isRequired,
  submitBtnLabel : React.PropTypes.string.isRequired,
}

EmailPasswordForm.getDefaultProps = {
    submitBtnLabel: 'Submit',
}
