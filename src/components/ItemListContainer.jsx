//rfce
//rfc
import React from 'react'

export default function ItemListContainer({ greeting, name}) {
    return (
        <h1>{`Hola ${name} ${greeting}`}</h1>
    );
}

// -----otra forma-------
// export default function ItemListContainer({ props }) {
//     return (
//         <h1>{props.greeting}</h1>
//     );
// }