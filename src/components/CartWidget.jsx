//rfce
//rfc
import React from 'react'

export default function CartWidget({items}) {
    return (
        <>
            {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="80.000000pt" height="25.000000pt" viewBox="0 0 1280.000000 1012.000000"
                preserveAspectRatio="xMidYMid meet">
                <metadata>
                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g transform="translate(0.000000,1012.000000) scale(0.100000,-0.100000)"
                    fill="#ff5722" stroke="none">
                    <path d="M1515 10110 c-209 -4 -550 -8 -757 -9 l-378 -1 0 -382 0 -381 778 9
                    c427 5 903 9 1057 9 l280 0 180 -360 c173 -346 224 -451 451 -944 l104 -224 0
                    -2458 0 -2459 4012 2 4012 3 59 180 c32 99 85 263 118 365 33 102 91 280 129
                    395 37 116 95 293 128 395 33 102 119 366 191 588 132 404 282 868 523 1607
                    71 220 189 580 261 800 l132 400 3 289 3 289 -1498 -7 c-1386 -6 -3091 -15
                    -6174 -32 l-1225 -7 -21 49 c-62 149 -356 766 -544 1144 -175 350 -228 448
                    -273 502 -98 117 -211 186 -366 224 -64 15 -128 18 -440 19 -201 1 -536 -1
                    -745 -5z"/>
                    <path d="M5115 2419 c-165 -12 -315 -56 -471 -138 -343 -180 -580 -519 -635
                    -909 -14 -104 -6 -310 16 -412 110 -496 509 -870 1008 -944 618 -92 1194 292
                    1353 901 35 133 44 365 20 498 -46 250 -152 458 -324 636 -254 265 -595 394
                    -967 368z m247 -624 c203 -50 379 -226 432 -431 19 -72 21 -210 5 -286 -66
                    -313 -397 -524 -712 -454 -182 41 -341 166 -416 327 -46 99 -61 164 -61 263 0
                    159 65 313 179 426 152 150 361 206 573 155z"/>
                    <path d="M9240 2419 c-378 -26 -724 -235 -935 -565 -225 -352 -244 -817 -49
                    -1195 331 -642 1151 -855 1748 -455 256 172 442 441 511 740 66 286 16 618
                    -131 871 -240 410 -667 636 -1144 604z m265 -631 c186 -53 341 -205 401 -393
                    32 -100 36 -246 9 -340 -107 -372 -511 -550 -858 -378 -91 46 -208 160 -255
                    250 -41 78 -72 198 -72 278 0 409 382 697 775 583z"/>
                </g>
            </svg> */}

            {/* usando bootstrap icons */}
            <i className="bi bi-cart3 pe-4" style={{color: "white", fontSize: "1.5rem"}}></i>
            
            <span style={{color: "white", fontSize:"1.5rem" }}>{items}</span>
            
        </>
        
    )
}

