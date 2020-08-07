import axios from 'axios'

class BasicRequests {
    api= '/drive';
    constructor() {
        this.instance = axios.create({
            baseURL:'http://localhost:5000',
            timeout:1000,
            headers: {
                Authorization: ""
            }
        });
        this.instance.interceptors.response.use((res)=>{
            return res
        },(error) => {
            if (error.response?.status === 401) {
                localStorage.clear();
                window.location.href = '/'
            }
        });
    }

    setAccessToken(token){
        this.instance.defaults.headers.Authorization = token;
        localStorage.setItem('Token',token);
    }

    async logCreate(url,body){
        return await this.instance.post(url,body);
    }

    // async uploadAvatar(url,body) {
    //     return await this.instance.post(url, body,
    //         {
    //             headers:{
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         })
    // }

    async create(url,body,options){
    return await this.instance.post(this.api+url,body,options);
}

    async update(url,body,options){
    return await this.instance.put(this.api+url,body,options)
}

    async get(url,options){
    return await this.instance.get(this.api+url,options)
}

    async delete(url){
    return await this.instance.delete(this.api+url)
}
}

const Requests = new BasicRequests();

export default Requests