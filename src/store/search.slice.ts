import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchValue: (_, action: PayloadAction<string>) => {
      return action.payload
    },
  },
})

export const { actions, reducer } = searchSlice
