//Deixa a primeira letra da palavra em maiusculo(não precisei usar)

const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter;