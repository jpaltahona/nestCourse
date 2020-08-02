export class CreateProductDTO {
    readonly title: string;
    readonly description: string;
    readonly imageURL: string;
    readonly price: number;
    readonly createdAt: Date;
}