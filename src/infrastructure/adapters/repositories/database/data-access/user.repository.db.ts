import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/domain/entities/users/user.entity";
import { UserInterfaceRepository } from "src/domain/interfaces/repositories/users/user.interface.repository";
import { UserModel } from "../schemas/user.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class UserRepositoryDB implements UserInterfaceRepository {

    constructor(
        @InjectModel(UserModel)
        private userModel: typeof UserModel
    ) { }

    async create(user: UserEntity): Promise<UserEntity> {
        const model = await this.userModel.create({
            name: user.name,
            email: user.email
        });

        return model.toJSON() as UserEntity;
    }

    async findAll(): Promise<UserEntity[]> {
        const models = await this.userModel.findAll();
        return models.map(m => m.toJSON() as UserEntity);
    }
}