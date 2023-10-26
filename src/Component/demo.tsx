import { QuarkElement, property, customElement, state } from 'quarkc'

@customElement({ tag: "demo-1" })
class Demo extends QuarkElement {
  @state()
  text = 'demo22';

  @state()
  text2 = 'demo22';

  componentDidMount() {
    console.log('componentDidMount');
  }

  onChange1 = () => {
    console.log('>>>>>>>', 'onChange1');
    this.text = 'demo33';
  }

  onChange2() {
    this.text2 = 'demo33';
  }

  render() {
    console.log('!!!!!!!!!!!!!!!');
    return (
      <>
        <div>
          <h1>{this.text}</h1>
          <button onClick={this.onChange1}>按钮1</button>
          <h1>{this.text2}</h1>
          <button onClick={() => this.onChange2()}>按钮2</button>
        </div>
      </>
    )
  }
}