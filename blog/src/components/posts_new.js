import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type="text" className="form-control" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }
  onSubmit(values) {
    console.log(values);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate inputs from values 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters';
  }
  if (!values.categories) {
    errors.categories = 'Enter at least 1 category!';
  }
  if (!values.content) {
    errors.content = 'Enter some content!';
  }
  // If errors the for is fine to submit
  // If errors has any properties, reduxForm assumes form is invalid
  return errors;
}

export default reduxForm({
  // validate: validate
  validate,
  form: 'PostsNewForm'
})(PostsNew);
