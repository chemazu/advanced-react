import React from "react";
import Sample from "./HOC/Sample";
import Callback from "./useCallback";
import UseMemoExample from "./useMemo/usememo.example";
import Todos from "./useReducer";
import { useQuery, gql } from "@apollo/client";

const POSTS_QUERY = gql`
  query GetPosts {
    user(id:1) {
      id
      username
      address {
        suite
      }
    }
  }
`;
export default function App() {
  const { data, loading, error } = useQuery(POSTS_QUERY,{variables:{id:1}});

  console.log(data,error);
  return (
    <div>
      App
      <p>useMemo</p>
      <UseMemoExample />
      <hr />
      <p>useCallback</p>
      <Callback />
      <hr />
      <p>useReducer</p>
      <Todos />
      <Sample data={"rds"} />
    </div>
  );
}
