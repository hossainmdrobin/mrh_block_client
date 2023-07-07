import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

import { getBaseUrl } from "../../config"

const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl:getBaseUrl,
    }),

    endpoints:(builder)=>({}),
    tagTypes: []

})

export default apiSlice;