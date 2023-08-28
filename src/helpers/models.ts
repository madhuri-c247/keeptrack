export interface User{
    firstName: String,
    lastName:String,
    email: string,
    password:string
}

export interface UserStates{
    AllUsers: User[] ,
    matchedUser: User[]
}