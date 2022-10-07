import { useParams, Route, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_VERSES = [
  {
    id: 'v1',
    author: 'John 1:1',
    text: 'In the beginning was the Word, and the Wor`/verses/${params.verseId}d was with God, and the Word was God',
  },
  { id: 'v2', author: 'John 1:2', text: 'He was in the beginning with God' },
];

const VerseDetails = () => {
  const params = useParams();
  const verse = DUMMY_VERSES.find((verse) => verse.id === params.verseId);

  if (!verse) {
    return <p>Verse is not found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={verse.text} author={verse.author} />
      <Route path={`/verses/${params.verseId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/verses/${params.verseId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/verses/${params.verseId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};
export default VerseDetails;
