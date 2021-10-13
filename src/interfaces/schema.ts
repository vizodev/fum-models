// type SchemaTypes = "string" | "number" | "boolean" | "date" | "null" | "map";
// type AdvancedSchemaTypes = SchemaTypes | "array";

export type Type = MyString | MyNumber | MyBoolean | MyArray | MyMap;

export type MyString = {
  id: "string";
};

export type MyNumber = {
  id: "number";
};

export type MyBoolean = {
  id: "boolean";
};

export type MyArray = {
  id: "array";
  values: MyString | MyNumber | MyBoolean | MyMap;
};

export type MyMap = {
  id: "map";
  values: MyString | MyNumber | MyBoolean | MyMap | MyArray;
};

export interface SchemaField {
  key: string;
  type: Type;
}

export type SchemaFields = SchemaField[];

export type UserSchema = SchemaFields;
export type OrganizationSchema = SchemaFields;
export type TeamSchema = SchemaFields;

// const user: UserSchema = [
//   {
//     key: "name",
//     type: {
//       id: "string",
//     },
//   },
//   {
//     key: "b",
//     type: {
//       id: "array",
//       values: {
//         id: "map",
//         values: {
//           id: "string",
//         },
//       },
//     },
//   },
// ];
