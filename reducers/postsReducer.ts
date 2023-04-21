import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface BlogsState {
  anxiousToAdventurous: {
    posts: Array<Object>
  },
  memberingMari: {
    posts: Array<Object>
  },
  myWalkingShoes: {
    posts: Array<Object>
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

export const { fetchAtaPosts, fetchMmPosts, fetchMwsPosts } = blogsSlice.actions;
export const selectATABlogsState = (state: AppState) => state.blogs.anxiousToAdventurous.posts;
export default blogsSlice.reducer;
