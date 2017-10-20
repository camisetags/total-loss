/* eslint no-console: 0 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getDeckList } from '../../actions';
import DeckSelectComponent from './component';
import Loading from '../../../Loading';

class DeckSelect extends React.Component {
  static get propTypes() {
    return {
      fetchDecks: PropTypes.func.isRequired,
      decks: PropTypes.arrayOf(PropTypes.object).isRequired,
      deck: PropTypes.object,
    };
  }

  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    if (this.props.deck.list) {
      return <DeckSelectComponent {...this.props} />;
    }
    return <Loading />;
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

DeckSelect.defaultProps = {
  deck: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelect);
