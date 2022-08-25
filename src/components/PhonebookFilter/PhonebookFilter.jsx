import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../redux/phonebookActions';
import { Label, Paragraph, WrapperDiv } from './PhonebookFilter.styled';
export default function PhonebookFilter() {
  const dispatch = useDispatch();

  const value = useSelector(state => state.phonebookReducer.filter);

  const handleInput = e => {
    dispatch(filter(e.target.value));
  };

  return (
    <WrapperDiv>
      <Label>
        <Paragraph>Find contacts by name</Paragraph>
        <input type="text" name="search" value={value} onChange={handleInput} />
      </Label>
    </WrapperDiv>
  );
}
