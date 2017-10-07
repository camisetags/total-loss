/* eslint no-console: 0 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getDeckList } from '../../actions';
import DeckSelectComponent from './component';

class DeckSelect extends React.Component {
  static get propTypes() {
    return {
      fetchDecks: PropTypes.func.isRequired,
      decks: PropTypes.arrayOf(PropTypes.object).isRequired,
    };
  }

  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    return <DeckSelectComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  decks: state.deck.list,
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => {
    dispatch(getDeckList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelect);
