import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity({ name: 'stations' })
export default class Station {
  @Field(type => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // TODO check if it should be unique
  @Field(type => String)
  @Column({ name: 'planet_name' })
  planetName: string;

  @Field(type => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}