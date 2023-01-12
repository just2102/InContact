import React, { useEffect } from "react";
import { useState } from "react";


const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }
  useEffect(() => {
    if (props.status!==status) {
      setStatus(status)
    }
  }, [status, editMode, props.status])
    return (
      <>
        <div id="profile_status">
            {!editMode &&
            <div>
              <span onDoubleClick={()=>{activateEditMode()}}>{props.status || "---"}</span>
            </div>}

            { editMode &&
            <div>
              <input 
              autoFocus={true} 
              onBlur={()=> {deactivateEditMode()}} 
              type="text" 
              value={status}
              onChange={onStatusChange}/> 
            </div>}
        </div>
      </>
    );
}

export default ProfileStatus;
