import React, { createElement } from 'react'
import { create } from 'react-test-renderer'

import Transliteration from './../Transliteration'

// Still makes sense to see if this Component actually renderable
describe("[RENDER] Transliteration – Snapshot test", ()=> {
    test("Matches the snapshot", ()=>{
        const translit = create(<Transliteration/>)
        expect(translit.toJSON()).toMatchSnapshot()
    })
})
