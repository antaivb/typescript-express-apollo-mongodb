class User {
    private readonly _id: String
    private readonly _email: String
    private readonly _firstname: String

    private constructor(id: String, email: String, firstname: String) {
        this._id = id
        this._email = email
        this._firstname = firstname
    }

    public static create(id: String, email: String, firstname: String): User {
        if (!id) {
            throw new Error('An id cannot be null')
        }

        if (!email) {
            throw new Error('Email cannot be null')
        }

        if (!firstname) {
            throw new Error('Firstname cannot be null')
        }

        return new User(id, email, firstname)
    }

    public static deserialize(data: any): User {
        return new User(data.id, data.email, data.firstname)
    }

    public serialize(): Object {
        return {
            id: this._id,
            email: this._email,
            firstname: this._firstname
        }
    }

    get id(): String {
        return this._id;
    }

    get email(): String {
        return this._email;
    }

    get firstname(): String {
        return this._firstname;
    }
}

export default User