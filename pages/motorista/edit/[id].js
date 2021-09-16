import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Form from "../../../components/form";
import { useRouter } from "next/router";
import { Rating } from "react-simple-star-rating";
import Layout from "../../../components/Layout"

const Edit = (props) => {
  const router = useRouter();
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(router.query.id);
  }, [router.query]);

  return (
    <div>
    <Layout> 
      <Form id={id} />
      <Rating id={id}/>
      </Layout>
    </div>
  );
};

Edit.propTypes = {};

export default Edit;
