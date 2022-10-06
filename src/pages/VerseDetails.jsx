import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

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
