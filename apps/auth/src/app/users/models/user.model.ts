
import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from '@nx-prod/nestjs';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  email: string;
}
