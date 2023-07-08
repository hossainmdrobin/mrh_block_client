import apiSlice from "../../api/apiSlice";

export const postApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllPost: builder.query({
            query: ()=>`/post/getAllPost`,            
        }),
        createPost: builder.mutation({            
            query: (data) => ({
                url:`/post`,
                method:"POST",  
                body:data,
                headers:{
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }            
            })
        }),
        getMyPost: builder.query({            
            query: () => ({
                url:`/post`,
                method:"GET",  
                headers:{
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }            
            })
        }),
        
    })
})

export const { useGetAllPostQuery,useCreatePostMutation, useGetMyPostQuery } = postApi;