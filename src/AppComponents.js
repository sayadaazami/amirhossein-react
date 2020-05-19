import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function AppComponetnt() {
  return (
    <section>
      {Header({ name: "sayad", age: 30 })} */}
      <Header name="armin" age="23" />
      <Content>
        <p>this is a p tag</p>
        <h2>this is title</h2>
      </Content>
      <Content children="dasdas" />
      <Content children="prop children">inner children</Content>
      <Content children={[<p>this is a p tag</p>, <h2>this is title</h2>]} />
      <Footer />
    </section>
  );
}
