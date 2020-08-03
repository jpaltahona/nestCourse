export class CreateUsertDTO {
    readonly name: string;
    readonly photo: string;
    readonly phone: string;
    readonly email: string;
    readonly createdAt?: Date;
}