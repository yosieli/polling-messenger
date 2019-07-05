function newMessages(){
    setInterval(()=>{
    fetch(`http://10.185.1.218:3000/messages`)
    .then(res => res.json())
    .then(data=>{              
        let ul = document.getElementById('messages')
        ul.innerHTML =" "
        console.log(ul)
        for(let i = 0; i<data.length; i++){
            let li = document.createElement('li')
            li.innerHTML=data[i].content
            ul.append(li)
        }
    })
    }, 500)
}



document.addEventListener('DOMContentLoaded', () => {
    fetch("http://10.185.1.218:3000/messages")
    .then(function(response){return response.json()})
    .then(function(res){
        newMessages()
        let text = document.querySelector('#message_input')
        let submitBtn =  document.querySelector('#submitBtn')
        for(let i=0; i< res.length; i++){
            new Message(res[i])
        }
        submitBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            fetch("http://10.185.1.218:3000/messages",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: text.value
                })
            })
            .then(res => res.json())
            .then(data=>{
                new Message(data)
            })
        })
    })
})
