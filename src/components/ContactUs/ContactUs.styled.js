import styled from 'styled-components';
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";


export const Container = styled.div`

margin-top: 100px;
margin-bottom: 100px;
@media screen and (min-width: 768px) {
    display: flex;
justify-content: center;
    margin-top: 150px;
    margin-bottom: 150px;
}
`;

export const StyledInput = styled.input`
box-sizing: border-box;
width: 300px;
height: 50px;
border: 1px solid #232529;
margin-bottom: 30px;
padding-left: 15px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;
display: flex;
align-items: center;
color: #767676;
@media screen and (min-width: 768px) {
    width:421px;

}
`;

export const ContainerForm = styled.div`
display:flex;
margin-top:60px;

position: relative;
@media screen and (min-width: 768px) {
    margin-left: 100px;
    margin-top:0px;
    width:450px;
}
`;

export const StyledMessage = styled.textarea`
box-sizing: border-box;
width: 300px;
height: 245px;
border: 1px solid #232529;
padding: 15px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;
color: #767676;
resize: none;

@media screen and (min-width: 768px) {
    width:440px;

}

`;

export const ButtonForm = styled.button`
margin-top:10px;
width: 90px;
height: 30px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 30px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
color: #232529;
background: #FFFFFF;
border: 1px solid #232529;
cursor: pointer;
@media screen and (min-width: 768px) {
    position: absolute;
    left: 335px;
    bottom:125px;

}
`;

export const Text = styled.h3`
width: 300px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 27px;
display: flex;
align-items: center;
text-align: center;
margin:0 0 15px 0px;
color: #232529;

@media screen and (min-width: 768px) {
    width: 500px;
    font-size: 36px;
    line-height: 44px;
    margin:0 0 40px 0px;
}

`;

export const ContactUsImg = styled.img`
width: 300px;
height: 373px;

@media screen and (min-width: 768px) {
    width: 500px;
}

`;

export const StyledLink = styled.a`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 300%;
display: flex;
align-items: center;
text-decoration: none;
color: #767676;

@media screen and (min-width: 768px) {
    margin-right:50px;
}


`;

export const MailIcon = styled(CiMail)`
width: 20px;
height: 20px;
margin-right: 10px;
`;


export const PhonIcon = styled(FiPhone)`
width: 20px;
height: 20px;
margin-right: 10px;
`;

export const ContactWrap = styled.div`
display:flex;
margin-top:30px;
`;