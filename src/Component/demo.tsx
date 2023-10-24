import { QuarkElement, customElement } from 'quarkc'

/**
 * tag: 组件名称 
 * 必须包含连字符（hyphen）：自定义元素的名称必须包含至少一个连字符（"-"），这是为了确保它们与内置的 HTML 元素区分开来。例如，my-element 是一个有效的自定义元素名称。

不能包含大写字母：自定义元素的名称必须全部是小写字母。不允许使用大写字母来定义自定义元素的名称。例如，my-element 是有效的，但My-Element 或myElement 是无效的。

具有语义：最好选择具有语义的名称，以便更容易理解元素的用途。例如，如果你创建一个自定义元素来表示一个购物车图标，你可以选择名称shopping-cart-icon而不是element-123。

具有唯一性：确保自定义元素的名称在你的应用程序范围内是唯一的，以避免与其他自定义元素名称冲突。
 */
@customElement({ tag: "demo-1" })
class Demo extends QuarkElement {

  componentDidMount() {
    console.log('????????????', 'dom loaded');
  }

  render() {
    return (
      <>
        <div>
          <h1>demo</h1>
        </div>
      </>
    )
  }
}