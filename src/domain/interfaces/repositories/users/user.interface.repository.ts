import { UserEntity } from "src/domain/entities/users/user.entity";
import { GenericServiceInterface } from "../../generics.interface";

export interface UserInterfaceRepository extends GenericServiceInterface<UserEntity, UserEntity, UserEntity> {}
