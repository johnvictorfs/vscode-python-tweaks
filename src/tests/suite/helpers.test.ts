import * as assert from 'assert'

import { isString, isFString, countCharacters } from '../../helpers'

suite('Helper Strings Functions Test Suite', () => {
  test('Test countCharacters', () => {
    assert.equal(countCharacters('l', 'hello world'), 3)
    assert.equal(countCharacters('h', 'hello world'), 1)
    assert.equal(countCharacters('z', 'hello world'), 0)
    assert.equal(countCharacters(' ', 'hello world'), 1)
    assert.equal(countCharacters(' ', 'helloworld'), 0)
    assert.equal(countCharacters('\\', 'helloworld'), 0)
    assert.equal(countCharacters('\\', 'hello\\world'), 1)
    assert.equal(countCharacters('"', '"hello\\world'), 1)
    assert.equal(countCharacters('"', '"hello\\world"'), 2)
    assert.equal(countCharacters('\'', '\'hello\\world\''), 2)
  })

  test('Test isString', () => {
    assert.ok(isString(`"valid string"`))
    assert.ok(isString(`'valid string'`))

    assert.ok(isString(`"invalid string`) === false)
    assert.ok(isString(`"invalid string""`) === false)
    assert.ok(isString(`""invalid string""`) === false)
    assert.ok(isString(`"""invalid string"""`) === false)
    assert.ok(isString(`invalid string"`) === false)
    assert.ok(isString(`\`invalid string\``) === false)
    assert.ok(isString(`\\'invalid string\\'`) === false)
    assert.ok(isString(`'invalid string"`) === false)
    assert.ok(isString(`"invalid string'`) === false)
    assert.ok(isString(`'invalid string`) === false)
    assert.ok(isString(`invalid string'`) === false)
    assert.ok(isString(`invalid string`) === false)
    assert.ok(isString(`f'invalid string'`) === false)
    assert.ok(isString(`f"invalid string"`) === false)
    assert.ok(isString(`"invalid string".format(a=blah)`) === false)
  })

  test('Test isFString', () => {
    assert.ok(isFString(`f"valid fstring"`))
    assert.ok(isFString(`f'valid fstring'`))
    assert.ok(isFString(`f'val"id fst"ring'`))
    assert.ok(isFString(`f"val'id fst'ring"`))
    assert.ok(isFString(`f"valid fst'ring"`))

    assert.ok(isFString(`"invalid fstring`) === false)
    assert.ok(isFString(`invalid fstring"`) === false)
    assert.ok(isFString(`\`invalid fstring\``) === false)
    assert.ok(isFString(`\\'invalid fstring\\'`) === false)
    assert.ok(isFString(`'invalid fstring"`) === false)
    assert.ok(isFString(`"invalid fstring'`) === false)
    assert.ok(isFString(`'invalid fstring`) === false)
    assert.ok(isFString(`invalid fstring'`) === false)
    assert.ok(isFString(`invalid fstring`) === false)
    assert.ok(isFString(`f'invalid fstring`) === false)
    assert.ok(isFString(`finvalid fstring"`) === false)
    assert.ok(isFString(`f"invalid fstring'`) === false)
    assert.ok(isFString(`f"invalid fstring""`) === false)
    assert.ok(isFString(`f""invalid fstring""`) === false)
    assert.ok(isFString(`f''invalid fstring''`) === false)
    assert.ok(isFString(`"invalid fstring".format(a=blah)`) === false)
  })
})
