const scriptURL = 'https://script.google.com/macros/s/AKfycbzn1xUm-muooxnB22cxjVh7wYd1t9d3G_NLf01GYJFbxs3Q7RSTrmcKsJhR2jn1CYO_Zw/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent Successfuly"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })