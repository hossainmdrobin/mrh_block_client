import apiSlice from "../../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        signupWithEmailAndPassword: builder.mutation({            
            query: (data) => ({
                url:`/auth/signup`,
                method:"POST",  
                body:data              
            })
        }),
        loginWithEmailAndPassword: builder.mutation({            
            query: (data) => ({
                url:`/auth/login`,
                method:"POST",  
                body:data              
            })
        }),
        createProfile: builder.mutation({            
            query: (data) => ({
                url:`/profile`,
                method:"POST",  
                body:data              
            })
        }),
        updateProfilePic: builder.mutation({            
            query: (data) => ({
                url:`/profile/updateProfilePic`,
                method:"POST",  
                body:data ,
                headers:{
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
        }),
        updateProfile: builder.mutation({            
            query: (data) => ({
                url:`/profile/updateDetail`,
                method:"POST",  
                body:data ,
                headers:{
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
        }),
        getProfile: builder.query({            
            query: () => ({
                url:`/profile`,
                method:"GET",  
                headers:{
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }     
            })
        }),        
    })
})

export const { useLoginWithEmailAndPasswordMutation,useGetProfileQuery,useSignupWithEmailAndPasswordMutation,useCreateProfileMutation,useUpdateProfilePicMutation,useUpdateProfileMutation } = authApi;