import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// firebase imports
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
//profile->(id, userName, email, password)
//notStarted, inProgress, Blocked, done

// firebae

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
const auth = getAuth(app)

const intialState = {
  user: {},
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  intialState,
  reducers: {},
});
