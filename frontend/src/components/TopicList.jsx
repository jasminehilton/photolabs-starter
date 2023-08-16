import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = () => {

  const [topics, setTopics] = useState([]);

  const getTopics = () => {
    axios.get('http://localhost:8001/api/topics')
      .then((res) => {
        setTopics(res.data);
      }).catch((err) => {
        console.log('error getting topics ', err);
      });
  };

  useEffect(() =>{
    getTopics();
  }, []);

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic, index) => (
        <TopicListItem key={index} data={topic} />
      ))}
    </div>
  );
};

export default TopicList;
