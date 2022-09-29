import React from 'react'

import Image from '../../components/Image'
import eventImage from '../../assets/images/others/eventImage.png'
import {
  EventStyles,
  EventDetails,
  Heading,
  EventContainer,
  EventImage,
  User,
  IconDiv,
  EventInfoRight,
  EventInfo,
  Head,
  SubHead,
} from './styles'
import Icon from '../../components/Icon'

const Event = ({ eventInfo }) => {
  return (
    <EventStyles>
      <EventImage>
        <Image lazyLoad={false} src={eventImage} />
      </EventImage>
      <EventDetails>
        <Heading>{eventInfo.eventName}</Heading>
        <User>
          Hosted by <span>{eventInfo.name}</span>{' '}
        </User>
        <EventContainer>
          <EventInfo>
            {/* <IconDiv> */}
            <Icon size={48} name='calender' />
            {/* </IconDiv> */}
            <EventInfoRight>
              <Head>{eventInfo.startDate}</Head>
              <SubHead>{eventInfo.endDate}</SubHead>
            </EventInfoRight>
            <IconDiv>
              <Icon name='angleRight' />
            </IconDiv>
          </EventInfo>
          <EventInfo>
            {/* <IconDiv> */}
            <Icon size={48} name='location' />
            {/* </IconDiv> */}
            <EventInfoRight>
              <Head>Street name</Head>
              <SubHead>{eventInfo.streetName}</SubHead>
            </EventInfoRight>
            <IconDiv>
              <Icon name='angleRight' />
            </IconDiv>
          </EventInfo>
        </EventContainer>
      </EventDetails>
    </EventStyles>
  )
}

export default Event
