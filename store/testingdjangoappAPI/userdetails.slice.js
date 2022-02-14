import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_userdetails_list = createAsyncThunk(
  "userdetails/api_v1_userdetails_list",
  async payload => {
    const response = await apiService.api_v1_userdetails_list(payload)
    return response.data
  }
)
export const api_v1_userdetails_create = createAsyncThunk(
  "userdetails/api_v1_userdetails_create",
  async payload => {
    const response = await apiService.api_v1_userdetails_create(payload)
    return response.data
  }
)
export const api_v1_userdetails_read = createAsyncThunk(
  "userdetails/api_v1_userdetails_read",
  async payload => {
    const response = await apiService.api_v1_userdetails_read(payload)
    return response.data
  }
)
export const api_v1_userdetails_update = createAsyncThunk(
  "userdetails/api_v1_userdetails_update",
  async payload => {
    const response = await apiService.api_v1_userdetails_update(payload)
    return response.data
  }
)
export const api_v1_userdetails_partial_update = createAsyncThunk(
  "userdetails/api_v1_userdetails_partial_update",
  async payload => {
    const response = await apiService.api_v1_userdetails_partial_update(payload)
    return response.data
  }
)
export const api_v1_userdetails_delete = createAsyncThunk(
  "userdetails/api_v1_userdetails_delete",
  async payload => {
    const response = await apiService.api_v1_userdetails_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userdetailsSlice = createSlice({
  name: "userdetails",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_userdetails_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userdetails_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_userdetails_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userdetails_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userdetails_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_userdetails_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userdetails_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userdetails_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_userdetails_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userdetails_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userdetails_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_userdetails_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userdetails_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userdetails_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_userdetails_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userdetails_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userdetails_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_userdetails_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_userdetails_list,
  api_v1_userdetails_create,
  api_v1_userdetails_read,
  api_v1_userdetails_update,
  api_v1_userdetails_partial_update,
  api_v1_userdetails_delete,
  slice: userdetailsSlice
}
