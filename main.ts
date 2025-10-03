/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace RemoteControl {
let nul = 0
let een = 0
let twee = 0
let drie = 0
let vier = 0
let vijf = 0
let zes = 0
let zeven = 0
let acht = 0
let negen = 0
let op = 0
let neer = 0
let links = 0
let rechts = 0
let ok = 0
let ster = 0
let hekje = 0
    //% block
    export function init_Keyestudio() {
	nul = 25
    een = 93
    twee = 157
    drie = 29
    vier = 221
    vijf = 253
    zes = 61
    zeven = 31
    acht = 21
    negen = 9
    op = 24
    neer = 181
    links = 8
    rechts = 165
    ok = 199
    ster = 22
    hekje = 13
    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function init_HX1838() {
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
}



function init_HX1838 (initialiseer_IR_variabelen: string) {

}
function init_Keyestudio (initialiseer_IR_variabelen: string) {

}
basic.forever(function () {
	
})
