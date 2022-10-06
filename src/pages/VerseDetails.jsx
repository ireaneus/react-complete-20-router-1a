import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const DUMMY_VERSES = [
  {
    id: 'v1',
    author: 'John 1:1',
    text: 'In the beginning was the Word, and the Word was with God, and the Word was God',
  },
  { id: 'v2', author: 'John 1:2', text: 'He was in the beginning with God' },
];

const VerseDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1>Verse Detail</h1>
      <p>{params.verseId}</p>
      <Route path={`/verses/${params.verseId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};
export default VerseDetails;
