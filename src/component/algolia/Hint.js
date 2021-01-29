// import React from "react";
// export default function Hint({ hit }) {
//   return (
//     <div className="hit">
//       <div className="hit-image">
//         <a
//           className="margin-set"
//           href={`https://docs.google.com/document/d/${hit.id}/edit`}
//         >
//           <img className="image" src={hit.image} alt={hit.image} />
//           <h3>{hit.name}</h3>
//         </a>
//       </div>
//     </div>
//   );
// }
//---------------
import React from "react";
import { Highlight } from "react-instantsearch-dom";
import {UserConsumer} from '../../context/context';

export default function Hint({ hit }) {
  console.log('--------',hit);
  return (
    // <UserConsumer>
    //   {
    //     userId => {
    //       return (
    //         userId === hit.userid ?
            
    //           (
              <div className="hit">
                <div className="hit-image">
                  <a
                    className="margin-set"
                    href={`https://docs.google.com/document/d/${hit.id}/edit`}
                  >
                    <div className='hit-custom-image'>
                      <img className="image" src={hit.image} alt={hit.image} />
                    </div>
                    <div className='hit-custom-name'>
                      <h3><Highlight hit={hit} attribute="name" /> </h3>
                    </div>
                  </a>
                </div>
              </div>
              )
  //           :<div>Not available </div>
  //         ); 
  //       }
  //     }
      
  //   </UserConsumer>
  // );
}