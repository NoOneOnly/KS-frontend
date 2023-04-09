import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = "http://localhost:4500"

export const getDokumens = createAsyncThunk("dokumens/getDokumens", async () => {
    const response = await axios.get(`${BASE_URL}/getfiles`, { "userId": "hjasdgas" })

    return response.data
})
export const downloadDokumenById = createAsyncThunk("dokumens/downloadDokumenById", async (id) => {
    const response = await axios.get(`${BASE_URL}/files/${id}`)

    return response.data
})

export const deleteDokumen = createAsyncThunk("dokumens/deleteDokumen", async (id) => {
    await axios.delete(`${BASE_URL}/files/${id}`)
    return id
})

const dokumenEntitiy = createEntityAdapter({
    selectId: (dokumen) => dokumen._id,


})

const dokumenSlice = createSlice({
    name: "dokumen",
    initialState: dokumenEntitiy.getInitialState(),
    extraReducers: {
        [getDokumens.fulfilled]: (state, action) => {
            dokumenEntitiy.setAll(state, action.payload)
        },
        [deleteDokumen.fulfilled]: (state, action) => {
            dokumenEntitiy.removeOne(state, action.payload)
        },
        [downloadDokumenById.fulfilled]: (state, action) => {
            dokumenEntitiy.setOne(state, action.payload)
        },
    }
})

export const dokumenSelector = dokumenEntitiy.getSelectors(state => state.dokumen)
export default dokumenSlice.reducer