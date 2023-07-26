import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { post } from '../pages/Interfaces';
import { getPosts } from "../pages/api";

// Type for our state
export interface BlogsState {
  anxiousToAdventurous: {
    posts: Array<post>
  },
  memberingMari: {
    posts: Array<post>
  },
  myWalkingShoes: {
    posts: Array<post>
  },
}

// Initial state
const initialState: BlogsState = {
  anxiousToAdventurous: {
    posts: []
  },
  memberingMari: {
    posts: []
  },
  myWalkingShoes: {
    posts: []
  },
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    fetchAtaPosts(state, action) {
      state.anxiousToAdventurous.posts = {
        ...state.anxiousToAdventurous.posts,
        ...action.payload
      }
    },
    fetchMmPosts(state, action) {
      state.memberingMari.posts = {
        ...state.memberingMari.posts,
        ...action.payload
      }
    },
    fetchMwsPosts(state, action) {
      state.myWalkingShoes.posts = {
        ...state.myWalkingShoes.posts,
        ...action.payload
      }
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
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
  }
});

export const getAnxiousToAdventurousPosts = createAsyncThunk('posts/getATAPosts', async () => {
  const posts = await getPosts('Anxious%20to%20Adventurous');
  return posts;
})

export const getMemberingMariPosts = createAsyncThunk('posts/getMMPosts', async () => {
  const posts = await getPosts('%27membering%20Mari');
  return posts;
})

export const getMyWalkingShoesPosts = createAsyncThunk('posts/getMWSPosts', async () => {
  const posts = await getPosts('My%20Walking%20Shoes');
  return posts;
})


export const { fetchAtaPosts, fetchMmPosts, fetchMwsPosts } = blogsSlice.actions;
export const selectATABlogsState = (state: AppState) => state.blogs.anxiousToAdventurous.posts;
export const selectMMBlogsState = (state: AppState) => state.blogs.memberingMari.posts;
export const selectMWSBlogsState = (state: AppState) => state.blogs.myWalkingShoes.posts;
export default blogsSlice.reducer;
