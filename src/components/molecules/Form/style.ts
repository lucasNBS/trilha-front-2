import styled from "styled-components"

export const FormContainer = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    max-width: 500px;
  }
`

export const FormSubcontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 0.5rem;
`

export const Label = styled.label`
  font-size: 1.5rem;
`

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #000;
`

export const Select = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #000;
`

export const Option = styled.option``

export const ErrorMessage = styled.p`
  font-size: 0.9rem;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.error};
`