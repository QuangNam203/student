import Api from '../Api';

const url = "/student";

const getAll = (page = 1,size = 10,sortFiled = 'id',sortType = 'desc') => {
    const parameters = {
        page,
        size, // <=> size:size
        sort :`${sortFiled},${sortType}`
    }
    return Api.get(`${url}`, {params: parameters});
};

const getByID = (id) => {
    return Api.get(`${url}/${id}`);
};

const create = (name, username, email, password) => {
    const body = {
        name : name,
        username: username,
        email: email,
        password: password
    }
    return Api.post(url, body);
};

const updateByID = (id, body) => {
    return Api.put(`${url}/${id}`, body);
}

const deleteByID = (id) => {
    return Api.delete(`${url}/${id}`);
}

// export
const studentAPI = {getAll, getByID, create, updateByID, deleteByID }
export default studentAPI;

