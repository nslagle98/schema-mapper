import { parseJsonSchema } from "./SourcePicker";




test('sample test 1', () => {
    expect( 1 ).toBe(1)
})

test('parses json schema', () => {
   expect(parseJsonSchema(JSON.parse(sampleSchemaDef))).toStrictEqual(JSON.parse(expectedResult)) 
})

const expectedResult = `{
    "userId": "number",
    "user": {
        "name" : {
            "first": "string",
            "last": "string"
        },
        "age": "number"
    }
}`

const sampleSchemaDef = `{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Root",
  "type": "object",
  "properties": {
    "userId": {
      "type": "number"
    },
    "user": {
      "type": "object",
      "properties": {
        "name": {
          "type": "object",
          "properties": {
            "first": {
              "type": "string"
            },
            "last": {
              "type": "string"
            }
          },
          "required": [
            "first",
            "last"
          ]
        },
        "age": {
          "type": "number"
        }
      },
      "required": [
        "name",
        "age"
      ]
    }
  },
  "required": [
    "userId",
    "user"
  ]
}`
