/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100 icon="\uf1ec"
namespace RemoteControl {


    // note that Caml casing yields lower case
    // block text with spaces

    //% block
	let _nul = 181
   	let _een = 22
    let _twee = 25
    let _drie = 13
    let _vier = 12
    let _vijf = 24
    let _zes = 133
    let _zeven = 8
    let _acht = 199
    let _negen = 165
    let _op = 157
    let _neer = 21
    let _links = 221
    let _rechts = 61
    let _ok = 253
    let _ster = 189
    let _hekje = 173
    export function init_HX1838() : void {
    } 


//% block
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
export function init_Keyestudio () : void {	
	}	
}

    //% block
    export function up() :number {
			return _up;
    }
    //% block
    export function down() :number {
			return _down;
    }
