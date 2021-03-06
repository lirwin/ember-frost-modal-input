const expect = chai.expect

import {describeComponent} from 'ember-mocha'
import {beforeEach, it} from 'mocha'

describeComponent(
  'frost-modal-input',
  'FrostModalInputComponent',
  {},
  function () {
    let component

    beforeEach(function () {
      component = this.subject()
    })

    it('includes className frost-modal-input', function () {
      expect(component.classNames).to.include('frost-modal-input')
    })
  }
)
