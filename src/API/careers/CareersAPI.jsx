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

const existsBySDT = (sdt) => {
    return Api.get(`${url}/existsSDT/${sdt}`);
};

const deleteByID = (id) => {
    return Api.delete(`${url}/delete/${id}`);
}

// export
const studentAPI = {getAll, getByID, createStudent, updateByID, deleteByID,existsBySDT,existsByEmail}
export default studentAPI;
