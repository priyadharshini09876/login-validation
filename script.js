$(document).ready(function() {
    $("#login-form").submit(function(event) {
        event.preventDefault();

        var username = $("input[name='username']").val();
        var password = $("input[name='password']").val();

        if (username.trim() === "" || password.trim() === "") {
            $("#login-error").text("Please enter username and password.");
            return;
        }
        $.post("login.php", { username: username, password: password }, function(data) {
            if (data === "success") {
                window.location.href = "dashboard.html";
            } else {
                $("#login-error").text("Invalid username or password. Please try again.");
            }
        });
    });
});
