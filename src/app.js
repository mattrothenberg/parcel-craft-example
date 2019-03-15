import './app.css';

const mapOfBundles = {
  codeSplitting: import('./codeSplitting.js')
}

window.addEventListener("load", function(event) {
  const [bodyClass] = document.body.classList
  if (mapOfBundles[bodyClass]) {
    mapOfBundles[bodyClass].then(res => {
      console.log('You did it!', res)
    })
  }
});