import React from "react";

export default function Jumbotron() {
  return (
    <div class="bg-light p-5 rounded-lg m-3">
      <h1 class="display-4">Hello, Galaxy!</h1>
      <p class="lead">
        You are going to learn so much about planets on this website. You will know cool facts and stuff that would generate a conversation.
      </p>
      <hr class="my-4" />
      <p>
        These are some of the planets in our solar system. I hope you know these, but if you don't then I will show you.
      </p>
      <a class="btn btn-primary btn-lg" href="#" role="button">
        Learn more
      </a>
    </div>
  );
}
