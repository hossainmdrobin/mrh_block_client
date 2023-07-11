import apiSlice from "../../api/apiSlice";

export const postApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => `/post/getAllPost`,
      providesTags: ["allPost"],
    }),
    getBookmarkedPost: builder.query({
      query: () => ({
        url: `/post/getBookmarkedPost`,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    getSinglePost: builder.query({
      query: (id) => `/post/findPostByItsId/${id}`,
    }),

    createPost: builder.mutation({
      query: (data) => ({
        url: `/post`,
        method: "POST",
        body: data,
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["allPost", "myPost"],
    }),
    bookmarkPost: builder.mutation({
      query: (id) => ({
        url: `/post/bookmark/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["allPost", "myPost"],
    }),
    updatePost: builder.mutation({
      query: ({ data, id }) => ({
        url: `/post/update/${id}`,
        method: "POST",
        body: data,
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["allPost", "myPost"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/post/delete/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    getMyPost: builder.query({
      query: () => ({
        url: `/post`,
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      providesTags: ["myPost"],
    }),

    // COMMENTS
    createComment: builder.mutation({
      query: ({ data, id }) => ({
        url: `/comment/add/${id}`,
        method: "POST",
        body: data,
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetSinglePostQuery,
  useGetBookmarkedPostQuery,
  useCreatePostMutation,
  useGetMyPostQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
  useBookmarkPostMutation,
  useCreateCommentMutation,
} = postApi;
