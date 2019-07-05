class Message{
    constructor(res){
        this.res=res
        this.render()
        Message.all.push(this)
        // setInterval(()=>{
        //     fetch(`http://10.185.1.218:3000/messages/${res.id}`)
        //     .then(res => res.json())
        //     .then(data=>{
                
        //         this.allMessages()
        //     })
        // }, 5000)

    }
    render(){
        let ul = document.getElementById('messages')
        let li = document.createElement('li')
        li.innerHTML=this.res.content
        ul.append(li)
    }
    static destroyAll(){
        // this === Character
        Message.all.forEach( message => message.remove() )
    }
    // allMessages(){
    //     let ul = document.getElementById('messages')
    //     ul.innerHTML = ''
    //     for(let i = 0; i < Message.all.length; i++){
    //         let li = document.createElement('li')
    //         li.innerHTML=Message.all[i].content
    //         console.log(Message.all[i])
    //         ul.append(li)
    //     }
    // }
    static all = []
}
