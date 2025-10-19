/**
 * Mappings for various remote control units, 
 * exposing functional key variables
 * icon="\uf1ec
 */

//% color="#AA278D" weight=100 icon="\uf005"
namespace Afstandsbediening {
	// generic colom/row coordinates 
	// (some positions may not be present depending on model):
	let _A1 = 0
	let _B1 = 0
	let _C1 = 0
	let _A2 = 0
	let _B2 = 0
	let _C2 = 0
	let _A3 = 0
	let _B3 = 0
	let _C3 = 0
	let _A4 = 0
	let _B4 = 0
	let _C4 = 0
	let _A5 = 0
	let _B5 = 0
	let _C5 = 0
	let _A6 = 0
	let _B6 = 0
	let _C6 = 0
	let _A7 = 0
	let _B7 = 0
	let _C7 = 0

	// functional names for easier use in applications
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
	// generic col/row names
	//% block
    export function A1() :number {
			return _A1;
    }
	//% block
	export function B1() :number {
			return _B1;
    }
	//% block
	export function C1() :number {
			return _C1;
    }
	//% block
	export function A2() :number {
			return _A2;
    }
	//% block
    export function B2() :number {
			return _B2;
    }
	//% block	
    export function C2() :number {
			return _C2;
    } 
	//% block
	export function A3() :number {
			return _A3;
    }
	//% block
    export function B3() :number {
			return _B3;
    }
	//% block
    export function C3() :number {
			return _C3;
    }    
	//% block	
	export function A4() :number {
			return _A4;
    }
	//% block
    export function B4() :number {
			return _B4;
    }
	//% block
    export function C4() :number {
			return _C4;
    }
	//% block
	export function A5() :number {
			return _A5;
    }
	//% block
    export function B5() :number {
			return _B5;
    }
	//% block
    export function C5() :number {
			return _C5;
    }   
	//% block
	export function A6() :number {
			return _A6;
    }
	//% block
    export function B6() :number {
			return _B6;
    }
	//% block
    export function C6() :number {
			return _C6;
    }
	//% block
	export function A7() :number {
			return _A7;
    }
	//% block
    export function B7() :number {
			return _B7;
    }
	//% block
    export function C7() :number {
			return _C7;
    }
	//Functional names
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


//% block

export function init_rc_baltimore () : void {	
	_A1 = 23 // lamp
	_B1 = 0  // n/a
	_C1 = 63 // auto
	_A2 = 4  // bright
	_B2 = 6  // medium bright
	_C2 = 31 // dim
	_A3 = 8  // high sensitive
	_B3 = 10 // medium sensitive
	_C3 = 47 // low sensitive
	_A4 = 12 // 10 sec
	_B4 = 14 // 1 min	
	_C4 = 15 // 5 min
	_A5 = 16 // 30 min
	_B5 = 17 // 1hr
	_C5 = 55 // light2
	_A6 = 20 // full sun
	_B6 = 21 // half sun
	_C6 = 22 // moon
	_A7 = 0 // n/a
	_B7 = 0 // n/a
	_C7 = 0 // n/a
	}	
}

