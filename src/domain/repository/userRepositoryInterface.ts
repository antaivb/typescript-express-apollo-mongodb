import User from "../model/user";

export interface userRepositoryInterface {
    create(entity: any): Promise<void>
    findById(id: String): Promise<User>
    findOne(field: any, value: any): Promise<User>
    find(field: any, value: any): Promise<Array<User>>
}
