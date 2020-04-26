import TranslitModel from './../TranslitModel'

describe("[Functional] Translit Model - check for correct execution",()=>{
    test("Test привет",()=>{
        expect(TranslitModel("привет")).toBe("privet")
    })

    test("Test до свидания",()=>{
        expect(TranslitModel("до свидания")).toBe("do svidaniya")
    })
})
