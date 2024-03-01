import Api from '../Api';

const url = "/class";

const getAll = (page = 1,size = 10,sortFiled = 'id',sortType = 'desc',search ='') => {
    const parameters = {
        page,
        size, // <=> size:size
        sort :`${sortFiled},${sortType}`
    }
    if(search){
        parameters.search = search;
    }

    return Api.get(`${url}`, {params: parameters});
};

const getByID = (id) => {
    return Api.get(`${url}/${id}`);
};

const existsByClassName = (clazzName) => {
    return Api.get(`${url}/existsClassName/${clazzName}`);
};

const existsByMajorName = (major) => {
    return Api.get(`${url}/existsEmail/${major}`);
};


const createClass = (body) => {
    return Api.post(url, body);
};

const updateByID = (id, body) => {
    return Api.put(`${url}/${id}`, body);
}

const deleteByID = (id) => {
    return Api.delete(`${url}/${id}`);
}

// export
const classAPI = {getAll, getByID, createClass, updateByID, deleteByID,existsByMajorName,existsByClassName}
export default classAPI;

