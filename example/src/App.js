import React, { useState } from 'react'

import { Formik, Form } from 'formik'

import { TextInputFormik } from 'innovasive-ui'
import 'innovasive-ui/dist/index.css'

const App = () => {
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [value, setValue] = useState('')
  const [overrides, setOverrides] = useState({ width: null, height: null })

  return (
    <div className='flex h-screen bg-gray-300 justify-center items-center'>
      <Formik enableReinitialize={true} initialValues={{ testText: '' }}>
        {(fieldProp) => (
          <div className='w-4/5 bg-white py-4 grid grid-cols-12 gap-4 px-20 rounded-md shadow-md'>
            {/* ------------------------------------------------------------------------------------------------------------ */}
            <div className='col-span-12  mt-20'>
              <Form>
                <TextInputFormik
                  name='testText'
                  label='Text Input - 01'
                  placeholder='fill some valueaaa'
                  disabled={disabled}
                  rounded
                  overrides={overrides}
                />
              </Form>
            </div>

            {/* ------------------------------------------------------------------------------------------------------------ */}
            <div className='flex col-span-12'>
              <p
                className='w-24 text-center h-6 bg-gray-400 rounded-full text-white cursor-pointer mr-2 select-none'
                onClick={() => {
                  setDisabled(false)
                  setError(null)
                  setOverrides({ width: null, height: null })
                }}
              >
                DEFAULT
              </p>
              <p
                className='w-24 text-center h-6 bg-gray-400 rounded-full text-white cursor-pointer mr-2 select-none'
                onClick={() => {
                  if (error) {
                    setError(null)
                  } else {
                    setError('Tested Error !!')
                    fieldProp.setFieldError('testText', 'asdasddasdd')
                  }
                }}
              >
                ERROR
              </p>
              <p
                className='w-24 text-center h-6 bg-gray-400 rounded-full text-white cursor-pointer mr-2 select-none'
                onClick={() => setDisabled(!disabled)}
              >
                DISABLE
              </p>
              <p
                className='w-24 text-center h-6 bg-gray-400 rounded-full text-white cursor-pointer mr-2 select-none'
                onClick={() =>
                  setOverrides({
                    width: (Math.random() * 800 + 100).toFixed(0) + 'px',
                    height: null
                  })
                }
              >
                OVERRIDES
              </p>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default App
