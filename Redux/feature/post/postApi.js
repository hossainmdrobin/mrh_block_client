import apiSlice from "../../api/apiSlice";

export const postApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllPost: builder.query({
            query: ()=>`/posts`,            
        })
    })
})

export const { useGetAllPostQuery } = postApi;