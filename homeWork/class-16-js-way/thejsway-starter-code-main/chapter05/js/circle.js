/*
Circumference and area of a circle
*/

let radius = Number(prompt("Enter the radius of a circle to calculate its circumference and area."))

function circumference() {
    let circumference = (2 * Math.PI * radius);
    return circumference;
}

function areaOfCircle() {
    let area = (Math.PI * radius ** 2);
    return area;
}

alert(`Circumference = ${Math.round((circumference() + Number.EPSILON) * 100) / 100} | Area = ${Math.round((areaOfCircle() + Number.EPSILON) * 100) / 100}`);