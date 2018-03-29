import React from 'react';
import { Field, reduxForm } from 'redux-form';

let StoryForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Story Title"
          />
        </div>
      </div>
      <div>
        <label># of Seats</label>
        <div>
          <Field
            name="seats"
            component="input"
            type="number"
            placeholder="4"
          />
        </div>
      </div>
      <div>
        <label>Duration</label>
        <div>
          <Field
            name="duration"
            component="input"
            type="number"
            placeholder="2"
          />
        </div>
      </div>
      <div>
        <label htmlFor="complete">Closed</label>
        <div>
          <Field
            name="complete"
            id="complete"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label htmlFor="open">Public</label>
        <div>
          <Field
            name="open"
            id="open"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Type</label>
        <div>
          <Field name="type" component="select">
            <option />
            <option value="0">RoundRobin</option>
            <option value="1">Solo</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Author</label>
        <div>
          <Field name="author" component="select">
            <option />
            <option value="1">Camaromelt</option>
            <option value="2">ButterCup</option>
            <option value="3">Edgar</option>
          </Field>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

StoryForm = reduxForm({
  // a unique name for the form
  form: 'story'
})(StoryForm);

export default StoryForm;

