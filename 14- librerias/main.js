/* alert("bienvenidos a js")


Swal.fire('bienvenidos a js, pero con mas facha') */




/* Swal.fire(
    {
    title: 'mati esta en la clase',
    text: 'sisi, esta aca',
    icon: 'success',
    timer: 3000,
}
)
 */


/* Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
})

 */







const DataTime = luxon.DataTime;
const dt = DateTime.fromObject(
    {day:24, hour: 20, month:10}
)
const resta = dt.minus({ month: 2, days: 10 })
//month:8, day:14

console.log(dt.toString())