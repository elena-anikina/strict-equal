import { strict as assert } from 'assert';

assert.strictEqual('hello', 'hello'); // ок
assert.strictEqual({}, {});     // ошибка
assert.deepStrictEqual({}, {}); // ок

assert.deepStrictEqual({key: 'value'}, {key: 'value'});   // ок
assert.deepEqual({key:'value'}, {key: 'value'});         // ок
assert.deepEqual({key: 'value'}, {key: 'another value'}); // ошибка

assert.notStrictEqual('hello', 'world');         // ок
assert.notDeepStrictEqual({ a: 1 }, { a: '1' }); // ок

console.log('Все тесты пройдены!'); // будет выведено когда пройдут все тесты
