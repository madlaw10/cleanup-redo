import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../menus/SignedOutMenu';
import SignedInMenu from '../menus/SignedInMenu';

class NavBar extends Component {
    state = {
        authenticated: false
    };

    handleSignIn = () => this.setState({ authenticated: true });
    handleSignOut = () => {
        this.setState({ authenticated: false })
        this.props.history.push('/')
    };

    render() {
        const { authenticated } = this.state
        return (
            <div>
                <Menu inverted fixed="top">
                    <Container>
                        <Menu.Item as={NavLink} exact to='/' header>
                            <img src="assets/logo_white.png" alt="logo" />
                            Home
                          </Menu.Item>
                        <Menu.Item as={NavLink} to='/cleanups' name="Cleanups" />
                        <Menu.Item as={NavLink} to='/users' name="Neighbors" />
                        <Menu.Item>
                            <Button
                                as={Link}
                                to='/createCleanup'
                                basic
                                inverted
                                floated="right"
                                content="Create Cleanup"
                            />
                        </Menu.Item>
                        {authenticated ? <SignedInMenu signOut={this.handleSignOut} /> : <SignedOutMenu signIn={this.handleSignIn} />}
                    </Container>
                </Menu>
            </div>
        )
    }
};

export default withRouter(NavBar);
