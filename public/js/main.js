function app(){
	const socket = io();
	/*
	 * returns string: including message that passed in
	 */
	function msgBlock(msg){
		var str = "<li>"+USER_NAME+": "+msg+"</li>";
		return str;
	}

	socket.on('chat message', (msg)=>{
		$('#chat_pan').append(msgBlock(msg));
	});
	
	$('#button').click(()=>{
		var str = msgBlock($('#message').val());
		socket.emit('chat message',str);

		$('#chat_pan').append(str);
	});
}
app();
