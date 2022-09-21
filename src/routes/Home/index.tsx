import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {createFolderRequest, getFolderRequest} from "../../store/actions";

interface propsType {
  createFolder:(name: any) => void,
  getFolders: () => void,
};

const Home = (props:propsType) => {
  //  const logoutHandler = ():void=>{
  //   localStorage.clear();
  const [name, setName] = useState("");

  const createNewFolder = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setName(e.target.value);
  };

  const addFolder= (): void => {
    let obj={
      name:name,
    }
    props.createFolder(obj);
  }

  return (<>
    <div>Home Page</div>
    <input type="text" onChange={createNewFolder} />
    <button onClick={addFolder}>create folder</button>
    <button onClick={() => {props.getFolders()}}>get folder</button>
    </>
  )
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createFolder: (name: any) => dispatch(createFolderRequest(name)),
    getFolders: () => dispatch(getFolderRequest()),
  };
};

export default connect(null, mapDispatchToProps)(Home);