console.trace("main loaded");
$.get("http://localhost:63381/api/values", function (data) {
    alert(data);
})