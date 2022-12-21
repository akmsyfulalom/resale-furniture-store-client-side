// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import Products from './Products';

// const VerifiedUsers = () => {


//     const { data: verifiedUsers = [] } = useQuery({
//         queryKey: ['verifiedUsers'],
//         queryFn: async () => {
//             const res = await fetch('https://resale-furniture-store-server-side.vercel.app/verifiedUsers?verified=true');
//             const data = await res.json()
//             console.log(data)
//             return data;

//         }
//     })


//     return (

//         <div>
//             {
//                 verifiedUsers?.map(verifiedUser => <Products
//                     key={verifiedUser._id}

//                     verifiedUser={verifiedUser}
//                 ></Products>)
//             }

//         </div>
//     );
// };

// export default VerifiedUsers;