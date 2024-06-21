import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../store/reducer/restaurants'

const BASE_URL = 'https://fake-api-tau.vercel.app/'

type ResponsePayload = {
  orderId: string
}

const API = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'api/efood/restaurantes'
    }),
    purchase: builder.mutation<ResponsePayload, PurchasePayload>({
      query: (body) => ({
        url: 'api/efood/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export default API
export const { useGetRestaurantsQuery, usePurchaseMutation } = API
