var socket = io.connect('http://localhost:8080');

$("#messageForm").submit(function () {
	var nameVal = $("#nameInput").val();
	var msg = $("#messageInput").val();
	socket.emit('message', { name: nameVal, message: msg });
	return false;
});

$("#add").click(function () {
	var user = $("#nameInput").val();
	var email = $("#messageInput").val();
	// Ajax call for saving datas
	$.ajax({
		url: "./ajax/insertUser.php",
		type: "POST",
		data: { user, email },
		success: function (data) {
			console.log(data);
		},
		error: function (error) {
			console.log(error);
		}
	});
});

$("#get").click(function () {
	$.ajax({
		url: "./ajax/getUsers.php",
		type: "GET",
		success: function (data) {
			console.log(data);
		},
		error: function (error) {
			console.log(error);
		}
	});
});



$("#http-request").click(function () {
	socket.emit('say', 'hello');
	console.log('call clicked');
	$.ajax({
		url: "https://jsonplaceholder.typicode.com/posts/1",
		type: "get",
		success: function (data) {
			// console.log(data)
			$.ajax({
				url: "http://jsonplaceholder.typicode.com/users",
				type: "get",
				success: function (data) {
					console.log(data)
				},
				error: function () {
					console.log(error)
				}
			});
		},
		error: function () {
			console.log(error)
		}
	});
})

socket.on('message', function (data) {
	var actualContent = $("#messages").html();
	var newMsgContent = '<li> <strong>' + data.name + '</strong> : ' + data.message + '</li>';
	var content = newMsgContent + actualContent;

	$("#messages").html(content);
});

socket.on('say-response', function (data) {
	var actualContent = $("#messages").html();
	var newMsgContent = '<li> <strong>' + data.name + '</strong> : ' + data.message + '</li>';
	var content = newMsgContent + actualContent;

	$("#messages").html(data);
});