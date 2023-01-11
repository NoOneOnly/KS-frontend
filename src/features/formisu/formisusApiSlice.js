import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const formisusAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = formisusAdapter.getInitialState()

export const formisusApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFormisus: builder.query({
            query: () => ({
                url: '/klausal/formisus',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedFormisus = responseData.map(formisu => {
                    formisu.id = formisu._id
                    return formisu
                });
                return formisusAdapter.setAll(initialState, loadedFormisus)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Formisu', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Formisu', id }))
                    ]
                } else return [{ type: 'Formisu', id: 'LIST' }]
            }
        }),
        addNewFormisu: builder.mutation({
            query: initialFormisu => ({
                url: '/klausal/formisus',
                method: 'POST',
                body: {
                    ...initialFormisu,
                }
            }),
            invalidatesTags: [
                { type: 'Formisu', id: "LIST" }
            ]
        }),
        updateFormisu: builder.mutation({
            query: initialFormisu => ({
                url: '/klausal/formisus',
                method: 'PATCH',
                body: {
                    ...initialFormisu,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Formisu', id: arg.id }
            ]
        }),
        deleteFormisu: builder.mutation({
            query: ({ id }) => ({
                url: `/klausal/formisus`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Formisu', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetFormisusQuery,
    useAddNewFormisuMutation,
    useUpdateFormisuMutation,
    useDeleteFormisuMutation,
} = formisusApiSlice

// returns the query result object
export const selectFormisusResult = formisusApiSlice.endpoints.getFormisus.select()

// creates memoized selector
const selectFormisusData = createSelector(
    selectFormisusResult,
    formisusResult => formisusResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllFormisus,
    selectById: selectFormisuById,
    selectIds: selectFormisuIds
    // Pass in a selector that returns the formisus slice of state
} = formisusAdapter.getSelectors(state => selectFormisusData(state) ?? initialState)