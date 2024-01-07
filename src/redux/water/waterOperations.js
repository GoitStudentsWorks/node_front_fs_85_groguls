import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { instance } from '../auth/operations';

export const getMonthInfo = createAsyncThunk(
  'water/getMonthInfo',
  async (currentMonth, thunkAPI) => {
    try {
      const { data } = await instance.get(`/water/${currentMonth}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTodayInfo = createAsyncThunk(
  'today/getTodayInfo',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/water');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (newRecord, thunkAPI) => {
    try {
      const { data } = await instance.post('/water', {
        ...newRecord,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/water/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/editWater',
  async ({ newWater, id }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/water/${id}`, {
        newWater,
        id,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
