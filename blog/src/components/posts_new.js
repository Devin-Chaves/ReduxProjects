import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input type="text" className="form-control" {...field.input} />
        {field.meta.error}
      </div>
    );
  }
  render() {
    return (
      <form>
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
    errors.title = 'Enter at least 1 category!';
  }
  if (!values.content) {
    errors.title = 'Enter some content!';
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
