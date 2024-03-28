import {Component} from 'react'
import {
  App,
  Heading,
  Label,
  Input,
  Form,
  Button,
  Meme,
  Top,
  Bottom,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {url: '', topText: '', bottomText: '', fontSize: '', show: false}

  urlChange = event => {
    this.setState({
      url: event.target.value,
    })
  }

  topTextChange = event => {
    this.setState({
      topText: event.target.value,
    })
  }

  bottomTextChange = event => {
    this.setState({
      bottomText: event.target.value,
    })
  }

  fontChange = event => {
    this.setState({
      fontSize: event.target.value,
    })
  }

  generateMeme = () => {
    this.setState({
      show: true,
    })
  }

  render() {
    const {url, topText, bottomText, fontSize, show} = this.state
    console.log(topText, url)
    return (
      <App>
        <Form>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="url">Image Url</Label>
          <Input
            type="text"
            placeholder="url"
            id="url"
            onChange={this.urlChange}
          />
          <Label htmlFor="top-text">Top Text</Label>
          <Input
            type="text"
            placeholder="top text"
            id="top-text"
            onChange={this.topTextChange}
          />
          <Label htmlFor="bottom-text">Bottom Text</Label>
          <Input
            type="text"
            placeholder="bottom text"
            id="bottom-text"
            onChange={this.bottomTextChange}
          />
          <Label htmlFor="size">Font Size</Label>
          <select onChange={this.fontChange} id="size">
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId}>{each.displayText}</option>
            ))}
          </select>
          <Button type="button" onClick={this.generateMeme}>
            Generate
          </Button>
        </Form>
        <Meme url={url} visible="false" data-testid="meme">
          <Top size={fontSize}>{topText}</Top>
          <Bottom size={fontSize}>{bottomText}</Bottom>
        </Meme>
      </App>
    )
  }
}

export default MemeGenerator
