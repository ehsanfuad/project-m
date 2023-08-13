import React from "react";
import useFetch from "../../hooks/useFetch";

function Category() {
  const { res, loading, error } = useFetch("/cats");
  console.log(res);
  if (loading) return "loading...";
  if (res.data === null) return "error";
  return (
    <div>
      {res.data.map((item, index) => (
        <div>{item.attributes.name}</div>
      ))}
    </div>
  );
}

export default Category;
