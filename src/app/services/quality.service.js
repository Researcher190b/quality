import httpService from "./http.service";

const qualityEndpoint = `quality/`

const qualityService = {
    update: async(id, content) => {
        const {data} = await httpService
            .put(qualityEndpoint+id, content)
        return data
    },
    get: async(id) => {
        const {data} = await httpService
            .get(qualityEndpoint+id)
        return data
    },
    feachAll:async ()=> {
        const {data}=await httpService.get(qualityEndpoint)
        return data
    }
}

export default qualityService