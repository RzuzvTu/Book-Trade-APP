//todo: 改成env
const IP = "192.168.248.207";
const PORT = "8000";
const url_path = `http://${IP}:${PORT}`;

export enum api {
    //根據"電腦"上的ip進行fetch 手機的預設網址也會是localhost，當使用localhost會無法找到電腦後端
    //user
    login = `${url_path}/users/login`,
    register = `${url_path}/users/register`,
    update=`${url_path}/users/update`,
    find=`${url_path}/users/get_user_by_id`,
    //product
    AddProducts=`${url_path}/products/AddProducts`,
    GetOneProduct=`${url_path}/products/GetOneProduct`,
    GetAllProducts=`${url_path}/products/GetAllProducts`,
    UpdateProduct=`${url_path}/products/UpdateProduct`,
    AddToCart=`${url_path}/products/AddToCart`,
    UpdateCart=`${url_path}/products/UpdateCart`,
    AddToFavorite=`${url_path}/products/AddToFavorites`,
    DeleteFromFavorites=`${url_path}/products/DeleteFromFavorites`,
    GetFavoriteList=`${url_path}/products/GetFavoritesByUserId`,
    GetCartList=`${url_path}/products/GetCartByUserId`,
    //Orders
    CreateOrder=`${url_path}/orders/CreateOrder`,
};