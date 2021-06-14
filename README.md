<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# inheritedPropertyDescriptor

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Return a property descriptor for an object's inherited property.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-inherited-property-descriptor
```

</section>

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var inheritedPropertyDescriptor = require( '@stdlib/utils-inherited-property-descriptor' );
```

#### inheritedPropertyDescriptor( obj, property\[, level] )

Returns a property descriptor for an object's inherited property.

```javascript
function Foo() {
    return this;
}

Foo.prototype.bar = 'foo';

var obj = new Foo();

var desc = inheritedPropertyDescriptor( obj, 'bar' );
// returns {'configurable':true,'enumerable':true,'writable':true,'value':'foo'}
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

```javascript
var inherit = require( '@stdlib/utils-inherit' );

function Bar() {
    return this;
}

Bar.prototype.beep = 'boop';

function Foo() {
    Bar.call( this );
    return this;
}

inherit( Foo, Bar );

var f = new Foo();
var desc = inheritedPropertyDescriptor( f, 'beep', 1 );
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function differs from the built-in `Object.getOwnPropertyDescriptor()` as follows:

    -   If provided `null` or `undefined`, the function returns `null`, rather than throwing an error.
    -   If an object does not have a provided inherited property, the function returns `null`, rather than `undefined`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );
var inheritedPropertyDescriptor = require( '@stdlib/utils-inherited-property-descriptor' );

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'value': 'qux',
        'configurable': true,
        'writable': true,
        'enumerable': false
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];

var obj = new Foo();
var desc = inheritedPropertyDescriptor( obj, 'foo' );

console.log( desc );
// => {'configurable':true,'enumerable':true,'writable':true,'value':['bar']}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-inherited-property-descriptor.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-inherited-property-descriptor

[test-image]: https://github.com/stdlib-js/utils-inherited-property-descriptor/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-inherited-property-descriptor/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-inherited-property-descriptor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-inherited-property-descriptor?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-inherited-property-descriptor
[dependencies-url]: https://david-dm.org/stdlib-js/utils-inherited-property-descriptor/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inherited-property-descriptor/main/LICENSE

</section>

<!-- /.links -->
