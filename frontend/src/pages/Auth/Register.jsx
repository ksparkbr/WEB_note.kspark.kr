import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { reduxAction } from "../../redux/redux-action"

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`

const FlexWrapper = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items: center;
`
const Card = styled.div`
    width: 300px;
`
const CardHeader= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CardHeaderTitle = styled.div`
    font-weight: bold;
`
const CardBody = styled.div`

`
const BackBtn = styled.div`
    & img{
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
`
const FormControl = styled.div`
    display: flex;
    & input{
        width: 100%;
        background-color: transparent;
        border: 1px solid grey;
        border-left: 0;
        border-radius: 0px 10px 10px 0px;
        padding: 0px 10px 0px 10px;
    }
    padding: 10px 0px 10px 0px;
    justify-content: center;
`

const FormControlImg = styled.img`
    width: 30px;
    border: 1px solid grey;
    border-right: 0;
    border-radius: 10px 0px 0px 10px;
    padding: 5px;
    padding-left: 10px;
`
const Button = styled.div`
    background-color: #0055ff;
    font-weight: bold;
    color: white;
    padding: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: .3s;
    &:hover{
        background-color: blue;
    }
`
export default function Register(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [registerInfo, setRegisterInfo] = useState({
        id : '', password : '', retypePassword : ''
    })

    const formValidate = () => {
        let rtnMsg = {
            msg : 'OK',
            result : true
        }
        if(!!!registerInfo.id){
            rtnMsg = {
                msg : "아이디가 비어있습니다.",
                result : false
            }
        }
        if(!!!registerInfo.password){
            rtnMsg = {
                msg : "패스워드가 비어있습니다.",
                result : false
            }
        }
        if(registerInfo.password !== registerInfo.retypePassword){
            rtnMsg = {
                msg : "비밀번호 확인값이 다릅니다.",
                result : false
            }
        }
        dispatch(reduxAction.ALERT({type: 'ALERT', type: rtnMsg.result ? 'info' : 'error', msg: rtnMsg.msg, show: true}));
        return rtnMsg;
    }

    return <Wrapper>
        <FlexWrapper>
            <Card>
                <CardHeader>
                    <BackBtn>
                       <img src="/image/back.png" onClick={()=>{
                            navigate("/login");
                       }}/>   
                    </BackBtn>
                    <CardHeaderTitle>
                        Register
                    </CardHeaderTitle>
                </CardHeader>
                <CardBody>
                    <FormControl>
                        <FormControlImg src="/image/user.png" />
                        <input 
                            type="text" placeholder="ID" 
                            onChange={(e)=>{
                                setRegisterInfo({...registerInfo, id : e.target.value});
                            }}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControlImg src="/image/password.png" />
                        <input 
                            type="text" placeholder="Password"
                            onChange={(e)=>{
                                setRegisterInfo({...registerInfo, password : e.target.value});
                            }}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControlImg src="/image/password.png" />
                        <input 
                            type="text" placeholder="Retype Password"
                            onChange={(e)=>{
                                setRegisterInfo({...registerInfo, retypePassword : e.target.value});
                            }}
                        />
                    </FormControl>
                    <FormControl>
                        <Button onClick={()=>{formValidate()}}>
                            Join
                        </Button>
                    </FormControl>
                </CardBody>
            </Card>
        </FlexWrapper>
    </Wrapper>
}