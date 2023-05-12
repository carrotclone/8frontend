import React from 'react'
import { styled } from 'styled-components';
import {CommonButton, Flx, Input, Layout} from '../components/ui';


function Login() {
  return (
    <Layout>
        <StForm>
            <div>
                <Flx>
                    <label htmlFor='ID'>아이디</label>
                    <Input type="text" value="" id='ID'/>
                </Flx>
                
                <Flx>
                    <label htmlFor='PW'>패스워드</label>
                    <Input type="text" value="" id='PW'/>
                </Flx>
            </div>
        
            <CommonButton size='large'>로그인</CommonButton>
        </StForm>
    </Layout>
  )
}

export default Login;

const StForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:calc(100vh - 150px);
    padding-top:50px;

    & label{
        display:inline-block;
        width:65px;
        line-height:43px;
        font-weight:500;
    }
    & input{
        display:inline-block;
        width:calc(100% - 65px);
        margin-bottom:15px;
    }
`

