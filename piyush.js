fetch(
  "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"
)
  .then((res) => res.json())
  .then(function (datas) {
    for (var i in datas) {
      var row = `
        <tr>
          <td>${datas[i].userId}</td>
          <td>${datas[i].id}</td>
          <td>${datas[i].title}</td>
          <td>${datas[i].body}</td>
        </tr>1
`;
      var table = $("#table-body");
      table.append(row);
    }
  });
