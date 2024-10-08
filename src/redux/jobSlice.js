import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],  
        singleJob: null, 
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        // Uncomment other reducers if needed
        // setAllAdminJobs: (state, action) => {
        //     state.allAdminJobs = action.payload;
        // },
        // setSearchJobByText: (state, action) => {
        //     state.searchJobByText = action.payload;
        // },
        // setAllAppliedJobs: (state, action) => {
        //     state.allAppliedJobs = action.payload;
        // },
        // setSearchedQuery: (state, action) => {
        //     state.searchedQuery = action.payload;
        // }
    }
});

export const { 
    setAllJobs, 
    setSingleJob, 
    // Uncomment other actions if needed
    // setAllAdminJobs,
    // setSearchJobByText, 
    // setAllAppliedJobs,
    // setSearchedQuery 
} = jobSlice.actions;

export default jobSlice.reducer;
