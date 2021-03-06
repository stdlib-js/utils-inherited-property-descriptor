/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var MAX_SAFE_INTEGER = require( '@stdlib/constants-float64-max-safe-integer' );
var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
var getOwnPropertyDescriptor = require( '@stdlib/utils-property-descriptor' );
var getPrototypeOf = require( '@stdlib/utils-get-prototype-of' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Returns a property descriptor for an object's inherited property.
*
* ## Notes
*
* -   In contrast to the built-in `Object.getOwnPropertyDescriptor()`, this function returns `null` if provided `undefined` or `null`, rather than throwing an error.
* -   In contrast to the built-in `Object.getOwnPropertyDescriptor()`, this function returns `null` if an object does not have an inherited provided property, rather than `undefined`.
*
* @private
* @param {*} value - input object
* @param {(string|symbol)} property - property
* @param {PositiveInteger} [level] - inheritance level
* @throws {TypeError} third argument must be a positive integer
* @returns {(Object|null)} property descriptor or null
*
* @example
* var desc = inheritedPropertyDescriptor( {}, 'toString' );
* // returns {...}
*/
function inheritedPropertyDescriptor( value, property, level ) { // eslint-disable-line id-length
	var desc;
	var obj;
	var N;
	var n;
	if ( arguments.length > 2 ) {
		if ( !isPositiveInteger( level ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be a positive integer. Value: `%s`.', level ) );
		}
		N = level;
	} else {
		N = MAX_SAFE_INTEGER;
	}
	if ( value === null || value === void 0 ) {
		return null;
	}
	// Get the value's prototype:
	obj = getPrototypeOf( value );

	// Walk the prototype chain in search of a specified property...
	n = 1;
	while ( obj && n <= N ) {
		desc = getOwnPropertyDescriptor( obj, property );
		if ( desc ) {
			return desc;
		}
		obj = getPrototypeOf( obj );
		n += 1;
	}
	return null;
}


// EXPORTS //

module.exports = inheritedPropertyDescriptor;
