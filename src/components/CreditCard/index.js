import {useState} from 'react'

import {
  MainContainer,
  LeftSideContainer,
  RightSideContainer,
  InputMainContainer,
  InputField,
  Heading,
  CreditCardHeading,
  HrLine,
  TitleDiv,
  ImageContainer,
  CreditCardNumber,
  CreditCardHolder,
  CreditCardHolderTitle,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [creditCardNumber, setCreditCardNumber] = useState('')

  const enterNumber = event => {
    setCreditCardNumber(event.target.value)
  }

  const enterName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <LeftSideContainer>
        <TitleDiv>
          <CreditCardHeading>Credit Card</CreditCardHeading>
          <HrLine />
        </TitleDiv>
        <ImageContainer data-testid="creditCard">
          <CreditCardNumber>{creditCardNumber}</CreditCardNumber>
          <CreditCardHolderTitle>CARDHOLDER NAME</CreditCardHolderTitle>
          <CreditCardHolder>{name.toUpperCase()}</CreditCardHolder>
        </ImageContainer>
      </LeftSideContainer>
      <RightSideContainer>
        <InputMainContainer>
          <Heading>Payment Method</Heading>
          <InputField
            placeholder="Card Number"
            type="text"
            onChange={enterNumber}
            value={creditCardNumber}
          />
          <InputField
            placeholder="Cardholder Name"
            type="text"
            onChange={enterName}
            value={name}
          />
        </InputMainContainer>
      </RightSideContainer>
    </MainContainer>
  )
}

export default CreditCard
