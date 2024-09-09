export default class Validator {
    static validateUsername(username){
        const validCharacters = /^[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z]$/.test(username);
        const conditionDigits = !/\d{4,}/.test(username);
        return validCharacters && conditionDigits;
    }
}