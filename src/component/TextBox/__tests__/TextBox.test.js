import React, { createElement } from 'react'
import { create } from 'react-test-renderer'

import TextBox from './../TextBox'

describe("[RENDER] TextBox – Snapshot test", ()=> {
    test("Matches the snapshot", () => {
        const textbox = create(<TextBox label="TextBox" id="textbox" value="0"/>)
        expect(textbox.toJSON()).toMatchSnapshot()
    })
})
