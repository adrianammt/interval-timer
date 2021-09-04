import { useHistory } from "react-router";

//Higher order function
export default function useHistoryPush(pathName) {
  const history = useHistory();

  return (id) => history.push(`/${pathName}/${id}`);
}
