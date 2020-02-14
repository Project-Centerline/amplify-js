import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'amplify-label',
  styleUrl: 'amplify-label.scss',
  shadow: true,
})
export class AmplifyLabel {
  @Prop() htmlFor: string;
  @Prop() overrideStyle: boolean = false;

  render() {
    return (
      <label class="label" htmlFor={this.htmlFor}>
        <slot />
      </label>
    );
  }
}
