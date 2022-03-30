import React, {useState} from "react";

function CreateArea(props) {

  const [titleText, setTitleText]= useState("");
  const [contentText, setContentText]= useState("");

  function updateTitleText(evt){
    const newTitle=evt.target.value;
    setTitleText(newTitle);
  }

  function updateContentText(evt){
    const newContent=evt.target.value;
    setContentText(newContent);
  }

  function prevent(evt){
    evt.preventDefault();
  }


  return (
    <div>
      <form onSubmit={prevent}>
        <input onChange={updateTitleText} name="title" placeholder="Title" value={titleText}/>
        <textarea onChange={updateContentText} name="content" placeholder="Take a note..." rows="3" value={contentText}/>
        <button onClick={() => {props.addNote(titleText,contentText); setTitleText(""); setContentText("");}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
