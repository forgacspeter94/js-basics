console.log('hello world');

//function loadEvent () {
 //   console.log('loaded');

  //  document.getElementById('root').innerHTML='Sziasztok!'
//}

//window.addEventListener('load',loadEvent)

function loadEvent() {
    let root = document.getElementById('root');
    root.insertAdjacentHTML('beforeend',
    <h1>Tetszőleges mondat</h1>
    ')

}
window.addEventListener ('load', loadEvent);