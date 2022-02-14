import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sample_list = createAsyncThunk(
  "samples/api_v1_sample_list",
  async payload => {
    const response = await apiService.api_v1_sample_list(payload)
    return response.data
  }
)
export const api_v1_sample_create = createAsyncThunk(
  "samples/api_v1_sample_create",
  async payload => {
    const response = await apiService.api_v1_sample_create(payload)
    return response.data
  }
)
export const api_v1_sample_read = createAsyncThunk(
  "samples/api_v1_sample_read",
  async payload => {
    const response = await apiService.api_v1_sample_read(payload)
    return response.data
  }
)
export const api_v1_sample_update = createAsyncThunk(
  "samples/api_v1_sample_update",
  async payload => {
    const response = await apiService.api_v1_sample_update(payload)
    return response.data
  }
)
export const api_v1_sample_partial_update = createAsyncThunk(
  "samples/api_v1_sample_partial_update",
  async payload => {
    const response = await apiService.api_v1_sample_partial_update(payload)
    return response.data
  }
)
export const api_v1_sample_delete = createAsyncThunk(
  "samples/api_v1_sample_delete",
  async payload => {
    const response = await apiService.api_v1_sample_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const samplesSlice = createSlice({
  name: "samples",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_sample_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sample_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_sample_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sample_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sample_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_sample_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sample_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sample_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_sample_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sample_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sample_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sample_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sample_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sample_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sample_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sample_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sample_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sample_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_sample_list,
  api_v1_sample_create,
  api_v1_sample_read,
  api_v1_sample_update,
  api_v1_sample_partial_update,
  api_v1_sample_delete,
  slice: samplesSlice
}
