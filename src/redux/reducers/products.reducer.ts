import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../../models/Products.model"

const initialState: Product[] = [
    {
        "nome": "Celular",
        "preco": 450.0,
        "cover": "https://i.zst.com.br/thumbs/12/28/3a/-550637268.jpg",
        "type": "phone"
    },
    {
        "nome": "Relógio digital",
        "preco": 34.0,
        "cover": "https://static.dafiti.com.br/p/Touro-Boots-Rel%C3%B3gio-Digital-Touro-Boots-Pulseira-Silicone-Preto-2432-4714674-1-zoom.jpg",
        "type": "clock"
    },
    {
        "nome": "Xbox One",
        "preco": 2500.5,
        "cover": "https://files.tecnoblog.net/wp-content/uploads/2020/12/Xbox-One-500GBa.jpg",
        "type": "game"
    },
    {
        "nome": "1984 - George Orwell",
        "preco": 15.99,
        "cover": "https://m.media-amazon.com/images/I/819js3EQwbL.jpg",
        "type": "book"
    },
    {
        "nome": "DualSense - PS5",
        "preco": 300.50,
        "cover": "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-thumbnail-ps5-01-en-17jul20?$native$",
        "type": "game"
    },
    {
        "nome": "PS5",
        "preco": 5000.99,
        "cover": "https://files.tecnoblog.net/wp-content/uploads/2020/11/playstation_5_produto-700x700.png",
        "type": "game"
    },
    {
        "nome": "Mouse Gamer RGB",
        "preco": 120.99,
        "cover": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pgm-p301-rgb4.jpg",
        "type": "game"
    },
    {
        "nome": "God of War - 2018",
        "preco": 200.00,
        "cover": "https://m.media-amazon.com/images/I/81qJ1ui8bzL._AC_SX522_.jpg",
        "type": "game"
    }
];

export const productSlice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
        state = action.payload
    }
  }
})

export const { setProducts } = productSlice.actions
export const reducerProd = productSlice.reducer