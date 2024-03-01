// ngành
import Api from '../Api';

const url = "/student";

const getAll = (page = 1,size = 10,sortFiled = 'id',sortType = 'desc',search ='') => {
    const parameters = {
        page:page,
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
const createCareers =(clazzCareersName)=>{
    return Api.post(`${url}/${clazzCareersName}`);
}

const existsByID = (id) => {
    return Api.get(`${url}/existsSubject/${id}`);
};
const updateByID = (id,clazzCareersName,) => {
    const body = {
        clazzCareersName
    }
    return Api.put(`${url}/upMajor/${id}`,body);
}

const deleteByID = (id) => {
    return Api.delete(`${url}/delete/${id}`);
}

// export
const studentAPI = {getAll, getByID, createCareers, existsByID,updateByID, deleteByID}
export default studentAPI;

