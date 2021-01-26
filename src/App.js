import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "./constants/index";
import Characters from "./components/Characters";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const fetchFriends = (id) => {
      axios
        .get(`${BASE_URL}${id}`)
        .then((res) => {
          // console.log(res.data);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchFriends("people");
    // return () => {};
  }, []);

  // console.log(data);
  // data.people.results.map((friend) => console.log(friend));

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* {data && <div>{data.results.map(friend => {
        return friend.name;
      })}</div>} */}
      {data && <Characters data={data.results} />}
    </div>
  );
};

export default App;
