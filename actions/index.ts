import { getPosts } from "../pages/api";

export const getAnxiousToAdventurousPosts = (count=3) => async (dispatch: Function) => {
  const posts = await getPosts('Anxious%20to%20Adventurous', count);
  dispatch({ type: 'FETCH_ATA_POSTS', payload: posts });
}

export const getMemberingMariPosts = (count=3) => async (dispatch: Function) => {
  const posts = await getPosts('%27membering%20Mari', count);
  dispatch({ type: 'FETCH_MM_POSTS', payload: posts });
}

export const getMyWalkingShoesPosts = (count=3) => async (dispatch: Function) => {
  const posts = await getPosts('My%20Walking%20Shoes', count);
  dispatch({ type: 'FETCH_MWS_POSTS', payload: posts });
}
