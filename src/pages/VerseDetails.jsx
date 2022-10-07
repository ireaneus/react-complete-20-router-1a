import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
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
  const match = useRouteMatch();

  console.log('useParams', params)
  console.log('useRouteMatch', match);

  const verse = DUMMY_VERSES.find((verse) => verse.id === params.verseId);

  if (!verse) {
    return <p>Verse is not found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={verse.text} author={verse.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};
export default VerseDetails;
