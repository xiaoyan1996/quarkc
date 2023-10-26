import { QuarkElement, customElement, property} from "quarkc"

@customElement({ tag: "quark-count" })
class Count extends QuarkElement {
	@property({
		type: Number,
		attribute: 'count-number' 
	})
	countNumber = 0

	@property({
		type: Boolean,
	})
	disabled = false

	@property() 
	text = ''

	click = () => {
        console.log('>>', this.disabled);
		if(!this.disabled) { 
			console.log('count click') 
		}
	}

	render() { 
		return ( 
			<> 
				<button onClick={this.click}>{this.countNumber}</button> 
				<span>{this.text}</span> 
			</> 
		) 
	}
}