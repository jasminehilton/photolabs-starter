import React, { useContext } from "react";
import "../styles/TopicListItem.scss";
import { myContext } from "App";
import { ACTIONS } from "hooks/useApplicationData";

const TopicListItem = (props) => {
  const {state, dispatch} = useContext(myContext);
  // handles the topic selection by grabbing the topic id
  const handleTopicSelection = () => {
    dispatch({type: ACTIONS.SELECT_TOPIC, value: props.data.id});
    console.log(props);
  };

  return (
    <div className="topic-list__item" onClick={handleTopicSelection}>
      {props.data.title}
    </div>
  );
};

export default TopicListItem;
