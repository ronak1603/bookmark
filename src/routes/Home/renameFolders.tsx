import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { renameRequest } from '../../store/actions';

type renameTypes = {
    renameFolder: (obj: folderType) => void;
    id:string
}

interface folderType{
    folderId:string,
    name:string,
}

const Rename = (props:renameTypes) => {
    const[rename, setRename] = useState("");

    const renameHandler = (): void => {
        let obj = {
          name: rename,
          folderId:props.id,
        }
        setRename("");
        props.renameFolder(obj);
      }
      
      return(
        <>
        
        <input type="text" onChange={(e) => setRename(e.target.value)} value={rename} />
        <button onClick={renameHandler}>rename</button>
        <div>
     
        </div>
        </>
      )
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      renameFolder: (obj: folderType) => dispatch(renameRequest(obj)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(Rename);