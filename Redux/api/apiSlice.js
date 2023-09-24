import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

import { getBaseUrl } from "../../config"

const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        // baseUrl:"https://mrh-blog-dev.onrender.com",
        baseUrl:'https://mrh-blog-dev.onrender.com'
    }),

    endpoints:(builder)=>({}),
    tagTypes: ['allPost','myPost','bookmarks']

})

export default apiSlice;