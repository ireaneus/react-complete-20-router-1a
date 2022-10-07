import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewVerse = () => {
  const history = useHistory();

  const addVerseHandler = (verseData) => {
    console.log(verseData);

    history.push('/verses');
  };
  return <QuoteForm onAddQuote={addVerseHandler} />;
};
export default NewVerse;
