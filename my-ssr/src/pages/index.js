// pages/index.js
import React from 'react';
import Demo from '../Components/Demo'; // Ensure the correct path

export async function getServerSideProps() {
  // Fetch data from the API
  const res = await fetch('http://localhost:3000/api/data'); // Adjust the URL if necessary
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const IndexPage = ({ data }) => {
  return (
    <div>
      <Demo data={data} />
    </div>
  );
};

export default IndexPage;
