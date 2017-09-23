import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getDeckList } from '../../actions';
import DeckSelectComponent from './component';

const mapStateToProps = state => ({
  deck: state.deck,
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => {
    dispatch(getDeckList());
  },
});

class DeckSelect extends React.Component {
  static propTypes = {
    fetchDecks: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    return <DeckSelectComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelect);
