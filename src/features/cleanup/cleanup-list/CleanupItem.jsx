import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import CleanupAttendee from './CleanupAttendee';

class CleanupItem extends Component {
    render() {
        const { cleanup, selectCleanup, deleteCleanup } = this.props;
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={cleanup.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header>{cleanup.title}</Item.Header>
                                <Item.Description>
                                    Hosted by {cleanup.hostedBy}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock" /> {cleanup.date} |
                        <Icon name="marker" /> {cleanup.venue}
                    </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {cleanup.attendees && cleanup.attendees.map(attendee => (
                            <CleanupAttendee key={attendee.id} attendee={attendee} />
                        ))}
                    </List>
                </Segment>
                <Segment clearing>
                    <span>{cleanup.description}</span>
                    <Button
                        onClick={() => deleteCleanup(cleanup.id)}
                        color="red"
                        floated="right"
                        content="Delete"
                    />
                    <Button
                        onClick={() => selectCleanup(cleanup)}
                        color="green"
                        floated="right"
                        content="View"
                    />
                </Segment>
            </Segment.Group>
        )
    }
}

export default CleanupItem;
