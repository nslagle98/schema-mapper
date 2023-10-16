import {genSchemaButtons} from "./SourcePicker";

test('sample test 1', () => {
    expect( 1 ).toBe(1)
})

test('correctly generate schema buttons', () => {
    expect(genSchemaButtons(JSON.parse(sampleSchemaDef).properties)).toHaveLength(6)
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
