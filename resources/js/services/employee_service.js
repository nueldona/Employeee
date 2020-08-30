import {http} from "./http_service";

export function createEmployee(data) {
    return http().post('/employee', data)
}
