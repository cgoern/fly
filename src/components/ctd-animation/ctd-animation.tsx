import { Component, Host, Element, Prop, h } from '@stencil/core'
import lottieWeb from 'lottie-web'

@Component({
	tag: 'ctd-animation',
	styleUrl: 'ctd-animation.css',
	shadow: true,
})
export class CtdAnimation {
	private wrapper: HTMLDivElement
	private animationData: any

	/**
	 * The host element.
	 */
	@Element() host: HTMLCtdAnimationElement

	/**
	 * Wether the animation should start automatically.
	 */
	@Prop() autoplay: boolean = true

	/**
	 * The animation data as JSON-parsable string.
	 */
	@Prop() data: string

	/**
	 * The height of the animation.
	 */
	@Prop() height: string

	/**
	 * Wether the animation should repeat infinitely
	 */
	@Prop() loop: boolean = true

	/**
	 * The URL to a JSON file, containing the animation data.
	 */
	@Prop() url: string

	/**
	 * The width of the animation.
	 */
	@Prop() width: string

	async componentWillLoad() {
		/**
		 * Fetch or parse animation data.
		 */
		this.animationData = this.url
			? await fetch(this.url)
					.then((response) => response.json())
					.then((data) => data)
					.catch((error) => console.log(error))
			: this.data
			? JSON.parse(this.data)
			: null

		/**
		 * Optionally set animation width.
		 */
		if (this.width) {
			this.host.style.setProperty('--ctd-animation-width', this.width)
		}

		/**
		 * Optionally set animation height.
		 */
		if (this.height) {
			this.host.style.setProperty('--ctd-animation-height', this.height)
		}
	}

	componentDidLoad() {
		/**
		 * Initialize the animation.
		 */
		lottieWeb.loadAnimation({
			container: this.wrapper,
			renderer: 'svg',
			loop: this.loop,
			autoplay: this.autoplay,
			animationData: this.animationData,
			rendererSettings: {
				viewBoxOnly: true,
			},
		})
	}

	render() {
		return (
			<Host>
				<div class="wrapper" ref={(element) => (this.wrapper = element)} />
			</Host>
		)
	}
}
