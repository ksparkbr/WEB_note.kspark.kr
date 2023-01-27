import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
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

const LoginForm = styled.div`
    width: 300px;
`

const LoginFormHeader = styled.div`

`

const LogoImg = styled.img`
    width: 300px;

`

const LoginFormBody = styled.div`

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

export default function Login(){
    useEffect(()=>{
        document.title = "LOGIN | note.kspark.kr"
    },[])

    const navigate = useNavigate()

    return <Wrapper>
            <FlexWrapper>
                <LogoImg src="/image/logo-full.png" />
                <LoginForm>
                    <LoginFormBody>
                        <FormControl>
                            <FormControlImg src="/image/user.png" />        
                            <input type="text" placeholder='ID'/>
                        </FormControl>  
                        <FormControl>
                            <FormControlImg src="/image/password.png" />        
                            <input type="password"  placeholder='Password'/>
                        </FormControl>  
                        <FormControl>
                            <Button>
                                Login
                            </Button>
                            <Button onClick={()=>{navigate("/register")}}>
                                Register
                            </Button>
                        </FormControl>
                    </LoginFormBody>
                </LoginForm>
            </FlexWrapper>
        </Wrapper>
}