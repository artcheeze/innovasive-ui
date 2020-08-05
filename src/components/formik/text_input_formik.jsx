import React from 'react'
import { Field } from 'formik'

import { TextInput } from '../input/text_input'

export function TextInputFormik(props) {
  return (
    <Field name={props.name}>
      {({ field, form, meta }) => (
        <TextInput
          name={props.name}
          error={meta.error}
          label={props.label}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onChange={field.onChange}
          value={field.value}
          rounded={props.rounded}
          overrides={props.overrides}
        />
      )}
    </Field>
  )
}
