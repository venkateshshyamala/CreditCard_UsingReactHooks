// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CardDetailsContainer,
  CreditCardHeadingContainer,
  CardHeading,
  HorizontalLine,
  CardContainer,
  Card,
  CardNumber,
  CardholderNameText,
  CardholderName,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const cardHolderNameInUpperCase = cardHolderName.toUpperCase()

  const onChangeCardNumber = event => setCardNumber(event.target.value)

  const onChangeCardHolderName = event => setCardHolderName(event.target.value)

  return (
    <MainContainer>
      <CardDetailsContainer>
        <CreditCardHeadingContainer>
          <CardHeading>CREDIT CARD</CardHeading>
          <HorizontalLine />
        </CreditCardHeadingContainer>
        <CardContainer>
          <Card data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardholderNameText>CARDHOLDER NAME</CardholderNameText>
            <CardholderName>{cardHolderNameInUpperCase}</CardholderName>
          </Card>
        </CardContainer>
      </CardDetailsContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardHolderName}
            onChange={onChangeCardHolderName}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </MainContainer>
  )
}

export default CreditCard
