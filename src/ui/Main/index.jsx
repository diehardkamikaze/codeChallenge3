import { useStore, useEffect } from "../../store/init";
import UserSearch from "../../components/UserSearch";
import UserList from "../../components/UserList";
import Pagination from "../../components/Pagination";

export default function Main() {
  return <>
    <UserSearch />
    <UserList />
    <Pagination />
  </>

}