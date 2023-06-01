import { nanoid } from 'nanoid';
import {
  InputWrapper,
  FilterInput,
  FilterLabel,
  AddContactButton,
  FilterWrapper,
} from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/filterSlice';
import { FaUserPlus } from 'react-icons/fa';

export const Filter = ({ toggleModal }) => {
  const filterId = nanoid();
  const filterValue = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <FilterLabel htmlFor={filterId}>Filter contacts by name</FilterLabel>
      <InputWrapper>
        <FilterInput
          autoComplete="off"
          type="text"
          id={filterId}
          name="filter"
          value={filterValue}
          onChange={e => {
            dispatch(filter(e.currentTarget.value));
          }}
        />
        <AddContactButton onClick={toggleModal} data-open-modal>
          <FaUserPlus size="20px" />
        </AddContactButton>
      </InputWrapper>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
