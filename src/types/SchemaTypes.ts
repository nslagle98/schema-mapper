
export interface Property {
   type: string,
   description: string
   properties?: any
   required?: string[]
}

export interface JsonMetaSchema extends Property {
    $schema: string
    $id: string
    title: string
}

export type JsonDatatype = "string" | "number" | "integer" | "array" | "object"
/**
    *
    * JSON schema parameters are hard to stricty type because the properties field isn't an array with keynames, it's an object whose keys
    * represent the nested parameter key. This key though is itself of the parameter type. In this way we can assume that while the properties
    * field is of type 'any', if we take the keys of the object, we can get the key names and each key name is also of type Property
    */
