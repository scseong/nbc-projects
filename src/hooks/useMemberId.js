import { useSelector, useDispatch } from 'react-redux';
import { selectedMember } from 'redux/modules/memberSlice';

export const useMemberId = () => {
  const { memberId } = useSelector(({ member }) => member);
  const dispatch = useDispatch();
  const setMemberId = (name) => dispatch(selectedMember(name));

  return { memberId, setMemberId };
};
