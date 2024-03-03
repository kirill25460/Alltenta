import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 150px;
margin-bottom: 150px;
`;

export const StyledInput = styled.input`
height:50px;
width:421px;
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
`;

export const ContainerForm = styled.div`
display:flex;
margin-left: 100px;
width:450px;
position: relative;
`;

export const StyledMessage = styled.textarea`
height:245px;
width:440px;
border: 1px solid #232529;
padding: 15px;
box-sizing: border-box;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 30px;
color: #767676;
resize: none;
`;

export const ButtonForm = styled.button`
position: absolute;
left: 335px;
bottom:25px;
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

`;

export const Text = styled.h3`
width: 500px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 44px;
display: flex;
align-items: center;
color: #232529;
margin:0 0 40px 0px;
`;

export const ContactUsImg = styled.img`
width: 500px;
height: 373px;
`;