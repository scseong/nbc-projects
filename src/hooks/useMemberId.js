import { useSelector, useDispatch } from 'react-redux';
import { changeMemberId } from 'redux/modules/Member';

export const useMemberId = (name) => {
  const { memberId } = useSelector(({ member }) => member);
  const dispatch = useDispatch();
  const setMemberId = () => dispatch(changeMemberId(name));

  return [memberId, setMemberId];
};
