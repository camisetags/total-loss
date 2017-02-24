import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function requireUsers(ComposedComponent) {
	class RequireUsers extends Component {	
		static contextTypes = {
			router: React.PropTypes.object
		}

		componentWillMount() {
			if (!this.props.users || this.props.users.length < 2) {
				this.context.router.push('/');
			}
		}

		render() {
			return <ComposedComponent { ...this.props } />
		}
	}

	function mapStateToProps(state) {
		return { users: state.users };
	}

	return connect(mapStateToProps)(RequireUsers);
}