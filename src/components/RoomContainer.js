import React from 'react'
import { withRoomConsumer, RoomConsumer, RoomContext } from '../context'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from "./Loading"

function RoomContainer({context}) {
  const {loading, sortedRooms, rooms} = context
  if (loading) {
    return <Loading />
  }
  return (
    <>
      Hello from Rooms RoomContainer
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  )
}

export default withRoomConsumer(RoomContainer)


// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import {RoomConsumer, RoomContext} from '../context'
// import Loading from './Loading'

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const {loading, sortedRooms, rooms} = value
//         if (loading) {
//           return <Loading />
//         }
//         return (
//           <div>
//             Hello from Rooms RoomContainer
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         )
//       }}
//     </RoomConsumer>
    
//   )
// }
