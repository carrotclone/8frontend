import React, { useState } from 'react'
import { styled } from 'styled-components';
import { Input, CommonButton, Layout, Flx } from '../components/ui';

function SignUp() {
    const [input, setInput] = useState({
        id:'',
        pw:'',
        pwConfirm:'',
        nickname:''
    });

    const onChangeInputHandler = (e) => {
        setInput({...input, [e.target.id]:e.target.value})
    };

    const onDoubleCheckIdHandler = () => {

    }

    const onSubmitJoinHandler = (e) => {
        e.preventdefault();
        const userInfo = {
            id:input.id,
            pw:input.pw,
            nickname:input.nickname
        }
        setInput({id:'',pw:'',nickname:''});
    };
  return (
    <Layout>
        <StForm onSubmit={() => onSubmitJoinHandler}>
            <div>
                <Flx>
                    <label htmlFor='nickname'>닉네임</label>
                    <Input type="text" value={input.nickname} id='nickname' placeholder='3~10글자 사이 영문' onChange={onChangeInputHandler}/>
                    {
                        /^[a-zA-Z]{3,10}$/.test(input.nickname) ?
                        null
                        :
                        <p className='alertText'>5~10글자 사이 영문을 사용하세요.</p>
                    }
                </Flx>

                <Flx>
                    <label htmlFor='ID'>아이디</label>
                    <StyledInput type="text" value={input.id} id='id' placeholder='5~10글자 사이 영문 소문자,숫자'/>
                    <CommonButton size='small' onClick={() => onDoubleCheckIdHandler}>중복확인</CommonButton>
                    {
                        /^[a-z0-9]{8,15}$/.test(input.id) ?
                        null
                        :
                        <p className='alertText'>8~15글자 사이 영문 소문자,숫자를 사용하세요.</p>
                    }
                </Flx>
                
                <Flx>
                    <label htmlFor='PW'>패스워드</label>
                    <Input type="password" value={input.pw} id='pw' placeholder='8~15글자 사이 영문,숫자,특수문자'/>
                    {
                        /^[a-zA-Z0-9!@#$%^&*()\-_=+{};:,.<>?[\]\\/]{8,15}$/.test(input.pw) ?
                        null
                        :
                        <p className='alertText'>8~15글자 사이 영문,숫자,특수문자를 사용하세요.</p>
                    }
                    
                </Flx>

                <Flx>
                    <label htmlFor='PWConfirm'>중복확인</label>
                    <Input type="password" value="" id='pwConfirm' placeholder='비밀번호 확인을 위해 한번 더 입력해주세요'/>
                    {
                        input.pw === input.pwConfirm ?
                        null
                        :
                        <p className='alertText'>비밀번호가 일치하지 않습니다.</p>
                    }
                </Flx>
                
            </div>
            <CommonButton size='large'>회원가입</CommonButton>
        </StForm>
    </Layout>
  )
}

export default SignUp;

const StForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:calc(100vh - 150px);
    padding-top:50px;
    &>div>div{
        position:relative;
        border:1ps solid #f00;
    }

    & label{
        display:inline-block;
        width:65px;
        line-height:43px;
        font-weight:500;
    }
    & .alertText{
        position:absolute;
        top:45px;
        display:inline-block;
        color:#f00;
        margin:3px 0 25px;
        transform:translateX(70px);
    }
    & input{
        display:inline-block;
        width:calc(100% - 65px);
        margin-bottom:50px;
    }
`
const StyledInput = styled(Input)`
  display: inline-block;
  width:calc(100% - 168px) !important;
  margin-right:8px;
`


