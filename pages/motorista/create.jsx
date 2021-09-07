import React from "react";
import PropTypes from "prop-types";
import Form from "../../components/form";
import Layout from "../../components/Layout";

const create = (props) => {
  return (
    <Layout>
      <Form />
    </Layout>
  );
};

create.propTypes = {};

export default create;
