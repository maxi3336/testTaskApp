export const requiredField = value => { //Обязательное поле
    if(value)
        return undefined
    return 'Field is required'
}

export const maxLength = length => value => {
    if(value.length > length) return `Max length is ${length} symbols`
    return undefined
}
