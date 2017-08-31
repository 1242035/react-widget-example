import React from 'react'
import { Field , reduxForm } from 'redux-form'

const validate = values => {
    const errors = {}
    
    if (!values.email) {
      errors.email = 'Required'
    } 
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors;
  }
  
  const warn = values => {
    const warnings = {}
    
    return warnings;
  }
  
  const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) =>
    <div className={"form-group"+ (error && touched ? ' has-error': '') }>
        <label className="form-control-label col-md-2">{label}</label>
        <div className="col-md-10">
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && ((error && <span className="help-block">{error}</span>) || (warning &&<span className="help-block">{warning}</span>))}
        </div>
    </div>

let SignInForm = props => {
    const { handleSubmit, submitting } = props
    return (
        <form onSubmit={ handleSubmit }>
            <Field name="email" component={renderField} type="email" label="Email" className="form-control"/>
            <Field name="password" component={renderField} type="password" label="Password" className="form-control"/>
            <div className="form-group">
                <div className="col-md-10 col-md-offset-2">
                    <button disabled={submitting} type="submit" className="btn btn-primary pull-right">Submit</button>
                </div>
            </div>
            
        </form>
    )
}

SignInForm = reduxForm({
  form: 'signin',
  validate,
  warn
})(SignInForm);
export default SignInForm;