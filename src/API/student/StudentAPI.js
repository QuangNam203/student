import Api from '../Api';

const url = "/student";

const getAll = () => {
    return Api.get(url);
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

const resendEmailToActiveAccount = (email) =>{
    const parameters = {
        email: email
    }
    return Api.get(`${url}/accountResendEmailRequest`, {params: parameters});
}

// export
const studentAPI = { getAll, getByID, create, updateByID, deleteByID }
export default studentAPI;

