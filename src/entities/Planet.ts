import { Field, Float, ObjectType } from "type-graphql";

type PlanetProps = {
  name: string;
  mass: number;
  hasStation: boolean;
}

@ObjectType()
export default class Planet {
  constructor(props: PlanetProps) {
    this.name = props.name;
    this.mass = props.mass;
    this.hasStation = props.hasStation;
  }

  @Field(type => String)
  name: string;

  @Field(type => Float)
  mass: number;

  @Field(type => Boolean)
  hasStation: boolean;
}