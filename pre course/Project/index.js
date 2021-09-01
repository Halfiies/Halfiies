function submitmessage(event) {
  event.preventDefault();       
  const email = document.getElementById("email").value;
  const fullName = document.getElementById("fullName").value;
  const message = document.getElementById("message").value;

  const messageObject = {
    email, fullName, message
  };

  let currentMessages = [];

  if (window.sessionStorage.getItem("messages")) {
    currentMessages = 
      JSON.parse(
        window.sessionStorage.getItem("messages")
      );
  }
    currentMessages.push(messageObject)
    window,sessionStorage.setItem(
      "messages",
      JSON.stringify(currentMessages)
    );

    renderMessages();
    
}

function renderMessages() {

  let currentMessages = [];
  
  if (window.sessionStorage.getItem("messages")) {
    currentMessages = 
      JSON.parse(
        window.sessionStorage.getItem("messages")
      );
  }

  let listItems = [];
  for(let i=0; i < currentMessages.length; i++) {
    let listItem = "";
    const currentMessage = currentMessages[i];
    listItem += `<dt>${currentMessage.fullName} - ${currentMessage.email} </dt>`;
    listItem += `<dd>${currentMessage.message}`;
    listItem += `<br />`;
    listItem += `<br />`;
    listItems.push(listItem);
  }

  let descList = document.getElementById('currentMessages');
  descList.innerHTML = listItems.join('');


}

renderMessages();

function clearmessages(){
  if (sessionStorage.getItem("messages")){
    window.sessionStorage.removeItem("messages");
  }

  renderMessages();

}