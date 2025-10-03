/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100 icon="\uf1ec"
namespace RemoteControl {
	let _nul = 0
   	let _een = 0
    let _twee = 0
    let _drie = 0
    let _vier = 0
    let _vijf = 0
    let _zes = 0
    let _zeven = 0
    let _acht = 0
    let _negen = 0
    let _op = 0
    let _neer = 0
    let _links = 0
    let _rechts = 0
    let _ok = 0
    let _ster = 0
    let _hekje = 0


    // note that Caml casing yields lower case
    // block text with spaces

    //% block

    export function init_HX1838() : void {
	 _nul = 181
   	 _een = 22
     _twee = 25
     _drie = 13
     _vier = 12
     _vijf = 24
     _zeven = 8
     _acht = 199
     _negen = 165
     _op = 157
     _neer = 21
     _links = 221
     _rechts = 61
     _ok = 253
     _ster = 189
     _hekje = 173
	} 


//% block

export function init_Keyestudio () : void {	
	_nul = 25
	_een = 93
	 _twee = 157
	 _drie = 29
	_vier = 221
	_vijf = 253
	_zes = 61
	_zeven = 31
	_acht = 21
	_negen = 9
	_op = 24
	_neer = 181
	_links = 8
	_rechts = 165
	_ok = 199
	_ster = 22
	_hekje = 13
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
