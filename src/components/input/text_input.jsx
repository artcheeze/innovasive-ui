import React from 'react'
import PropTypes from 'prop-types'

export function TextInput(props) {
  /**
  |--------------------------------------------------
  | STATE
  |--------------------------------------------------
  */

  /**
  |--------------------------------------------------
  | HANDLER
  |--------------------------------------------------
  */
  function colorGenerator() {
    if (props.error) {
      return ' border-input-error bg-white '
    } else {
      if (props.disabled) {
        return ' border-input-default bg-input-disabled cursor-not-allowed '
      } else {
        return ' border-input-default bg-white focus:border-focused '
      }
    }
  }
  /**
  |--------------------------------------------------
  | RENDER
  |--------------------------------------------------
  */

  return (
    <div>
      <div
        className={` ${
          props.label
            ? ' opacity-100 transform translate-y-0'
            : ' opacity-0 transform -translate-y-2'
        } transition-all duration-300 ease-in-out label-input`}
        style={{
          marginBottom: '6px'
        }}
      >
        {props.label}&nbsp;
      </div>
      <input
        name={props.name}
        className={`border ${colorGenerator(
          props
        )} transition-all duration-300 ease-in-out outline-none  `}
        style={{
          width:
            props.overrides?.width || false ? props.overrides.width : '100%',
          height:
            props.overrides?.height || false ? props.overrides.width : '46px',
          borderRadius: props.rounded ? '3px' : '0px',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={props.onChange}
        value={props.value}
      />
      <div
        className={`h-4 text-input-error ${
          props.error
            ? ' opacity-100 transform translate-y-0'
            : ' opacity-0 transform -translate-y-2'
        } transition-all duration-300 ease-in-out label-input`}
        style={{
          marginTop: '6px'
        }}
      >
        {props.error}
      </div>
    </div>
  )
}

/**
|--------------------------------------------------
| DEFAULT PROPS
|--------------------------------------------------
*/

TextInput.propTypes = {
  name: PropTypes.any,
  value: PropTypes.any,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  rounded: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  overrides: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  })
}

TextInput.defaultProps = {
  name: '',
  label: '',
  error: null,
  onChange: () => {},
  rounded: false,
  placeholder: '',
  disabled: false,
  value: '',
  overrides: {
    width: null,
    height: null
  }
}
