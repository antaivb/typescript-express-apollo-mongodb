export abstract class baseRepository {
    private model: any
    private domain: any

    protected constructor(model: any, domain: any) {
        this.model = model
        this.domain = domain
    }

    async create(entity: any): Promise<void> {
        try {
            await this.model.create(entity.serialize())
        } catch (error) {
            throw new Error('Error creating model to MongoDB')
        }
    }

    async find(field: string, value: string): Promise<Array<any>> {
        const response = await this._findByField(field, value)

        let result = []
        for (let r of response) {
            result.push(this.domain.deserialize(r))
        }

        return result
    }

    async findOne(field: string, value: string): Promise<any> {
        const response = await this._findOneByField(field, value)
        return this.domain.deserialize(response)
    }

    async findById(id: String): Promise<any> {
        const response = await this._findOneByField('id', id)
        return this.domain.deserialize(response)
    }

    async _findByField(field: string, value: String): Promise<any> {
        const where = {[field]: value}
        return await this.model.find(where)
    }

    async _findOneByField(field: string, value: String): Promise<any> {
        const where = {[field]: value}
        return await this.model.findOne(where)
    }
}