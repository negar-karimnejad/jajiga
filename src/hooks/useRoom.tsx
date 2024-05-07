import useRooms from './useRooms';

function useRoom(id: number) {
  const { rooms, loading, error } = useRooms();

  const room = rooms.find((room) => room.code === id);

  return { room, loading, error };
}

export default useRoom;
