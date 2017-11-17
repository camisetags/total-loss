import sift from 'sift';

export const getSelectedDeck = deckList => sift({ selected: true }, deckList);

export default getSelectedDeck;
