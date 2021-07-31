import React from 'react'

const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
// const Card = (props) => {
//     const {lat, long} = props;
//     return (
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <div>
//                 <h2>Latitude: {lat}</h2>
//                 <h2>Longitude: {long}</h2>
//             </div>
//         </div>
//     )
// }

export default Card;