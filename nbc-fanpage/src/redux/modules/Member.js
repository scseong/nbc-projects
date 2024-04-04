import { MEMBERS } from 'constants/member';

const initialState = {
  memberId: MEMBERS[0].englishName,
};

const CHANGE_MEMBERID = 'CHANGE_MEMBERID';

export const changeMemberId = (memberId) => ({
  type: CHANGE_MEMBERID,
  memberId,
});

const member = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MEMBERID:
      return { memberId: action.memberId };
    default:
      return state;
  }
};

export default member;
