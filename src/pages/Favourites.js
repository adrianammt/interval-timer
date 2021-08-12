import { IoPlay, IoStop, IoPause } from "react-icons/io5";

export default function Favourites() {
  return (
    <>
      <div className="container">
        <h2>Here you will see and play your classes!</h2>
        <IoPlay />
        <IoStop />
        <IoPause />
      </div>
    </>
  );
}
