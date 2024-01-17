import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;

  height: 100vh;
  flex-wrap: wrap;
`
export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3b4b69;
  //   justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex-grow: 1;
  min-width: 400px;
`

export const RightSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  flex-grow: 1;
  padding: 20px;
`
export const InputMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  border: 1px solid #c3cad9;
  border-radius: 10px;
  box-shadow: 0px 1px 10px;
`

export const InputField = styled.input`
  padding: 5px 20px 10px 20px;
  width: 100%;
  border: 1px solid #d3d9e0;
  outline: none;
  border-radius: 4px;
  margin-bottom: 20px;
`
export const Heading = styled.h1`
  font-size: 20px;
  margin: 0px;
  color: #344e7a;
  margin-bottom: 30px;
`
export const CreditCardHeading = styled.h1`
  font-size: 30px;
  margin: 0px;
  color: white;
  //   border-bottom: 5px solid red;
`

export const HrLine = styled.hr`
  width: 80%;
  border: 3px solid #ffd773;
  margin-right: 38px;
`
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-bottom: 150px;
`
export const ImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 390px;
  height: 100%;
  padding: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const CreditCardNumber = styled.p`
  color: white;
  font-family: 'Roboto';
  margin: 0px;
  margin-bottom: 40px;
  font-size: 25px;
`
export const CreditCardHolder = styled.p`
  color: white;
  font-size: 20px;
  font-family: 'Roboto';
  margin: 0px;
`
export const CreditCardHolderTitle = styled.p`
  color: white;
  font-size: 15px;
  font-weight: 300;
  font-family: 'Roboto';
  margin: 0px;
  margin-bottom: 20px;
`
