import RootRespository from "./root.repository.js"

class RootService {

    static async GetStatus(){
        const message = await RootRespository.status()
        return message
    }

}

export default RootService