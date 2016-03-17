/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2015 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"packageName": "vincio",
			"path": "vincio/vincio.js",
			"fileName": "vincio.js",
			"moduleName": "vincio",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/vincio.git"
		}
	@end-module-configuration

	@module-documentation:
	@end-module-documentation

	@include:
	@end-include
*/

if( !( typeof window != "undefined" &&
	"harden" in window ) )
{
	var harden = require( "harden" );
}

if( !( typeof window != "undefined" &&
	"llamalize" in window ) )
{
	var llamalize = require( "llamalize" );
}

if( typeof window != "undefined" && 
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" ); 
}

if( typeof window != "undefined" && 
	!( "llamalize" in window ) )
{
	throw new Error( "llamalize is not defined" ); 
}

var vincio = function vincio( entity, property ){
	var delegate = { };

	delegate.set = function setDelegate( procedure ){
		Object.defineProperty( entity, property, {
			"set": function set( value ){
				procedure.apply( this )
			}
		} );

		return delegate;
	};

	delegate.get = function getDelegate( procedure ){

	};

	return delegate;
};

if( typeof module != "undefined" ){ 
	module.exports = vincio; 
}

if( typeof global != "undefined" ){
	harden
		.bind( vincio )( "globalize", 
			function globalize( ){
				harden.bind( global )( "vincio", vincio );
			} );
}