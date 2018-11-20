const axios = require('axios')

const baseURL = 'https://como-fazer-info6.firebaseio.com'

const list = async (key) => {
    const content = await axios.get(`${baseURL}/${key}.json`)
    if (content.data) {
        const objetos = Object
            .keys(content.data)
            .map(key => {
                return {
                    id: key,
                    ...content.data[key]
                }
            })

        return objetos
    } else {
        return []
    }
}

const deleteItem = async (key, id) => {
    await axios.delete(`${baseURL}/${key}/${id}.json`)
    return true
}

const get = async (key, id) => {
    const content = await axios.get(`${baseURL}/${key}/${id}.json`)
    return {
        id: id,
        ...content.data
    }
}

const update = async (key, id, data) => {
    await axios.put(`${baseURL}/${key}/${id}.json`, data)
    return true
}

const create = async (key, data) => {
    await axios.post(`${baseURL}/${key}.json`, data)
    return true
}

module.exports = {
    list,
    deleteItem, 
    get,
    update, 
    create
}