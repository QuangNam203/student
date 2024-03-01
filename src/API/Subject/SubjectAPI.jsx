import Api from '../Api';

const url = "/subject";

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

const existsBySubjectName = (subjectName) => {
    return Api.get(`${url}/existsSubjectName/${subjectName}`);
};

const createSubject = (body) => {
    return Api.post(url, body);
};

const updateByID = (id, body) => {
    return Api.put(`${url}/${id}`, body);
}

const deleteByID = (id) => {
    return Api.delete(`${url}/${id}`);
}

// export
const subjectAPI = {getAll, getByID, createSubject, updateByID, deleteByID,existsBySubjectName}
export default subjectAPI;

