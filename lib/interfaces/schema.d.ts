export declare type Type = MyString | MyNumber | MyBoolean | MyArray | MyMap;
export declare type MyString = {
    id: "string";
};
export declare type MyNumber = {
    id: "number";
};
export declare type MyBoolean = {
    id: "boolean";
};
export declare type MyArray = {
    id: "array";
    values: MyString | MyNumber | MyBoolean | MyMap;
};
export declare type MyMap = {
    id: "map";
    values: MyString | MyNumber | MyBoolean | MyMap | MyArray;
};
export interface SchemaField {
    key: string;
    reserved?: boolean;
    required?: boolean;
    type: Type;
}
export declare type Schema = SchemaField[];
export declare type UserSchema = Schema;
export declare type OrganizationSchema = Schema;
export declare type TeamSchema = Schema;
