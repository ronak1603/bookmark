import React, { useEffect, useState } from 'react'
import { userProfile } from '../../store/actions/index';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useSelector } from 'react-redux'
import FaSpinner from 'react-icons';
import styled from 'styled-components';
import { BarLoader } from "react-spinners";
import { profileReducer } from "../../store/reducer/index"

interface profileProps {
  requestData: () => void,
  users: any,
  isLoading: boolean
}


const Container = styled.div`
display: flex;
flex-wrap: wrap;
width:100%;
height:100%;
justify-content:center;
`
const ProfileImage = styled.img`
height:80%;
width:80%;
margin-top:5%;
border-radius: 10px;
`

const ProfileItem = styled.div`
// border:1px solid black;
width:20%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
margin-top:25px;
margin-right:35px;
border-radius: 15px;
`

const UserDetailes = styled.div`
display:flex;
margin-top:3%;
justify-content:center;
`

const UserName = styled.div`
width:100%;
font-size:20px;
font-weight:bold;
font-family: 'Inter', sans-serif;`

const Profile = (props: profileProps) => {

  useEffect(() => {
    props.requestData()
  }, [])

  const userProfile = (url: string) => {
    return window.open(url)
  }

  return (<Container>
    {props.isLoading ? <BarLoader /> : (props.users.map((obj: any) => {
      return (
        <>
          <ProfileItem key={obj.id} onClick={() => userProfile(obj.url)}>
            <ProfileImage src={obj.avatar_url} />
            <UserDetailes>
              <UserName>
                {obj.login}
              </UserName>
            </UserDetailes>
          </ProfileItem>
        </>
      )
    }))

    }
  </Container>
  )
}

const mapStateToProps = (state: profileProps) => {
  return {
    users: state.users,
    isLoading: state.isLoading,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    requestData: () => dispatch(userProfile()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

