import React from 'react'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'

import { FormGroup, InputText, Label, DateForm } from './styles'

const Input = ({ label, type, name, eventInfo, setEventInfo }) => {
  console.log(eventInfo?.startDate)
  console.log(new Date().toUTCString())
  return (
    <FormGroup>
      <Label htmlFor={label}>{label}</Label>
      {type !== 'date' ? (
        <InputText
          name={name}
          type={type}
          // value={}
          placeholder={`Enter ${label}`}
          onChange={(e) =>
            setEventInfo({ ...eventInfo, [e.target.name]: e.target.value })
          }
        />
      ) : (
        // <DateForm>
        <DateForm>
          <Datetime
            className='date'
            onChange={(e) =>
              setEventInfo({
                ...eventInfo,
                [name]: e._d?.toUTCString(),
              })
            }
          />
        </DateForm>
      )}
    </FormGroup>
  )
}

export default Input
