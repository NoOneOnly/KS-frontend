import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const documentsAdapter = createEntityAdapter({})

const initialState = documentsAdapter.getInitialState()

export const documentsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDocuments: builder.query({
            query: () => ({
                url: '/documents',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedDocuments = responseData.map(document => {
                    document.id = document._id
                    return document
                });
                return documentsAdapter.setAll(initialState, loadedDocuments)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Document', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Document', id }))
                    ]
                } else return [{ type: 'Document', id: 'LIST' }]
            }
        }),
        addNewDocument: builder.mutation({
            query: initialDocumentData => ({
                url: '/documents',
                method: 'POST',
                body: {
                    ...initialDocumentData,
                }
            }),
            invalidatesTags: [
                { type: 'Document', id: "LIST" }
            ]
        }),
        updateDocument: builder.mutation({
            query: initialDocumentData => ({
                url: '/documents',
                method: 'PATCH',
                body: {
                    ...initialDocumentData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Document', id: arg.id }
            ]
        }),
        deleteDocument: builder.mutation({
            query: ({ id }) => ({
                url: `/documents`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Document', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetDocumentsQuery,
    useAddNewDocumentMutation,
    useUpdateDocumentMutation,
    useDeleteDocumentMutation,
} = documentsApiSlice

// returns the query result object
export const selectDocumentsResult = documentsApiSlice.endpoints.getDocuments.select()

// creates memoized selector
const selectDocumentsData = createSelector(
    selectDocumentsResult,
    documentsResult => documentsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllDocuments,
    selectById: selectDocumentById,
    selectIds: selectDocumentIds
    // Pass in a selector that returns the documents slice of state
} = documentsAdapter.getSelectors(state => selectDocumentsData(state) ?? initialState)