import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignedInMenu = ({ signOut }) => {
    return (
        <Menu.Item position="right">
            <Image avatar spaced="right" src='/assets/user.png' />
            <Dropdown pointing="top left" text="Username">
                <Dropdown.Menu>
                    <Dropdown.Item text="Create Cleanup" icon="plus" />
                    <Dropdown.Item text="My Cleanups" icon="calendar" />
                    <Dropdown.Item text="My Neighbors" icon="users" />
                    <Dropdown.Item text="My Profile" icon="user" />
                    <Dropdown.Item as={Link} to='/settings' text="Settings" icon="settings" />
                    <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
};

export default SignedInMenu;

