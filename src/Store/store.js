import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axiosInstance from "../axiosConfig/instanc";

let user = JSON.parse(localStorage.getItem("user"));

const epicState = {
  games: [],
  categories: [],
  loader: false,
  addToCartLoader: false,
  addToCartWishListLoader: false,
  language: "en",
  gameDetails: {},
  loggedIn: user ? true : false,
  token:
    localStorage.getItem("token") !== null
      ? localStorage.getItem("token")
      : null,
  id: user ? user._id : null,
  email: user ? user.email : null,
  displayName: user ? user.displayName : null,
  cart: [],
  wishList: [],
  purchaseHistory: [],
  totalPrice: 0,
};

export const createUser = createAsyncThunk(
  //action type string
  "epic/createUser",
  // callback function
  async (data) => {
    const response = await axiosInstance.post(`/User`, {
      ...data,
    });
    return response.data;
  }
);
export const login = createAsyncThunk(
  //action type string
  "epic/login",
  // callback function
  async (data) => {
    const response = await axiosInstance.post(`/User/login`, {
      ...data,
    });
    return response.data;
  }
);
export const getGameById = createAsyncThunk(
  //action type string
  "epic/getGameById",
  // callback function
  async ({ id }) => {
    const res = await axiosInstance.get(`/Games/${id}`);
    return res.data;
  }
);
export const addToCart = createAsyncThunk(
  //action type string
  "epic/addToCart",
  // callback function
  async ({ userId, gameId }) => {
    const res = await axiosInstance.patch(
      `/User/addToCart/${userId}/${gameId}`
    );
    return res.data;
  }
);
export const updateUserDisplayName = createAsyncThunk(
  //action type string
  "epic/updateUserDisplayName",
  // callback function
  async ({ id, displayName }) => {
    const res = await axiosInstance.patch(`/User/updateUserDisplayName/${id}`, {
      displayName,
    });
    return res.data;
  }
);
export const updatePassword = createAsyncThunk(
  //action type string
  "epic/updatePassword",
  // callback function
  async ({ id, oldPassword, newPassword }) => {
    const res = await axiosInstance.patch(`/User/updatePassword/${id}`, {
      oldPassword,
      newPassword,
    });
    return res.data;
  }
);
export const updateUserEmail = createAsyncThunk(
  //action type string
  "epic/updateUserEmail",
  // callback function
  async ({ id, email }) => {
    const res = await axiosInstance.patch(`/User/updateUserEmail/${id}`, {
      email,
    });
    return res.data;
  }
);
export const getPurchase = createAsyncThunk(
  //action type string
  "epic/getPurchase",
  // callback function
  async ({ userId }) => {
    const res = await axiosInstance.get(`/User/getPurchase/${userId}`);
    return res.data;
  }
);
export const addToPurchase = createAsyncThunk(
  //action type string
  "epic/addToPurchase",
  // callback function
  async ({ userId, cart }) => {
    const res = await axiosInstance.patch(`/User/addToPurchase/${userId}`, {
      cart,
    });
    return res.data;
  }
);
export const addToWishList = createAsyncThunk(
  //action type string
  "epic/addToWishList",
  // callback function
  async ({ userId, gameId }) => {
    const res = await axiosInstance.patch(
      `/User/addToWishList/${userId}/${gameId}`
    );
    return res.data;
  }
);
export const removeFromCart = createAsyncThunk(
  //action type string
  "epic/removeFromCart",
  // callback function
  async ({ userId, gameId }) => {
    const res = await axiosInstance.patch(
      `/User/removeFromCart/${userId}/${gameId}`
    );
    return res.data;
  }
);
export const removeAllFromCart = createAsyncThunk(
  //action type string
  "epic/removeAllFromCart",
  // callback function
  async ({ userId }) => {
    const res = await axiosInstance.patch(`/User/removeAllFromCart/${userId}`);
    return res.data;
  }
);
export const removeFromWishList = createAsyncThunk(
  //action type string
  "epic/removeFromWishList",
  // callback function
  async ({ userId, gameId }) => {
    const res = await axiosInstance.patch(
      `/User/removeFromWishList/${userId}/${gameId}`
    );
    return res.data;
  }
);
export const getCartList = createAsyncThunk(
  "epic/getCartList",
  async ({ id }) => {
    try {
      const res = await axiosInstance.get(`/User/getCart/${id}`);
      return res.data;
    } catch (err) {}
  }
);
export const getWishList = createAsyncThunk(
  "epic/getWishList",
  async ({ id }) => {
    try {
      const res = await axiosInstance.get(`/User/getWishList/${id}`);
      return res.data;
    } catch (err) {}
  }
);
export const getGames = createAsyncThunk(
  //action type string
  "epic/getGames",
  // callback function
  async () => {
    const res = await axiosInstance.get("/Games");
    const data = await res.data;
    return data;
  }
);

export const getCategories = createAsyncThunk(
  "epic/getCategories",
  async () => {
    try {
      const res = await axiosInstance.get("Category");
      return res.data;
    } catch (err) {}
  }
);

const epicSlice = createSlice({
  name: "epic",
  initialState: epicState,
  reducers: {
    changeLang(state, action) {
      state.language = action.payload;
    },
    signOut(state, action) {
      state.loggedIn = false;
      localStorage.clear();
      state.cart = [];
      state.wishList = [];
      console.log("signedOut");
    },
  },
  extraReducers: (builder) => {
    /// getGames
    builder.addCase(getGames.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getGames.fulfilled, (state, action) => {
      state.loader = false;
      state.games = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getGames.rejected, (state) => {});

    /// getCategories
    builder.addCase(getCategories.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loader = false;
      state.categories = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getCategories.rejected, (state) => {});

    /// getGameById
    builder.addCase(getGameById.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getGameById.fulfilled, (state, action) => {
      state.loader = false;
      state.gameDetails = { ...action.payload, photos: action.payload.Photos };
      console.log(action.payload);
    });
    builder.addCase(getGameById.rejected, (state) => {});

    /// createUser
    builder.addCase(createUser.pending, (state) => {});
    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(createUser.rejected, (state) => {});
    /// login
    builder.addCase(login.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loggedIn = true;
      state.id = action.payload.user._id;
      state.loader = false;
      state.displayName = action.payload.user.displayName;
      state.token = action.payload.token;
      state.email = action.payload.user.email;
      state.cart = action.payload.user.cart;
      state.wishList = action.payload.user.wishList;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload);
    });
    builder.addCase(login.rejected, (state) => {});

    /// addToCart
    builder.addCase(addToCart.pending, (state) => {
      state.addToCartLoader = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.addToCartLoader = false;
      state.cart = action.payload.user.cart;
    });
    builder.addCase(addToCart.rejected, (state) => {});
    /// addToWishList
    builder.addCase(addToWishList.pending, (state) => {
      state.addToCartWishListLoader = true;
    });
    builder.addCase(addToWishList.fulfilled, (state, action) => {
      state.addToCartWishListLoader = false;
      state.wishList = action.payload.user.wishList;
    });
    builder.addCase(addToWishList.rejected, (state) => {});

    /// getCartList
    builder.addCase(getCartList.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getCartList.fulfilled, (state, action) => {
      state.loader = false;
      state.cart = action.payload.cart;
      let notFreeGames = state.cart.filter((games) => games.Price !== "free");
      state.totalPrice = notFreeGames.reduce((acc, item) => {
        return acc + Number(item.Price);
      }, 0);
      console.log(action.payload);
    });
    builder.addCase(getCartList.rejected, (state) => {});

    /// getWishList
    builder.addCase(getWishList.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getWishList.fulfilled, (state, action) => {
      state.loader = false;
      state.wishList = action.payload.wishList;
      console.log(action.payload);
    });
    builder.addCase(getWishList.rejected, (state) => {});
    /// removeFromCart
    builder.addCase(removeFromCart.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.loader = false;
      state.cart = action.payload.user.cart;
      console.log(action.payload);
    });
    builder.addCase(removeFromCart.rejected, (state) => {});
    /// removeAllFromCart
    builder.addCase(removeAllFromCart.pending, (state) => {});
    builder.addCase(removeAllFromCart.fulfilled, (state, action) => {
      state.cart = action.payload.user.cart;
    });
    builder.addCase(removeAllFromCart.rejected, (state) => {});
    /// removeFromWishList
    builder.addCase(removeFromWishList.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(removeFromWishList.fulfilled, (state, action) => {
      state.loader = false;
      state.wishList = action.payload.user.wishList;
      console.log(action.payload);
    });
    builder.addCase(removeFromWishList.rejected, (state) => {});
    /// addToPurchase
    builder.addCase(addToPurchase.pending, (state) => {});
    builder.addCase(addToPurchase.fulfilled, (state, action) => {
      console.log(action.payload);
      state.purchaseHistory = action.payload.user.purchaseHistory;
    });
    builder.addCase(addToPurchase.rejected, (state) => {});
    builder.addCase(getPurchase.pending, (state) => {});
    builder.addCase(getPurchase.fulfilled, (state, action) => {
      console.log(action.payload);
      state.purchaseHistory = action.payload.purchaseHistory;
    });
    builder.addCase(getPurchase.rejected, (state) => {});
    ////////////
    builder.addCase(updateUserDisplayName.pending, (state) => {});
    builder.addCase(updateUserDisplayName.fulfilled, (state, action) => {
      state.displayName = action.payload.displayName;
      console.log(action.payload.displayName);
    });
    builder.addCase(updateUserDisplayName.rejected, (state) => {});
    ////////////
    builder.addCase(updateUserEmail.pending, (state) => {});
    builder.addCase(updateUserEmail.fulfilled, (state, action) => {
      state.displayName = action.payload.email;
    });
    builder.addCase(updateUserEmail.rejected, (state) => {});
  },
});

const store = configureStore({
  reducer: {
    epic: epicSlice.reducer,
  },
});

export const epicActions = epicSlice.actions;

export default store;
