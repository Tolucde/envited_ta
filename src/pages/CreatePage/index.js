import React from 'react'

import Image from '../../components/Image'
import banner from '../../assets/images/others/eventImage.png'
import {
  CreatePageStyles,
  CreatePageImage,
  FormDiv,
  Form,
  Heading,
} from './styles'
import Input from '../../components/Input'
import { Button } from '../Home/styles'
import { Link } from 'react-router-dom'

const CreatePage = ({ eventInfo, setEventInfo }) => {
  return (
    <CreatePageStyles>
      <CreatePageImage>
        <Image lazyLoad={false} src={banner} />
      </CreatePageImage>
      <FormDiv>
        {/* <Heading>Birthday Bash</Heading> */}
        <Form>
          <Heading>Create Your Event</Heading>
          <Input
            eventInfo={eventInfo}
            setEventInfo={setEventInfo}
            label='Your Name'
            type='text'
            name='name'
          />
          <Input
            eventInfo={eventInfo}
            setEventInfo={setEventInfo}
            label='Event Name'
            type='text'
            name='eventName'
          />
          <Input
            eventInfo={eventInfo}
            setEventInfo={setEventInfo}
            label='Event Start Date'
            type='date'
            name='startDate'
          />
          <Input
            eventInfo={eventInfo}
            setEventInfo={setEventInfo}
            label='Event End Date'
            type='date'
            name='endDate'
          />
          <Input
            eventInfo={eventInfo}
            setEventInfo={setEventInfo}
            label='Event Street Name'
            type='address'
            name='streetName'
          />
        </Form>
        <Button as={Link} to='/event'>
          Next
        </Button>
      </FormDiv>
    </CreatePageStyles>
  )
}

export default CreatePage
