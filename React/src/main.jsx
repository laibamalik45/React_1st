import { createRoot } from "react-dom/client";
import React from "react";
let div = document.getElementById("root");


// components
let Header = () => {
  return (
    <div>
      <h1>Header component</h1>  <hr />

    </div>
  );
};

let Paragraph = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ducimus officia ut itaque quam fugiat. Eum quas culpa sed
      corrupti eaque aspernatur quia! Obcaecati cumque accusamus
      sit repellat praesentium, ut aliquid?
    </div>
  );
};

let Image = () => {
  return (
    <div>
      <img src="\vite.svg" alt="" />  <br /> <br />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxWgnoqyjrmXkxIm_NftI_kJOHwIeBi9ViA&s" alt="" />
    </div>
  );
};

let List = () => {
  return (
    <div>
      <ul>
        <li>science</li>
        <li>Computer</li>
        <li>Maths</li>
        <li>Physics</li>
        <li>English</li>
      </ul>
    </div>
  );
};


let Table = () => {
  return (
    <div>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
         <tr>
          <th>Maheen</th>
          <th>19</th>
         </tr>
      </table>

    </div>
  );
};

let Footer = () => {
  return (
    <div>
      <h1>Footer component</h1>
    </div>
  );
};

createRoot(div).render(
  <div>
    <Header />
    <Paragraph />
    <br />
    <Image />
    <br />
    <List />
    <br />
    <Table />
    <br />
    <Footer />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, praesentium et facilis sunt quod sed provident magnam corporis est consequatur delectus eveniet itaque, debitis, eum nesciunt atque in tempore fugiat.</p>
  </div>

);