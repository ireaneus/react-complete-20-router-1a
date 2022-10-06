import QuoteList from '../components/quotes/QuoteList';

const DUMMY_VERSES = [
  {
    id: 'v1',
    author: 'John 1:1',
    text: 'In the beginning was the Word, and the Word was with God, and the Word was God',
  },
  { id: 'v2', author: 'John 1:2', text: 'He was in the beginning with God' },
];

const AllVerses = () => {
  return <QuoteList quotes={DUMMY_VERSES} />;
};
export default AllVerses;
