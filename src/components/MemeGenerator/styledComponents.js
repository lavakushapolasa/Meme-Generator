// Style your components here
import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 10px;
`
export const App = styled.div`
  display: flex;
`
export const Heading = styled.h1`
  color: blue;
  font-size: 20px;
`

export const Label = styled.label`
  color: lightgrey;
  margin-top: 2px;
  margin-bottom: 2px;
`

export const Input = styled.input`
  color: black;
  margin-top: 2px;
  margin-bottom: 2px;
`
export const Button = styled.button`
  color: white;
  background-color: blue;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  width: 100px;
  margin-top: 10px;
`
export const Meme = styled.div`
  background-image: url(${props => props.url});
  height: 60vh;
  width: 60vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Top = styled.p`
  font-size: ${props => props.size}px;
`

export const Bottom = styled.p`
  font-size: ${props => props.size}px;
`
