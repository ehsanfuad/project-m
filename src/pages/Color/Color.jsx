import React from "react";
import useFetch from "../../hooks/useFetch";

function Color() {
  const { res, loading, error } = useFetch("/colors");
  console.log(res);
  if (loading) return "loading...";
  if (res.data === null) return "accsess denied";
  return (
    <div>
      {res.data.map((item, index) => (
        <div>{item.attributes.name}</div>
      ))}
    </div>
  );
}

export default Color;
