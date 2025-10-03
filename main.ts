/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace RemoteControl {

    //% block
    export function up() :number {
			return _up;
    }
    //% block
    export function down() :number {
			return _down;
    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function init_HX1838(initialiseer_IR_variabelen: string) {
		nul = 181
   		een = 22
    	twee = 25
    	drie = 13
    	vier = 12
    	vijf = 24
    	zes = 133
    	zeven = 8
    	acht = 199
    	negen = 165
    	op = 157
    	neer = 21
    	links = 221
    	rechts = 61
    	ok = 253
    	ster = 189
    	hekje = 173
    }


//% block
export function init_Keyestudio (initialiseer_IR_variabelen: string) {
let	_nul = 25
let	_een = 93
let _twee = 157
let _drie = 29
let	_vier = 221
let	_vijf = 253
let	_zes = 61
let	_zeven = 31
let	_acht = 21
let	_negen = 9
let	_op = 24
let	_neer = 181
let	_links = 8
let	_rechts = 165
let	_ok = 199
let	_ster = 22
let	_hekje = 13
} : void
	
}
