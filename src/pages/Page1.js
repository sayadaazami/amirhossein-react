import React from "react";

function Page1(props) {
  console.log(props);

  function renderTags() {
    let items = [];
    for (let i = 0; i < 20; i++) {
      items.push(<p key={i}>dasdasdasdada</p>);
    }
    return items;
  }

  return (
    <section>
      <h1 id="part1">Page 1</h1>
      {renderTags()}

      <h1 id="part2">Page 2</h1>
      {renderTags()}

      <h1 id="part3">Page 3</h1>
      {renderTags()}
    </section>
  );
}

export default Page1;
