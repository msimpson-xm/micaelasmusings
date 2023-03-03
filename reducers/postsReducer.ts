
const postsReducer = (state = {}, action: { type: string; payload: any | null; }) => {
  switch(action.type) {
    case 'FETCH_ATA_POSTS':
      return {
        ...state,
        anxiousToAdventurous: {
          ...state,
          posts: action.payload,
        }
      };
    case 'FETCH_MM_POSTS':
      return {
        ...state,
        memberingMari: {
          ...state,
          posts: action.payload,
        }
      };
    case 'FETCH_MWS_POSTS':
      return {
        ...state,
        myWalkingShoes: {
          ...state,
          posts: action.payload,
        }
      };
    default: 
      return state;
  }
}

export default postsReducer;
