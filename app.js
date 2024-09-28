function sortByBirth(data) {
    return data.sort((a, b) => {
        return a.split(',')[1] - b.split(',')[1];
    });
}
const arr = [
    "Elvin, 1990",
    "Sara, 1985",
    "Anar, 2000",
    "Əkbər, 1995"
];
let people = sortByBirth(arr);
console.log(people);
