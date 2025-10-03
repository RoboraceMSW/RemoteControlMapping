/**
 * Mappings for various remote control units, 
 * exposing functional key variables
 * icon="\uf1ec
 */

//% color="#AA278D" weight=100 icon="\uf005"
namespace Afstandsbediening {
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
    export function op() :number {
			return _op;
    }
    //% block
    export function neer() :number {
			return _neer;
    }
    //% block
    export function links() :number {
			return _links;
    }
	//% block
    export function rechts() :number {
			return _rechts;
    }
	//% block
    export function ok() :number {
			return _ok;
    }
	//% block
    export function een() :number {
			return _een;
    }
	//% block
    export function twee() :number {
			return _twee;
    }
	//% block
    export function drie() :number {
			return _drie;
    }
	//% block
    export function vier() :number {
			return _vier;
    }
	//% block
    export function vijf() :number {
			return _vijf;
    }
	//% block
    export function zes() :number {
			return _zes;
    }
	//% block
    export function zeven() :number {
			return _zeven;
    }
    //% block
    export function acht() :number {
			return _acht;
    }
    //% block
    export function negen() :number {
			return _negen;
    }
    //% block
    export function nul() :number {
			return _nul;
    }	
    //% block
    export function ster() :number {
			return _ster;
    }
    //% block
    export function hekje() :number {
			return _hekje;
    }
	
	
	
	//% block

    export function init_rc_hx1838() : void {
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


//% block

export function init_rc_keyestudio () : void {	
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
}

