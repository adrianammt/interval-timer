import { useParams } from "react-router-dom";
import PlayClassCard from "../components/PlayClassCard/PlayClassCard";

export default function PlasClass() {
  const id = useParams();

  return <PlayClassCard id={id} />;
}
