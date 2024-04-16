import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// firebase imports
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

// firebase

const firebaseConfig = {
  apiKey: "AIzaSyA6nZCgiOPEiXCnIcjRDqhGepx98NP1su8",
  authDomain: "kraftbase-2de96.firebaseapp.com",
  projectId: "kraftbase-2de96",
  storageBucket: "kraftbase-2de96.appspot.com",
  messagingSenderId: "263731969493",
  appId: "1:263731969493:web:6c759e7e5982a54a54915c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// intial state
const initialState = {
  user: {},
  isLoding: false,
  error: null,
};

export const signInUserWithGoogle = createAsyncThunk(
  "authentication/signInUserWithGoogle",
  async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      return response.user;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);

export const signInUserWithEmail = createAsyncThunk(
  "authentication/signInUserWithEmail",
  async ({ email, password }) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response.user;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);

export const createUserWithEmail = createAsyncThunk(
  "authentication/createUserWithEmail",
  async ({ email, password, userName }) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        return {
          values:response.user,
          name: userName
        }
      }
    } catch (err) {
      console.error(err);
      throw new Error(err + ", please try again");
    }
  }
);

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      if (Object.values(action.payload) !== 0) {
        const profile = {
          id: action.payload.uid,
          userName: action.payload.displayName
            ? action.payload.displayName
            : "Rajeev Kumar",
          email: action.payload.email,
        };
        return {
          ...state,
          user: {
            profile: profile,
            notStartedNotes: [],
            inProgressNotes: [],
            blockedNotes: [],
            doneNotes: [],
          },
        };
      } else {
        return {
          ...state,
          user: {},
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUserWithGoogle.pending, (state, action) => {
        console.log("Authentication Pending");
        state.isLoding = true;
        state.error = null;
      })
      .addCase(signInUserWithGoogle.fulfilled, (state, action) => {
        const profile = {
          id: action.payload.uid,
          userName: action.payload.displayName
            ? action.payload.displayName
            : "Rajeev Kumar",
          email: action.payload.email,
        };
        return {
          ...state,
          user: {
            profile: profile,
            notStartedNotes: [],
            inProgressNotes: [],
            blockedNotes: [],
            doneNotes: [],
          },
          isLoding: false,
        };
      })
      .addCase(signInUserWithGoogle.rejected, (state, action) => {
        console.log("Authentication Rejected");
        state.isLoding = false;
        state.error = action.error.message;
      })
      .addCase(signInUserWithEmail.fulfilled, (state, action) => {
        (state.isLoding = false), (state.user = action.payload);
      })
      .addCase(signInUserWithEmail.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.error.message;
      })
      .addCase(createUserWithEmail.fulfilled, (state, action) => {
        const profile = {
          id: action.payload.values.uid,
          userName: action.payload.values.displayName
            ? action.payload.displayName
            : action.payload.name,
          email: action.payload.values.email,
        };
        return {
          ...state,
          user: {
            profile: profile,
            notStartedNotes: [],
            inProgressNotes: [],
            blockedNotes: [],
            doneNotes: [],
          },
          isLoding: false,
        };
      })
      .addCase(createUserWithEmail.rejected, (state, action) => {
        console.log("Authentication Failed");
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
export const { updateUser } = authSlice.actions;
