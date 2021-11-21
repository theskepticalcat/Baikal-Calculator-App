export default function autocomplete(val, arr) {
    if (val === '') {
    return [];
    }

    var reg = new RegExp(`^${val}`, 'i');   //регулярка со значением из инпута
    let result = arr.filter(item => item.name.match(reg));
    return result;
}